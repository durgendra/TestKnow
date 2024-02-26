import tryCatch from "./utils/tryCatch.js";
import FAQ from "../models/FAQ.js";
import User from "../models/User.js";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { PuppeteerWebBaseLoader } from "langchain/document_loaders/web/puppeteer";
import { PlaywrightWebBaseLoader } from "langchain/document_loaders/web/playwright";
import * as cheerio from "cheerio";
import * as request from "request";
import ReadText from "text-from-image";
// const ReadText = require("text-from-image");
import { createWorker } from "tesseract.js";
import Tesseract from "tesseract.js";

import dontenv from "dotenv";

dontenv.config();

const DEFAULT_PARAMS = {
  // model: "gpt-3.5-turbo",
  model: "gpt-3.5-turbo-1106",
  // model: "gpt-4",
};

export const createFAQ = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newFAQ = new FAQ({ ...req.body, uid, uName, uPhoto });
  const currentUser = await User.findById(uid);
  if (currentUser.ktBalance <= 0) {
    return res.status(500).json({
      success: false,
      message: "Insufficient Credit, Please purchase a paid plan",
    });
  } else {
    if (newFAQ.category == "doc" || newFAQ.category == "textbook") {
      const response = await fetch(process.env.PYTHON_URL + "/api/v1/extract", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({
          pLink: newFAQ.pLink,
          pageNumber: newFAQ.pageNumber,
        }),
      });
      const data = await response.json();
      newFAQ.paragraph = data.paragraph;
    }
    if (newFAQ.category == "image") {
      const worker = await createWorker("eng");
      // await worker.load();
      // await worker.loadLanguage('eng+osd');
      // await worker.initialize('eng+osd');
      await worker.setParameters({
        // cacheMehod: "refresh",
        tessedit_pageseg_mode: "1",
      });
      const ret = await worker.recognize(newFAQ.pLink);
      const pageContent = ret.data.text;
      await worker.terminate();
      const textPageContent = pageContent.replace(/[^a-zA-Z0-9 ]/g, " ");
      const textPageContent1 = textPageContent.replace(/\s+/g, " ");
      newFAQ.paragraph = textPageContent1;
    }
    if (newFAQ.category == "url") {
      const loader = new CheerioWebBaseLoader(newFAQ.pLink, {
        selector: "p",
      });
      const docs = await loader.load();
      const pageContent = docs[0].pageContent;
      if (!pageContent) {
        return res.json({
          success: false,
          message: "Content can't be extracted from the url link",
        });
        // strValue was empty string, false, 0, null, undefined, ...
      }
      const textPageContent = pageContent.replace(/[^a-zA-Z0-9 ]/g, " ");
      const textPageContent1 = textPageContent.replace(/\s+/g, " ");
      newFAQ.paragraph = textPageContent1;
    }
    const textContent = newFAQ.paragraph;
    newFAQ.paragraph = textContent.substring(0, 11000);
    const params = {
      ...DEFAULT_PARAMS,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who can create a list of Frequently asked questions (FAQ). I will provide a text paragraph. Basis that paragraph, create an FAQ with 10 questions and answers.",
        },
        {
          role: "user",
          content: String(newFAQ.paragraph),
        },
        // {role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020."},
        // {role: "user", content: "Where was it played?"}
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
        newFAQ.resultAI = text;
        await newFAQ.save();
        currentUser.ktBalance = currentUser.ktBalance - 1;
        currentUser.ktTotalActual = currentUser.ktTotalActual + 1;
        await currentUser.save();
        res.status(201).json({ success: true, result: newFAQ });
      })
      .catch((error) => {
        console.log(error);
        res
          .status(500)
          .json({ success: false, message: "Something went wrong, Try later" });
      });
  }
});

// export const createQuiz = tryCatch(async (req, res) => {
//   const { id: uid, name: uName, photoURL: uPhoto } = req.user;
//   const newFAQ = new FAQ({ ...req.body, uid, uName, uPhoto });

