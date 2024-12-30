import { SMTP, TEMPLATES_DIR } from "../constants/index.js";
import { sendEmail } from "../utils/sendMail.js";

import { env } from "../utils/env.js";

import handlebars from "handlebars";
import path from "node:path";
import fs from "node:fs/promises";

export const requestSendBody = async ({ name, email, number }) => {
	const templatePath = path.join(TEMPLATES_DIR, "reset-password-email.html");

	const templateSource = (await fs.readFile(templatePath)).toString();

	const template = handlebars.compile(templateSource);
	const html = template({
		name: name,
		email: email,
		number: number,
	});

	await sendEmail({
		from: env(SMTP.SMTP_FROM),
		to: env(SMTP.SMTP_FROM),
		subject: "Ваш новый клиент!",
		html,
	});
};
