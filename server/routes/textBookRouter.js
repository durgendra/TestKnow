import { Router } from "express";

import { createTextBook, getTextBooks } from "../controllers/textBook.js";
import auth from "../middleware/auth.js";

const textBookRouter = Router();

textBookRouter.post("/", auth, createTextBook);
textBookRouter.get("/", getTextBooks);

export default textBookRouter;
