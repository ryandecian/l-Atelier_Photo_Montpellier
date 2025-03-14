import express from "express";

// Import des Middlewares :
import VerifyKeys from "../../middleware/VerifyKeys/VerifyKeys";
import SendMailer_Middleware from "../../services/mailer/SendMailer_Middleware";
import emailResponse from "./emailResponse";

const emailRouter = express.Router();

emailRouter.post("/",
    VerifyKeys(["to", "subject", "text"]),
    SendMailer_Middleware,
    emailResponse
)

export default emailRouter;
