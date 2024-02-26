import express from "express";
import dontenv from "dotenv";
import userRouter from "./routes/userRouter.js";
import faqRouter from "./routes/faqRouter.js";
import dailyKTRouter from "./routes/dailyKTRouter.js";
import newsQuizRouter from "./routes/newsQuizRouter.js";
import textBookRouter from "./routes/textBookRouter.js";
import startQuizRouter from "./routes/startQuizRouter.js";
import mongoose from "mongoose";

dontenv.config();

const port = process.env.PORT || 8080;

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Authorization"
  );
  next();
});

app.use(express.json({ limit: "10mb" }));

app.use("/user", userRouter);
app.use("/faq", faqRouter);
app.use("/dailyKT", dailyKTRouter);
app.use("/newsQuiz", newsQuizRouter);
app.use("/textbook", textBookRouter);
app.use("/startquiz", startQuizRouter);
app.get("/", (req, res) => res.json({ message: "Welcome to our API" }));
app.use((req, res) =>
  res.status(404).json({ success: false, message: "Not Found" })
);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT);

    app.listen(port, () => console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
