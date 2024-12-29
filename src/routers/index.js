import express from "express";
import { sendEmailController } from "../controllers/sendMail.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = express.Router();

router.use("/send-email", ctrlWrapper(sendEmailController));

export default router;
