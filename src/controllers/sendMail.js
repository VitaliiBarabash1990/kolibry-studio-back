import { requestSendBody } from "../services/sendMail.js";

export const sendEmailController = async (req, res) => {
	await requestSendBody(req.body);
	res.json({
		message: "Email was successfully sent!",
		status: 200,
		data: {},
	});
};