//   const schema = {
//     type: "object",
//     properties: {
//       quizBody: {
//         type: "string",
//         description:
//           "Create a quiz with 20 questions and 4 options each. Put serial numbers to these 20 questions",
//       },
//       quizAnswer: {
//         type: "string",
//         description:
//           " List the correct answers of all 20 quiz questions. Put serial numbers to these 20 answers",
//       },
//       keywords: {
//         type: "string",
//         description:
//           "List 5 top keywords from the provided texts which could be relevant for a competitive exam",
//       },
//     },
//   };
//   if (newFAQ.category == "doc") {
//     const response = await fetch(process.env.PYTHON_URL + "/api/v1/extract", {
//       method: "POST",
//       "Content-Type": "application/json",
//       body: JSON.stringify({ pLink: newFAQ.pLink }),
//     });
//     const data = await response.json();
//     newFAQ.paragraph = data.paragraph;
//   }
//   if (newFAQ.category == "image") {
//     const worker = await createWorker("eng");
//     await worker.setParameters({
//       tessedit_pageseg_mode: "1",
//     });
//     const ret = await worker.recognize(newFAQ.pLink);
//     pageContent = ret.data.text;
//     await worker.terminate();
//     const textPageContent = pageContent.replace(/[^a-zA-Z0-9 ]/g, " ");
//     const textPageContent1 = textPageContent.replace(/\s+/g, " ");
//     newFAQ.paragraph = textPageContent1;
//   }
//   if (newFAQ.category == "url") {
//     const loader = new CheerioWebBaseLoader(newFAQ.pLink, {
//       selector: "p",
//     });
//     const docs = await loader.load();
//     const pageContent = docs[0].pageContent;
//     if (!pageContent) {
//       return res.json({
//         success: false,
//         message: "Content can't be extracted from the url link",
//       });
//       // strValue was empty string, false, 0, null, undefined, ...
//     }
//     const textPageContent = pageContent.replace(/[^a-zA-Z0-9 ]/g, " ");
//     const textPageContent1 = textPageContent.replace(/\s+/g, " ");
//     newFAQ.paragraph = textPageContent1;
//   }
//   const textContent = newFAQ.paragraph;
//   newFAQ.paragraph = textContent.substring(0, 11000);
//   const params = {
//     ...DEFAULT_PARAMS,
//     messages: [
//       {
//         role: "system",
//         content:
//           "You are a helpful assistant who can create a quiz based on texts. I will provide texts. Basis that texts, create a quiz with 10 questions and options. List the correct answers of all question at the end of your response. Put serial numbers before questions and answers. Also, list 10 keywords from the texts.",
//       },
//       {
//         role: "user",
//         content: String(newFAQ.paragraph),
//       },
//       // {role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020."},
//       // {role: "user", content: "Where was it played?"}
//     ],
//     functions: [{ name: "set_option", parameters: schema }],
//     function_call: { name: "set_option" },
//   };
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + String(process.env.OPENAI_API_KEY),
//     },
//     body: JSON.stringify(params),
//   };

//   await fetch("https://api.openai.com/v1/chat/completions", requestOptions)
//     .then((response) => response.json())
//     .then(async (data) => {
//       console.log(data);
//       const text = data.choices[0].message.function_call.arguments;
//       const text2 = JSON.parse(text);
//       newFAQ.resultAI =
//         text2["quizBody"] +
//         "\r\n" +
//         "\r\n" +
//         "\r\n" +
//         "Answers:" +
//         "\r\n" +
//         text2["quizAnswer"];
//       newFAQ.keywords = text2["keywords"].split(",");
//       await newFAQ.save();
//       res.status(201).json({ success: true, result: newFAQ });
//     })
//     .catch((error) => {
//       console.log(error);
//       res
//         .status(500)
//         .json({ success: false, message: "Something went wrong, Try later" });
//     });
// });

