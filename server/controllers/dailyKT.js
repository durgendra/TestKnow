import tryCatch from "./utils/tryCatch.js";
import DailyKT from "../models/DailyKT.js";

export const createDailyKT = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newDailyKT = new DailyKT({ ...req.body, uid, uName, uPhoto });
  await newDailyKT.save();
  res.status(201).json({ success: true, result: newDailyKT });
});

export const getDailyKTs = tryCatch(async (req, res) => {
  const dailyKTs = await DailyKT.find().sort({ _id: -1 });
  res.status(200).json({ success: true, result: dailyKTs });
});

export const getDailyKTSingle = tryCatch(async (req, res) => {
  const getSingleKT = await DailyKT.findById(req.params.dailyKTID);
  res.status(200).json({ success: true, result: getSingleKT });
});
