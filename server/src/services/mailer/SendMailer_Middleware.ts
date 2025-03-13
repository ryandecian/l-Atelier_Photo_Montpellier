import mailer from "./mailer";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const transporter = mailer

async function SendMailer_Middleware( req: Request, res: Response, next: NextFunction ) {
    try {
        // Vérification si les champs 'to' et 'subject' sont présents
        if (!req.body.to || !req.body.subject) {
            res.status(400).json({ error: "Requête invalide." });
            console.error(
                {
                    identity: "SendMailer_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/mailer/SendMailer_Middleware.ts",
                    "❌ Nature de l'erreur": "Requête invalide.",
                    cause1: "Les champs 'to' et 'subject' sont absents.",
                });
            return;
        }

        // Vérification si les champs 'text' et 'html' n'existent pas en même temps pour éviter une erreur
        if (req.body.text && req.body.html) {
            res.status(400).json({ error: "Requête invalide." });
            console.error(
                {
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
            console.error(
                {
                    identity: "SendMailer_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/mailer/SendMailer_Middleware.ts",
                    "❌ Nature de l'erreur": "Requête invalide.",
                    cause1: "Les champs 'text' et 'html' sont absents.",
                    cause2: "Les champs 'text' et 'html' existent en même temps.",
                    explication: "Au moins un des deux champs doit être présent.",
                });
            return;
        };

        const info = await transporter.sendMail({
            from: `"Montpellier Visuel" <${process.env.EMAIL_USER}>`, // email de l'expéditeur
            to: req.body.to, // liste email des destinataires
            subject: req.body.subject, // objet du mail
            text: req.body.text, // Contenu du mail
            html: req.body.html, // html body
          });
          next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "SendMailer_Middleware.ts",
                type: "middleware",
                chemin: "/server/src/middleware/mailer/SendMailer_Middleware.ts",
                "❌ Nature de l'erreur": "Mail non envoyé !",
                details: error,
            },
        );
        return;
    }
}

export default SendMailer_Middleware;
