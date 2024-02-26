import tryCatch from "./utils/tryCatch.js";
import Keyword from "../models/Keyword.js";

import dontenv from "dotenv";

dontenv.config();

const DEFAULT_PARAMS = {
  model: "gpt-3.5-turbo-1106",
  // model: "gpt-4",
};

export const createKeywordInfo = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newKeywordInfo = new Keyword({ ...req.body, uid, uName, uPhoto });

  const params = {
    ...DEFAULT_PARAMS,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant who can provide lots of accurate details on a keyword. I will provide you a keyword. Provide details on keyword : ",
      },
      {
        role: "user",
        content: String(newKeywordInfo.keyword),
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
      newKeywordInfo.resultAI = text;
      await newKeywordInfo.save();
      res.status(201).json({ success: true, result: newKeywordInfo });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, Try later" });
    });
});
