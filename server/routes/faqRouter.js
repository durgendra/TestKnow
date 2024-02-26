import { Router } from "express";

import {
  getFAQs,
  createFAQ,
  createQuiz,
  createSum,
  getUploadedDoc,
  updateFAQStatus,
  getFAQSingle,
} from "../controllers/faq.js";
import { createKeywordInfo } from "../controllers/keyword.js";
import auth from "../middleware/auth.js";

const faqRouter = Router();

faqRouter.post("/", auth, createFAQ);
faqRouter.post("/quiz", auth, createQuiz);
faqRouter.post("/summary", auth, createSum);
faqRouter.post("/keywordinfo", auth, createKeywordInfo);
faqRouter.get("/", auth, getFAQs);
faqRouter.get("/uploadedDoc", auth, getUploadedDoc);
faqRouter.patch("/updateFAQStatus/:objectId", auth, updateFAQStatus);
faqRouter.get("/:faqId", auth, getFAQSingle);

export default faqRouter;
