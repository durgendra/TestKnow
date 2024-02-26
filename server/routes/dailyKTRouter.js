import { Router } from "express";

import {
  createDailyKT,
  getDailyKTs,
  getDailyKTSingle,
} from "../controllers/dailyKT.js";
import auth from "../middleware/auth.js";

const dailyKTRouter = Router();

dailyKTRouter.post("/", auth, createDailyKT);
dailyKTRouter.get("/", getDailyKTs);
dailyKTRouter.get("/:dailyKTID", getDailyKTSingle);

export default dailyKTRouter;
