"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Import des Middlewares : Commun à toutes les routes
const RouteLimiterRequestIP_1 = __importDefault(require("../../Security/middlewareSecurity/RouteLimiterRequestIP"));
const VerifyKeys_1 = __importDefault(require("../../middleware/VerifyKeys/VerifyKeys"));
const SendMailer_Middleware_1 = __importDefault(require("../../services/mailer/SendMailer_Middleware"));
// Import des Middlewares : resetPasswordRouter
const VerifyEmailTrue_1 = __importDefault(require("../../middleware/VerifyEmail/VerifyEmailTrue"));
const Create_Crypto_Middleware_1 = __importDefault(require("../../middleware/Crypto_Middleware/Create_Crypto_Middleware"));
const resetPasswordPostResponse_1 = __importDefault(require("./resetPasswordResponse/resetPasswordPostResponse"));
// Import des Middlewares : resetPasswordConfirmRouter
const Verify_Crypto_Middleware_1 = __importDefault(require("../../middleware/Crypto_Middleware/Verify_Crypto_Middleware"));
const HashPassword_1 = __importDefault(require("../../middleware/Argon/HashPassword"));
const insertNewPassword_1 = __importDefault(require("../../middleware/InsertDB/insertNewPassword"));
const resetPasswordConfirmPostResponse_1 = __importDefault(require("./resetPasswordResponse/resetPasswordConfirmPostResponse"));
const resetPasswordRouter = express_1.default.Router();
// URI : /api/reset-password
// Envois de l'email de réinitialisation du mot de passe
resetPasswordRouter.post("/", RouteLimiterRequestIP_1.default, (0, VerifyKeys_1.default)(["email"]), VerifyEmailTrue_1.default, Create_Crypto_Middleware_1.default, SendMailer_Middleware_1.default, resetPasswordPostResponse_1.default);
// URI : /api/reset-password/confirm
// Réinitialisation du mot de passe. Réception du token et du nouveau mot de passe
resetPasswordRouter.post("/confirm", RouteLimiterRequestIP_1.default, (0, VerifyKeys_1.default)(["token", "newPassword"]), Verify_Crypto_Middleware_1.default, HashPassword_1.default, insertNewPassword_1.default, SendMailer_Middleware_1.default, resetPasswordConfirmPostResponse_1.default);
exports.default = resetPasswordRouter;
