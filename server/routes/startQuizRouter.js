import { Router } from "express";

import {
  createStartQuiz,
  createStartQuizDaily,
  updateStartQuiz,
  getStartQuizSingle,
} from "../controllers/startQuiz.js";

import auth from "../middleware/auth.js";

const startQuizRouter = Router();

startQuizRouter.post("/", auth, createStartQuiz);
startQuizRouter.get("/:assessmentId", auth, getStartQuizSingle);
startQuizRouter.post("/daily", auth, createStartQuizDaily);
startQuizRouter.patch("/updateStatus/:objectId", auth, updateStartQuiz);

export default startQuizRouter;
