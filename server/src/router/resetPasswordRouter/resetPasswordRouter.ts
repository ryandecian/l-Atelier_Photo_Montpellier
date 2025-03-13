import express from "express";

// Import des Middlewares : Commun à toutes les routes
import RouteLimiterRequestIP from '../../Security/middlewareSecurity/RouteLimiterRequestIP';
import VerifyKeys from '../../middleware/VerifyKeys/VerifyKeys';
import SendMailer_Middleware from "../../services/mailer/SendMailer_Middleware";

// Import des Middlewares : resetPasswordRouter
import VerifyEmailTrue from "../../middleware/VerifyEmail/VerifyEmailTrue";
import Create_Crypto_Middleware from "../../middleware/Crypto_Middleware/Create_Crypto_Middleware";
import resetPasswordResponse from "./resetPasswordResponse";

// Import des Middlewares : resetPasswordConfirmRouter
import Verify_Crypto_Middleware from "../../middleware/Crypto_Middleware/Verify_Crypto_Middleware";
import HashPassword from "../../middleware/Argon/HashPassword";
import InsertNewPassword from "../../middleware/InsertDB/insertNewPassword";
import resetPasswordConfirmResponse from "./resetPasswordConfirmRouter";


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
resetPasswordRouter.post("/confirm",
    RouteLimiterRequestIP,
    VerifyKeys(["token", "newPassword"]),
    Verify_Crypto_Middleware,
    HashPassword,
    InsertNewPassword,
    SendMailer_Middleware,
    resetPasswordConfirmResponse
)

export default resetPasswordRouter;