import mailer from "../services/mailer";
import { Request, Response, NextFunction } from "express";

const transporter = mailer

async function SendMailer_Middleware( req: Request, res: Response, next: NextFunction ) {
    try {
        const info = await transporter.sendMail({
            from: req.body.from, // email de l'expéditeur
            to: req.body.to, // liste email des destinataires
            subject: req.body.subject, // objet du mail
            text: req.body.text, // Contenu du mail
            html: "", // html body
          });
          next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "SendMailer_Middleware.ts",
                type: "middleware",
                chemin: "/server/src/middleware/SendMailer_Middleware.ts",
                "❌ Nature de l'erreur": "Mail non envoyé !",
                details: error,
            },
        );
        return;
    }
}

export default SendMailer_Middleware;