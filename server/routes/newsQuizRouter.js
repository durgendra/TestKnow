import { Router } from "express";

import {
  createNews,
  createQuiz,
  createStatementQuiz,
} from "../controllers/newsQuiz.js";
import auth from "../middleware/auth.js";

const newsQuizRouter = Router();

newsQuizRouter.post("/", auth, createNews);
// optionRouter.get("/", auth, getOptions);
newsQuizRouter.post("/quiz", auth, createQuiz);
newsQuizRouter.post("/statementquiz", auth, createStatementQuiz);
// optionRouter.post("/expand", auth, expandOption);
// optionRouter.post("/history-more", auth, historyExpand);

export default newsQuizRouter;
