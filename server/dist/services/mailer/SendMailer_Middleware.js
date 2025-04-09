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
const mailer_1 = __importDefault(require("./mailer"));
require("dotenv/config");
/**
 * Middleware pour envoyer un mail
 * Les champs 'to' et 'subject' sont obligatoires
 * Un seul des deux champs 'text' ou 'html' doit être présent
 *
 * Utilisation : Ce qui est attendu :
 * req.body.to
 * req.body.subject
 * req.body.text ou req.body.html
 */
function SendMailer_Middleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Vérification si les champs 'to' et 'subject' sont présents
            if (!req.body.to || !req.body.subject) {
                res.status(400).json({ error: "Requête invalide." });
                console.error({
                    identity: "SendMailer_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/mailer/SendMailer_Middleware.ts",
                    "❌ Nature de l'erreur": "Requête invalide.",
                    cause1: "Les champs 'to' et ou 'subject' sont absents.",
                });
                return;
            }
            // Vérification si les champs 'text' et 'html' n'existent pas en même temps pour éviter une erreur
            if (req.body.text && req.body.html) {
                res.status(400).json({ error: "Requête invalide." });
                console.error({
                    identity: "SendMailer_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/mailer/SendMailer_Middleware.ts",
                    "❌ Nature de l'erreur": "Requête invalide.",
                    explication1: "Les champs 'text' et 'html' existent en même temps.",
                    explication2: "Un seul champ doit être présent.",
                });
                return;
            }
            // Vérification qu'au minimum un des deux champs 'text' ou 'html' soit présent
            if (!req.body.text && !req.body.html) {
                res.status(400).json({ error: "Requête invalide." });
                console.error({
                    identity: "SendMailer_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/mailer/SendMailer_Middleware.ts",
                    "❌ Nature de l'erreur": "Requête invalide.",
                    cause1: "Les champs 'text' et 'html' sont absents.",
                    explication: "Au moins un des deux champs doit être présent.",
                });
                return;
            }
            ;
            const info = yield mailer_1.default.sendMail({
                from: `"l'Atelier Photo Montpellier" <${process.env.EMAIL_USER}>`, // email de l'expéditeur
                to: req.body.to, // liste email des destinataires
                subject: req.body.subject, // objet du mail
                text: req.body.text, // Contenu du mail
                html: req.body.html, // html body
            });
            next();
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "SendMailer_Middleware.ts",
                type: "middleware",
                chemin: "/server/src/middleware/mailer/SendMailer_Middleware.ts",
                "❌ Nature de l'erreur": "Mail non envoyé !",
                details: error,
            });
            return;
        }
    });
}
exports.default = SendMailer_Middleware;
