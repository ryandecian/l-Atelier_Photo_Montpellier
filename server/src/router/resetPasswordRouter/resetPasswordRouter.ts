import express from "express";

// Import des Middlewares : 
import RouteLimiterRequestIP from '../../Security/middlewareSecurity/RouteLimiterRequestIP';
import VerifyKeys from '../../middleware/VerifyKeys/VerifyKeys';
import VerifyEmailTrue from "../../middleware/VerifyEmail/VerifyEmailTrue";
import Create_Crypto_Middleware from "../../middleware/Crypto_Middleware/Create_Crypto_Middleware";
import SendMailer_Middleware from "../../services/mailer/SendMailer_Middleware";
import resetPasswordResponse from "./resetPasswordResponse";

const resetPasswordRouter = express.Router();

// Envois de l'email de réinitialisation du mot de passe
resetPasswordRouter.post("/",
    RouteLimiterRequestIP,
    VerifyKeys(["email"]),
    VerifyEmailTrue,
    Create_Crypto_Middleware,
    SendMailer_Middleware,
    resetPasswordResponse
)

// Réinitialisation du mot de passe. Réception du token et du nouveau mot de passe
resetPasswordRouter.post("/confirm")

export default resetPasswordRouter;