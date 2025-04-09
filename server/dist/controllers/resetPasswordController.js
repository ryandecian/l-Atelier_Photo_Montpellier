"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resetPasswordController = express_1.default.Router();
// Import des Middlewares :
const RouteLimiterRequestIP_1 = __importDefault(require("../Security/middlewareSecurity/RouteLimiterRequestIP"));
const VerifyKeys_1 = __importDefault(require("../middleware/VerifyKeys/VerifyKeys"));
// Import des Repositories :
const emailRepository_1 = __importDefault(require("../repository/emailRepository"));
const insertTokenResetRepository_1 = __importDefault(require("../repository/insertTokenResetRepository"));
const resetTokenRegulator_1 = require("../repository/resetTokenRegulator");
// Import des Services :
const sendMailerService_1 = __importDefault(require("../services/mailer/sendMailerService"));
// Import des Outils :
const cryptoUtils_1 = require("../utils/cryptoUtils");
const createDateUtils_1 = require("../utils/createDateUtils");
// URI : /api/resetpassword
resetPasswordController.post("/", 
// Vérification :
RouteLimiterRequestIP_1.default, (0, VerifyKeys_1.default)(["email"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //* Logique métier 1 : Vérification si l'email existe */
        const dataUser = yield (0, emailRepository_1.default)(req.body.email);
        // Si l'email n'existe pas dans la DB, on ne peut pas continuer.
        if (dataUser.length === 0) { // Si c'est égal à 0, c'est que l'email n'existe pas
            res.status(404).json({ message: "Cet email n'existe pas." });
            console.error({
                identity: "resetPasswordController.ts",
                type: "controller",
                URI: "/api/resetpassword",
                methode: "POST",
                metier: "Logique métier 1",
                codeStatus: "404 : Not Found",
                chemin: "/server/src/controllers/resetPasswordController.ts",
                "❌ Nature de l'erreur": "L'email n'existe pas dans la DB, impossible de continuer.",
            });
            return;
        }
        // Logique métier 2 : Création du token avec crypto
        // On génère un token sécurisé
        const token = yield (0, cryptoUtils_1.createCryptoUtils)();
        // On génère une date d'expiration dans 1h
        const expiresAt = yield (0, createDateUtils_1.createExpireDateUtils)();
        // Sécurité : On vérifie si le token et la date d'expiration sont valides
        if (!expiresAt || !token) {
            res.status(500).json({ message: "Erreur interne du serveur." });
            console.error({
                identity: "resetPasswordController.ts",
                type: "controller",
                URI: "/api/resetpassword",
                methode: "POST",
                metier: "Logique métier 2",
                codeStatus: "500 : Internal Server Error",
                chemin: "/server/src/controllers/resetPasswordController.ts",
                "❌ Nature de l'erreur": "Erreur interne du serveur.",
            });
            return;
        }
        // Logique métier 3 : Enregistrement du token et de la date d'expiration dans la DB
        // On insère le token et la date d'expiration dans la DB
        const insertTokenReset = yield (0, insertTokenResetRepository_1.default)(dataUser[0].id, token, expiresAt);
        // Verification si l'insertion a réussi
        if (insertTokenReset.affectedRows === 0) {
            res.status(400).json({ message: "Erreur lors de l'enregistrement du token." });
            console.error({
                identity: "resetPasswordController.ts",
                type: "controller",
                URI: "/api/resetpassword",
                methode: "POST",
                metier: "Logique métier 3",
                codeStatus: "400 : Bad Request",
                chemin: "/server/src/controllers/resetPasswordController.ts",
                "❌ Nature de l'erreur": "Erreur lors de l'enregistrement du token dans la DB.",
            });
            return;
        }
        // Logique métier 4 : Création du lien de réinitialisation
        // Verification de la présence de la variable d'environnement DOMAIN_CLIENT
        if (!process.env.DOMAIN_FRONT) {
            res.status(500).json({ message: "Erreur interne du serveur." });
            console.error({
                identity: "resetPasswordController.ts",
                type: "controller",
                URI: "/api/resetpassword",
                methode: "POST",
                metier: "Logique métier 4",
                codeStatus: "500 : Internal Server Error",
                chemin: "/server/src/controllers/resetPasswordController.ts",
                "❌ Nature de l'erreur": "Erreur interne du serveur, variable d'environnement DOMAIN_CLIENT manquante.",
            });
            return;
        }
        // On crée le lien de réinitialisation
        const linkResetPassword = `${process.env.DOMAIN_FRONT}/reset-password?token=${token}`;
        // Logique métier 5 : Envoi de l'email de réinitialisation
        // On prépare les données pour l'envoi par email
        const mailOptions = {
            to: dataUser[0].email,
            subject: "Réinitialisation de votre mot de passe",
            html: `<p>Bonjour ${dataUser[0].firstname},</p>
                           <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
                           <a href="${linkResetPassword}">${linkResetPassword}</a>
                           <p>Ce lien expirera dans 1 heure.</p>`,
        };
        try {
            yield (0, sendMailerService_1.default)(mailOptions); // Gestion des erreur directement avec le try/catch dans la fonction sendMailerService
        }
        catch (error) {
            res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
            const sendMailerServiceError = error.message; // On récupère le message d'erreur de la fonction sendMailerService
            console.error({
                identity: "resetPasswordController.ts",
                type: "controller",
                URI: "/api/resetpassword",
                methode: "POST",
                metier: "Logique métier 5",
                codeStatus: "500 : Internal Server Error",
                chemin: "/server/src/controllers/resetPasswordController.ts",
                "❌ Nature de l'erreur": "Erreur lors de l'envoi de l'email.",
                sendMailerService: {
                    identity: "sendMailerService.ts",
                    type: "service",
                    chemin: "/server/src/services/mailer/sendMailerService.ts",
                    "❌ Nature de l'erreur": sendMailerServiceError,
                }
            });
            return;
        }
        // Logique métier 6 : Régulation et nettoyage des tokens expirés en DB
        // Récupération de toute la table reset_password
        const dataToken = yield (0, resetTokenRegulator_1.getTokenResetRepository)();
        // On vérifie si la récupération a réussi
        if (dataToken.length === 0) { // La table ne peut pas être vide car on vient d'enregistrer un token
            res.status(500).json({ message: "Erreur interne du serveur" });
            console.error({
                identity: "resetPasswordController.ts",
                type: "controller",
                URI: "/api/resetpassword",
                methode: "POST",
                metier: "Logique métier 6",
                codeStatus: "500 : Internal Server Error",
                chemin: "/server/src/controllers/resetPasswordController.ts",
                "❌ Nature de l'erreur": "Erreur lors de la récupération des tokens dans la DB.",
                getTokenResetRepository: {
                    identity: "getTokenResetRepository.ts",
                    type: "repository",
                    chemin: "/server/src/repository/getTokenResetRepository.ts",
                    "❌ Nature de l'erreur": "Erreur lors de la récupération des tokens dans la DB.",
                },
            });
            return;
        }
        // On crée une date actuelle pour comparer avec la date d'expiration des tokens
        const dateNow = new Date();
        // On filtre les tokens expirés
        const tabExpiredToken = dataToken
            .filter(token => new Date(token.expires_at) < dateNow)
            .map(token => token.id); // On récupère les id des tokens expirés et on crée un nouveau tableau
        // On supprime les tokens expirés de la DB
        const deleteTokenReset = yield (0, resetTokenRegulator_1.deleteTokenResetRepository)(tabExpiredToken);
        // On vérifie si la suppression a réussi
        if (deleteTokenReset === 0) { // Si il n'y avait rien a supprimer, cela retourne undefined donc pas d'erreur
            res.status(500).json({ message: "Erreur lors de la suppression des tokens expirés." });
            console.error({
                identity: "resetPasswordController.ts",
                type: "controller",
                URI: "/api/resetpassword",
                methode: "POST",
                metier: "Logique métier 6",
                codeStatus: "500 : Internal Server Error",
                chemin: "/server/src/controllers/resetPasswordController.ts",
                "❌ Nature de l'erreur": "Erreur lors de la suppression des tokens expirés dans la DB.",
                deleteTokenResetRepository: {
                    identity: "deleteTokenResetRepository.ts",
                    type: "repository",
                    chemin: "/server/src/repository/deleteTokenResetRepository.ts",
                    "❌ Nature de l'erreur": "Erreur lors de la suppression des tokens expirés dans la DB.",
                },
            });
            return;
        }
        // Logique métier 7 : Réponse de succès
        res.status(200).json({ message: "Email de réinitialisation envoyé." });
    }
    catch (error) {
        res.status(500).json({ message: "Erreur interne du serveur." });
        console.error({
            identity: "resetPasswordController.ts",
            type: "controller",
            URI: "/api/resetpassword",
            methode: "POST",
            codeStatus: "500 : Internal Server Error",
            chemin: "/server/src/controllers/resetPasswordController.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
}));
exports.default = resetPasswordController;
