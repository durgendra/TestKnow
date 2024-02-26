import tryCatch from "./utils/tryCatch.js";
import sendEmail from "./utils/sendMail.js";
import FAQ from "../models/FAQ.js";
import User from "../models/User.js";
import StartQuiz from "../models/StartQuiz.js";
import DailyKT from "../models/DailyKT.js";

export const createStartQuiz = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const { objectId } = req.body;
  const startQuizPre = await FAQ.findById(objectId);
  const inputBody1 = startQuizPre.resultAI;
  const inputBody2 = startQuizPre.quizAnswer;
  const outputBody = convertFormat(inputBody1, inputBody2);
  const newStartQuiz = new StartQuiz({
    ...outputBody,
    quizId: objectId,
    quizType: "quiz",
    quizTitle: startQuizPre.assessmentTitle,
    creatorId: startQuizPre.uid,
    creatorName: startQuizPre.uName,
    uid: uid,
    uName: uName,
    uPhoto: uPhoto,
  });
  await newStartQuiz.save();
  res.status(201).json({ success: true, result: newStartQuiz });
});

export const createStartQuizDaily = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  // console.log(req.params.dailyKTID);
  const { objectId } = req.body;
  // console.log(objectId);
  const getSingleKT = await DailyKT.findById(objectId);
  // console.log(getSingleKT);
  const inputBody1 = getSingleKT.result;
  const inputBody2 = getSingleKT.quizAnswer;
  const outputBody = convertFormat(inputBody1, inputBody2);
  const newStartQuiz = new StartQuiz({
    ...outputBody,
    quizId: objectId,
    quizType: "daily",
    quizTitle: getSingleKT.title,
    creatorId: getSingleKT.uid,
    creatorName: getSingleKT.uName,
    uid: uid,
    uName: uName,
    uPhoto: uPhoto,
  });
  await newStartQuiz.save();
  // console.log(newStartQuiz);
  res.status(201).json({ success: true, result: newStartQuiz });
});

function convertFormat(inputBody1, inputBody2) {
  var questions = inputBody1.split(/\d+\)\s/).filter(Boolean);

  if (questions.length == 1) {
    var questions = inputBody1.split(/\d+\.\s/).filter(Boolean);
  }
  var answers = inputBody2.split(/\d+\)\s/).filter(Boolean);
  var answersEdited = answers.map((option) => {
    const text = option.split("\n")[0].trim();
    return text;
  });

  if (answersEdited.length == 1) {
    var answers = inputBody2.split("\n").filter(Boolean);
    var answersEdited = answers.map((option) => {
      const text = option.slice(3).trim();
      return text;
    });
  }

  // const answers = inputBody2.split("\n").filter(Boolean);
  // const answersEdited = answers.map((option) => {
  //     const text = option.slice(2).trim();;
  //     return text;
  //   });

  const output = {
    quizBody: [],
  };

  questions.forEach((question, index) => {
    const questionNo = (index + 1).toString();
    const questionText = question.split("\n")[0].trim();
    const optionsOld = question.match(/[A-Z]\)\s.*?(?=\n|$)/g).map((option) => {
      const letter = option[0];
      const text = option.slice(3).trim();
      return { [letter]: text };
    });

    const correctAnswer = answersEdited[index];
    const correctAnswer2 = optionsOld.find((option) => option[correctAnswer]);
    // console.log(correctAnswer2);
    // const correctAnswer3 = correctAnswer2.match(/[A-Z]\)\s.*?(?=\n|$)/g);
    // const correctAnswer4 = "";
    // for (key, value in correctAnswer2.items()){
    //   correctAnswer4 = value;
    // }
    var unkownKey = Object.keys(correctAnswer2)[0];
    const correctAnswer4 = correctAnswer2[unkownKey];

    const options = question.match(/[A-Z]\)\s.*?(?=\n|$)/g).map((option) => {
      const text = option.slice(3).trim();
      return text;
    });
    // console.log(options);
    // const correctAnswerOld = answers[index].split("\n")[0].trim();
    // const correctAnswer = correctAnswerOld.slice(3).trim();
    // console.log(`old:${correctAnswerOld}`);

    output.quizBody.push({
      QuestionNo: questionNo,
      QuestionText: questionText,
      QuestionOptions: options,
      CorrectAnswer: correctAnswer4,
    });
  });

  return output;
}

export const updateStartQuiz = tryCatch(async (req, res) => {
  const { testQuestions, userScore, totalScore } = req.body;
  const newStartQuiz = await StartQuiz.findByIdAndUpdate(
    req.params.objectId,
    { quizBody: testQuestions, userScore: userScore, totalScore: totalScore },
    { new: true }
  );
  if (newStartQuiz.uid === newStartQuiz.creatorId) {
    const userObject = await User.findById(newStartQuiz.uid);
    await sendEmail(
      [{ email: userObject.email, name: userObject.uName }],
      {
        userScore: userScore,
        totalScore: totalScore,
        title: newStartQuiz.quizTitle,
        quizId: newStartQuiz._id,
      },
      2
    );
  } else {
    const userObject = await User.findById(newStartQuiz.uid);
    const creatorObject = await User.findById(newStartQuiz.creatorId);
    await sendEmail(
      [{ email: userObject.email, name: userObject.uName }],
      {
        userScore: userScore,
        totalScore: totalScore,
        title: newStartQuiz.quizTitle,
        quizId: newStartQuiz._id,
      },
      2
    );
    await sendEmail(
      [{ email: creatorObject.email, name: creatorObject.uName }],
      {
        userScore: userScore,
        totalScore: totalScore,
        title: newStartQuiz.quizTitle,
        userName: userObject.name,
        quizId: newStartQuiz._id,
      },
      3
    );
  }

  res.status(200).json({ success: true, result: newStartQuiz });
});

export const getStartQuizSingle = tryCatch(async (req, res) => {
  console.log(req.params.assessmentId);
  const getFAQSingle = await StartQuiz.findById(req.params.assessmentId);
  res.status(200).json({ success: true, result: getFAQSingle });
});
