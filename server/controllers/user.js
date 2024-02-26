import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import tryCatch from "./utils/tryCatch.js";
import FAQ from "../models/FAQ.js";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const register = tryCatch(async (req, res) => {
  const { name, email, password } = req.body;
  if (password.length < 6)
    return res.status(400).json({
      success: false,
      message: "Password must be 6 characters or more",
    });
  const emailLowerCase = email.toLowerCase();
  const existedUser = await User.findOne({ email: emailLowerCase });
  if (existedUser)
    return res
      .status(400)
      .json({ success: false, message: "User already exists!" });
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({
    name,
    email: emailLowerCase,
    password: hashedPassword,
  });
  const { _id: id, photoURL, role, active } = user;
  const token = jwt.sign({ id, name, photoURL }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.status(201).json({
    success: true,
    result: { id, name, email: user.email, photoURL, token, role, active },
  });
});

export const googleRegister = tryCatch(async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const googleToken = token.length > 1000;
    if (googleToken) {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      const email = payload.email;
      const emailLowerCase = email.toLowerCase();
      const existedUser = await User.findOne({ email: emailLowerCase });
      if (existedUser) {
        const { _id: id, name, photoURL, role, active } = existedUser;
        return res.status(201).json({
          success: true,
          result: {
            id,
            name,
            email: existedUser.email,
            photoURL,
            role,
            active,
          },
        });
      }
      var randomPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcrypt.hash(randomPassword, 12);
      const user = await User.create({
        name: payload.name,
        email: payload.email,
        photoURL: payload.picture,
        password: hashedPassword,
      });
      const { _id: id, name, photoURL, role, active } = user;
      res.status(201).json({
        success: true,
        result: { id, name, email: user.email, photoURL, role, active },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: "Something is wrong with your authorization",
    });
  }
});

export const login = tryCatch(async (req, res) => {
  const { email, password } = req.body;

  const emailLowerCase = email.toLowerCase();
  const existedUser = await User.findOne({ email: emailLowerCase });
  if (!existedUser)
    return res
      .status(404)
      .json({ success: false, message: "User does not exist!" });
  const correctPassword = await bcrypt.compare(password, existedUser.password);
  if (!correctPassword)
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });

  const { _id: id, name, photoURL, role, active } = existedUser;
  if (!active)
    return res.status(400).json({
      success: false,
      message: "This account has been suspended! Try to contact the admin",
    });
  const token = jwt.sign({ id, name, photoURL }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.status(200).json({
    success: true,
    result: { id, name, email: emailLowerCase, photoURL, token, role, active },
  });
});

export const updateProfile = tryCatch(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });
  const { _id: id, name, photoURL } = updatedUser;

  await FAQ.updateMany({ uid: id }, { uName: name, uPhoto: photoURL });

  const token = jwt.sign({ id, name, photoURL }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.status(200).json({ success: true, result: { name, photoURL, token } });
});

export const getUsers = tryCatch(async (req, res) => {
  const users = await User.find().sort({ _id: -1 });
  res.status(200).json({ success: true, result: users });
});

export const updateStatus = tryCatch(async (req, res) => {
  const { role, active } = req.body;
  await User.findByIdAndUpdate(req.params.userId, { role, active });
  res.status(200).json({ success: true, result: { _id: req.params.userId } });
});

export const getCreditData = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const getCredit = await User.findById(req.user.id).select({
    email: 0,
    password: 0,
    photoURL: 0,
    role: 0,
    subscription: 0,
    keywords: 0,
    quizAnswer: 0,
    updatedAt: 0,
    __v: 0,
  });
  res.status(200).json({ success: true, result: getCredit });
});
