import express from "express";

const emailRouter = express.Router();

// Import des Middlewares :
import VerifyKeys from "../../middleware/VerifyKeys/VerifyKeys";
import SendMailer_Middleware from "../../services/mailer/SendMailer_Middleware";
import emailPostResponse from "./emailResponse/emailPostResponse";

// URI : /api/email
emailRouter.post("/",
    VerifyKeys(["to", "subject", "text"]),
    SendMailer_Middleware,
    emailPostResponse
)

export default emailRouter;