export const createQuiz = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newFAQ = new FAQ({ ...req.body, uid, uName, uPhoto });

  const tools = [
    {
      type: "function",
      function: {
        name: "get_quiz",
        description: "Get 20 multiple choice questions",
        parameters: {
          type: "object",
          properties: {
            quizBody: {
              type: "string",
              description:
                "Create a quiz with 10 questions and 4 options each. Put serial numbers to these 10 questions. Remember to create at least 10 questions",
            },
            quizAnswer: {
              type: "string",
              description:
                " List the correct answers of all 10 quiz questions. Put serial numbers to these 10 answers",
            },
            keywords: {
              type: "string",
              description:
                "List 5 top keywords from the provided texts which could be relevant for a competitive exam",
            },
          },
          required: ["quizBody", "quizAnswer", "keywords"],
        },
      },
    },
  ];
  const tool_choice = { type: "function", function: { name: "get_quiz" } };
  const currentUser = await User.findById(uid);
  if (currentUser.ktBalance <= 0) {
    return res.status(500).json({
      success: false,
      message: "Insufficient Credit, Please purchase a paid plan",
    });
  } else {
    if (newFAQ.category == "doc" || newFAQ.category == "textbook") {
      const response = await fetch(
        process.env.PYTHON_URL + "/api/v1/extractpage",
        {
          method: "POST",
          "Content-Type": "application/json",
          body: JSON.stringify({
            pLink: newFAQ.pLink,
            pageNumber: newFAQ.pageNumber,
          }),
        }
      );
      const data = await response.json();
      newFAQ.paragraph = data.paragraph;
    }
    if (newFAQ.category == "image") {
      const worker = await createWorker("eng");
      // await worker.load();
      // await worker.loadLanguage('eng+osd');
      // await worker.initialize('eng+osd');
      await worker.setParameters({
        // cacheMehod: "refresh",
        tessedit_pageseg_mode: "1",
      });
      const ret = await worker.recognize(newFAQ.pLink);
      const pageContent = ret.data.text;
      await worker.terminate();
      const textPageContent = pageContent.replace(/[^a-zA-Z0-9 ]/g, " ");
      const textPageContent1 = textPageContent.replace(/\s+/g, " ");
      newFAQ.paragraph = textPageContent1;
    }
    if (newFAQ.category == "url") {
      const loader = new CheerioWebBaseLoader(newFAQ.pLink, {
        selector: "p",
      });
      const docs = await loader.load();
      const pageContent = docs[0].pageContent;
      if (!pageContent) {
        return res.json({
          success: false,
          message: "Content can't be extracted from the url link",
        });
        // strValue was empty string, false, 0, null, undefined, ...
      }
      const textPageContent = pageContent.replace(/[^a-zA-Z0-9 ]/g, " ");
      const textPageContent1 = textPageContent.replace(/\s+/g, " ");
      newFAQ.paragraph = textPageContent1;
    }
    const textContent = newFAQ.paragraph;
    newFAQ.paragraph = textContent.substring(0, 11000);
    const params = {
      ...DEFAULT_PARAMS,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who can create a quiz based on texts. I will provide texts. Basis that texts, create a quiz with 10 questions and options. List the correct answers of all 10 question at the end of your response. Put serial numbers before questions and answers. Also, list 5 keywords from the texts. Put the response as given in the below format. An example is given for 10 questions. So, remember to generate at least 10 questions. Response: {quizBody:1) What is the Artemis Accords about? \nA) Exploration of Mars \nB) Crewed exploration of the Moon \nC) International space law \nD) Planetary resources mining\n2) Which country recently became the 11th signatory of the Artemis Accords? \nA) India \nB) Australia \nC) New Zealand \nD) Japan\n3) What is the Artemis Program aimed at? \nA) Exploring the outer planets \nB) Sending the first woman to Mars \nC) Boosting human space exploration \nD) Establishing a colony on the Moon\n4) What are the challenges that India faces in signing the Artemis accords? \nA) Reinforcing US Hegemony \nB) Overcoming technical limitations \nC) International opposition \nD) Legal constraints\n5) How many countries have signed the Moon Agreement of 1979? \nA) 10 \nB) 15 \nC) 18 \nD) 20\n6) What is the purpose of the Artemis Accords according to the text? \nA) Resource exploration\nB) Establishing a safe and transparent environment\nC) Commercial space tourism\nD) International collaboration on Mars exploration\n7) What prompted India to consider signing the Artemis Accords? \nA) Space cooperation among Quad countries\nB) Competition with China's space program\nC) Economic incentives from the US\nD) Joint mission to explore Mars with NASA\n8) Which major space players have not signed the Artemis Accords? \nA) Russia and India\nB) US and UK\nC) India, Russia, China, France, and Germany\nD) Australia and Canada\n9) What is the main purpose of the Outer Space Treaty of 1967? \nA) Prevent space exploration\nB) Facilitate international space law\nC) Establish territorial claims in outer space\nD) Encourage commercial exploitation of outer-space resources\n10) What is the Artemis Programme's goal according to the text? \nA) Establishing a base on the Moon\nB) Landing on Mars by 2022\nC) Developing commercial space travel\nD) Conducting experiments on the outer planets\n, quizAnswer: 1) B\n2) C\n3) C\n4) A\n5) C\n6) B\n7) A\n8) C\n9) B\n10) A\n}",
          // "You are a helpful assistant who can create a quiz based on texts. I will provide texts. Basis that texts, create a quiz with 10 questions and options. List the correct answers of all 10 question at the end of your response. Put serial numbers before questions and answers. Also, list 5 keywords from the texts. Put the response as given in the below format. An example is given for 10 questions. So, remember to generate at least 10 questions. Response: {quizbody:1) What is the main focus of the chapters in Unit 1 of the Social and Political Life textbook? \nA) Rules in football \nB) The Constitution \nC) Fundamental rights \nD) Liberal constitution\n2) Secularism refers to the separation between: \nA) State and society \nB) Religion and State \nC) Government and religion \nD) Religious freedom and State\n3) What did the people of Nepal want to change in their old Constitution? \nA) The political system \nB) The monarchy \nC) The national anthem \nD) The language of the Constitution\n4) What defines the nature of a country's political system according to the text? \nA) The King's council of ministers \nB) The Constitution \nC) The Fundamental Rights \nD) The political leaders\n5) What is guaranteed by the Indian Constitution in the section on Fundamental Rights? \nA) Right to Equality \nB) Right to vote \nC) Right to property \nD) Right to freedom of speech, quizAnswer:1) B\n2) B\n3) B\n4) B\n5) A}",
        },
        {
          role: "user",
          content: String(newFAQ.paragraph),
        },
      ],
      tools: tools,
      tool_choice: tool_choice,
      seed: 126,
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
        const text = data.choices[0].message.tool_calls[0].function.arguments;
        const text2 = JSON.parse(text);
        // console.log(text);
        newFAQ.resultAI = text2["quizBody"];
        newFAQ.quizAnswer = text2["quizAnswer"];
        newFAQ.keywords = text2["keywords"].split(",");
        newFAQ.assessmentTitle = newFAQ.paragraph.substring(0, 20) + "...";
        await newFAQ.save();
        currentUser.ktBalance = currentUser.ktBalance - 1;
        currentUser.ktTotalActual = currentUser.ktTotalActual + 1;
        await currentUser.save();
        res.status(201).json({ success: true, result: newFAQ });
      })
      .catch((error) => {
        console.log(error);
        res
          .status(500)
          .json({ success: false, message: "Something went wrong, Try later" });
      });
  }
});

