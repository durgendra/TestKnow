import tryCatch from "./utils/tryCatch.js";
import NewsQuiz from "../models/NewsQuiz.js";
import {
  EventRegistry,
  QueryArticles,
  ArticleInfoFlags,
  ReturnInfo,
  RequestArticlesInfo,
} from "eventregistry";

import dontenv from "dotenv";

dontenv.config();

const DEFAULT_PARAMS = {
  model: "gpt-3.5-turbo-1106",
  // model: "gpt-4",
};
var er = new EventRegistry({
  apiKey: process.env.EVENT_REGISTRY_API_KEY,
});
var usUri = er.getLocationUri("INDIA");

var articlesFilter = {
  lang: ["eng"],
  sourceUri: ["thehindu.com"],
  dataType: "news",
};

export const createNews = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newsQuiz = new NewsQuiz({ ...req.body, uid, uName, uPhoto });

  const q = new QueryArticles({
    ...articlesFilter,
    keywords: [newsQuiz.newsSearchTitle],
    keywordsLoc: "body",
  });
  const requestArticlesInfo = new RequestArticlesInfo({
    count: 10,
    sortBy: "date",
    sortByAsc: false,
  });
  q.setRequestedResult(requestArticlesInfo);
  er.execQuery(q)
    .then(async (response) => {
      response.articles.results.map(function (item) {
        newsQuiz.newsResults.push({
          nLink: item.url,
          nSource: item.source.title,
          nTitle: item.title,
          nBody: item.body,
          nDate: item.date,
        });
      });
      await newsQuiz.save();
      res
        .status(201)
        .json({ success: true, result: newsQuiz, message: "Successful" });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, Try later" });
    });
  // });
});

export const createQuiz = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const { objectId } = req.body;
  const newsQuiz = await NewsQuiz.findById(objectId);
  if (!newsQuiz?.standardQuizAI) {
    if (!newsQuiz?.newsAllResults) {
      newsQuiz.newsResults.map(function (item) {
        newsQuiz.newsAllResults = newsQuiz.newsAllResults + " " + item.nBody;
      });
      const textContent = newsQuiz.newsAllResults;
      newsQuiz.newsAllResults = textContent.substring(0, 11000);
      await newsQuiz.save();
    }
    const params = {
      ...DEFAULT_PARAMS,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who can create a quiz based on texts. I will provide texts. Basis that texts, create a quiz with 20 questions and options. List the correct answers of all question at the end of your response",
        },
        {
          role: "user",
          content: String(newsQuiz.newsAllResults),
        },
      ],
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(process.env.OPENAI_API_KEY),
      },
      body: JSON.stringify(params),
    };

    await fetch("https://api.openai.com/v1/chat/completions", requestOptions)
      .then((response) => response.json())
      .then(async (data) => {
        const text = data.choices[0].message.content;
        newsQuiz.standardQuizAI = text;
        await newsQuiz.save();
        res.status(201).json({ success: true, result: newsQuiz });
      })
      .catch((error) => {
        console.log(error);
        res
          .status(500)
          .json({ success: false, message: "Something went wrong, Try later" });
      });
  } else {
    res.status(201).json({ success: true, result: newsQuiz });
  }
});

export const createStatementQuiz = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const { objectId } = req.body;
  const newsQuiz = await NewsQuiz.findById(objectId);
  // if (!newsQuiz?.statementQuizAI) {
  if (!newsQuiz?.newsAllResults) {
    newsQuiz.newsResults.map(function (item) {
      newsQuiz.newsAllResults = newsQuiz.newsAllResults + " " + item.nBody;
    });
    const textContent = newsQuiz.newsAllResults;
    newsQuiz.newsAllResults = textContent.substring(0, 11000);
    await newsQuiz.save();
  }
  const schema = {
    type: "object",
    properties: {
      statementsOne: {
        type: "string",
        description:
          "List 3 statements about the 1st entity where 2 statements are correct about the 1st entity from the paragraph and 1 statement is incorrect about the 1st entity.",
      },
      statementsTwo: {
        type: "string",
        description:
          "List 3 statements about 2nd entity where 2 statements are correct about the 2nd entity from the paragraph and 1 statement is incorrect about the 2nd entity.",
      },
      statementsThree: {
        type: "string",
        description:
          "List 3 statements about 3rd entity where 2 statements are correct about the 3rd entity from the paragraph and 1 statement is incorrect about the 3rd entity.",
      },
    },
  };

  const params = {
    ...DEFAULT_PARAMS,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant who can generate list of statements.",
      },
      {
        role: "user",
        content:
          "Based on a given paragraph, pick 3 entities from the paragraph and list 3 statements about those 3 entities. So, list total of 9 statements based on further instructions. Paragraph: " +
          String(newsQuiz.newsAllResults),
      },
      // {role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020."},
      // {role: "user", content: "Where was it played?"}
    ],
    functions: [{ name: "set_option", parameters: schema }],
    function_call: { name: "set_option" },
  };
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + String(process.env.OPENAI_API_KEY),
    },
    body: JSON.stringify(params),
  };

  await fetch("https://api.openai.com/v1/chat/completions", requestOptions)
    .then((response) => response.json())
    .then(async (data) => {
      const text = data.choices[0].message.function_call.arguments;
      const text2 = JSON.parse(text);
      // const result =
      //   "1. Consider the following statements: " +
      //   "\r\n" +
      //   text2["statementsOne"] +
      //   "\r\n" +
      //   "\r\n" +
      //   "How many of the statements given above are correct: " +
      //   "\r\n" +
      //   "\r\n" +
      //   "a)Only One " +
      //   "\r\n" +
      //   "b)Only Two " +
      //   "\r\n" +
      //   "c)All the above " +
      //   "\r\n" +
      //   "d)None of the above " +
      //   "\r\n" +
      //   "\r\n" +
      //   "\r\n" +
      //   "2. Consider the following statements: " +
      //   "\r\n" +
      //   text2["statementsTwo"] +
      //   "\r\n" +
      //   "\r\n" +
      //   "How many of the statements given above are correct: " +
      //   "\r\n" +
      //   "\r\n" +
      //   "a)Only One " +
      //   "\r\n" +
      //   "b)Only Two " +
      //   "\r\n" +
      //   "c)All the above " +
      //   "\r\n" +
      //   "d)None of the above " +
      //   "\r\n" +
      //   "\r\n" +
      //   "\r\n" +
      //   "3. Consider the following statements: " +
      //   "\r\n" +
      //   text2["statementsThree"] +
      //   "\r\n" +
      //   "\r\n" +
      //   "How many of the statements given above are correct: " +
      //   "\r\n" +
      //   "\r\n" +
      //   "a)Only One" +
      //   "\r\n" +
      //   "b)Only Two" +
      //   "\r\n" +
      //   "c)All the above" +
      //   "\r\n" +
      //   "d)None of the above";
      const result =
        "Consider the following statements: " +
        "\r\n" +
        "\r\n" +
        text2["statementsOne"] +
        "\r\n" +
        text2["statementsTwo"] +
        "\r\n" +
        text2["statementsThree"] +
        "\r\n" +
        "\r\n" +
        "How many of the statements given above are correct: " +
        "\r\n" +
        "\r\n" +
        "a)Only One " +
        "\r\n" +
        "b)Only Two " +
        "\r\n" +
        "c)All the above " +
        "\r\n" +
        "d)None of the above ";
      newsQuiz.statementQuizAI = result;
      await newsQuiz.save();
      res.status(201).json({ success: true, result: newsQuiz });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, Try later" });
    });
  // } else {
  // res.status(201).json({ success: true, result: newsQuiz });
  // }
});
