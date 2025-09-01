import nodemailer from "nodemailer";
import "dotenv/config";

import { ENV_SAFE } from "../../config/ENV.config";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: ENV_SAFE("MAIL_SERVER_ADMIN"),
    pass: ENV_SAFE("MAIL_PASSWORD"),
  },
});

export default transporter;