export const createSum = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newFAQ = new FAQ({ ...req.body, uid, uName, uPhoto });

  if (newFAQ.category === "doc" || newFAQ.category === "textbook") {
    const response = await fetch(process.env.PYTHON_URL + "/api/v1/extract", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify({ pLink: newFAQ.pLink }),
    });
    const data = await response.json();
    newFAQ.paragraph = data.paragraph;
  }
  if (newFAQ.category == "url") {
    const loader = new CheerioWebBaseLoader(newFAQ.pLink, {
      selector: "p",
    });
    const docs = await loader.load();
    const pageContent = docs[0].pageContent;
    if (!pageContent) {
      return res.json({
        success: false,
        message: "Content can't be extracted from the url link",
      });
      // strValue was empty string, false, 0, null, undefined, ...
    }
    const textPageContent = pageContent.replace(/[^a-zA-Z0-9 ]/g, " ");
    const textPageContent1 = textPageContent.replace(/\s+/g, " ");
    newFAQ.paragraph = textPageContent1;
  }
  const textContent = newFAQ.paragraph;
  newFAQ.paragraph = textContent.substring(0, 11000);
  const params = {
    ...DEFAULT_PARAMS,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant who can summarize texts. I will provide texts. Summarize texts",
      },

      {
        role: "user",
        content: String(newFAQ.paragraph),
      },
      // {role: "user", content: "Where was it played?"}
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
      newFAQ.resultAI = text;
      await newFAQ.save();
      res.status(201).json({ success: true, result: newFAQ });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, Try later" });
    });
});

export const getFAQs = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const faqs = await FAQ.find({ uid: uid }).sort({ _id: -1 });
  res.status(200).json({ success: true, result: faqs });
});

export const getUploadedDoc = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const getUploadedDoc = await FAQ.find({
    uid: uid,
    category: "doc",
    docName: { $ne: "" },
  })
    .select({
      paragraph: 0,
      resultAI: 0,
      uid: 0,
      uName: 0,
      uPhoto: 0,
      keywords: 0,
      quizAnswer: 0,
      updatedAt: 0,
      assessmentTitle: 0,
      __v: 0,
    })
    .sort({ _id: -1 });
  // console.log("getUploadedDoc:  " + getUploadedDoc);
  res.status(200).json({ success: true, result: getUploadedDoc });
});

export const updateFAQStatus = tryCatch(async (req, res) => {
  const { assessmentTitle, assessmentSource, assessmentShared } = req.body;
  const newFAQ = await FAQ.findByIdAndUpdate(
    req.params.objectId,
    { assessmentTitle, assessmentSource, assessmentShared },
    { new: true }
  );
  res.status(200).json({ success: true, result: newFAQ });
});

export const getFAQSingle = tryCatch(async (req, res) => {
  console.log(req.params.faqId);
  const getFAQSingle = await FAQ.findById(req.params.faqId);
  res.status(200).json({ success: true, result: getFAQSingle });
});
