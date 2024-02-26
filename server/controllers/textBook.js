import tryCatch from "./utils/tryCatch.js";
import TextBook from "../models/TextBook.js";

export const createTextBook = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newTextBook = new TextBook({ ...req.body, uid, uName, uPhoto });
  await newTextBook.save();
  res.status(201).json({ success: true, result: newTextBook });
});

export const getTextBooks = tryCatch(async (req, res) => {
  const textBooks = await TextBook.find().sort({ _id: 1 });
  res.status(200).json({ success: true, result: textBooks });
});
