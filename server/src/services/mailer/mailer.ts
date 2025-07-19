import nodemailer from "nodemailer";
import "dotenv/config";

import ENV from "../../config/ENV.config";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // true for port 465, false for other ports
  auth: {
    user: ENV("process.env.MAIL_SERVER_ADMIN", "Warning"),
    pass:ENV("process.env.MAIL_PASSWORD", "Warning"),
  },
});

export default transporter;
