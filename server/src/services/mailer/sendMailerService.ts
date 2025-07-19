import transporter from "./mailer";
import MailOptionsType from "../../types/mailOptionsType";
import { SentMessageInfo } from "nodemailer/lib/sendmail-transport";

import ENV from "../../config/ENV.config";

/* Cette fonction doit être appelé dans un try catch pour la gestion des erreur */

async function sendMailerService(mailOptions: MailOptionsType): Promise<SentMessageInfo> {
    try {
        // Récupération de l'email de l'expéditeur depuis les variables d'environnement
        const MAIL_SERVER_ADMIN: string | undefined = ENV("process.env.MAIL_SERVER_ADMIN", "Warning");

        //Vérification de la présence de l'email de l'expéditeur
        if (!MAIL_SERVER_ADMIN) {
            throw new Error("Erreur : l'email de l'expéditeur (MAIL_SERVER_ADMIN) est manquant dans les variables d'environnement.");
        }

        // Création d'un filtre pour les options de mail a envoyer a nodeMailer
        const filterMailOption: MailOptionsType = {
            from: mailOptions.from || MAIL_SERVER_ADMIN,
            to: mailOptions.to,
            subject: mailOptions.subject,
        }

        // Vérification si les champs 'to' et 'subject' sont présents
        if (mailOptions.text) {
            filterMailOption.text = mailOptions.text;
        }
        else if (mailOptions.html) {
            filterMailOption.html = mailOptions.html;
        }
        else {
            throw new Error("Erreur: les champs 'text' et 'html' sont absents.");
        }

        const sendMailer: SentMessageInfo = await transporter.sendMail(filterMailOption);
        return sendMailer;
    }
    catch (error) {
        throw new Error((error as Error).message);
    }
}

export default sendMailerService;


// Exemple d'utilisation de la fonction sendMailerService dans un contrôleur
// try {
//     const mailOptions = {
//         to: dataUser[0].email,
//         subject: "Confirmation de réinitialisation de mot de passe",
//         html: `
//             <h1>Réinitialisation de mot de passe</h1>
//             <p>Bonjour ${dataUser[0].firstname},</p>
//             <p>Votre mot de passe a été réinitialisé avec succès.</p>
//             <p>Si vous n'êtes pas à l'origine de cette demande, veuillez contacter notre support.</p>
//             <p>Cordialement,</p>
//             <p>L'Atelier Photo Montpellier</p>
//             `,
//     };

//     await sendMailerService(mailOptions);
// }
// catch (error) {
//     res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
//     const sendMailerServiceError = (error as Error).message; // On récupère le message d'erreur de la fonction sendMailerService
//     console.error(
//         {
//             identity: "resetPasswordConfirmController.ts",
//             type: "controller",
//             URI: "/api/resetpassword/confirm",
//             methode: "POST",
//             metier: "Logique métier 6",
//             codeStatus: "500 : Internal Server Error",
//             chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
//             "❌ Nature de l'erreur": "Erreur lors de l'envoi de l'email.",
//             sendMailerService: {
//                 identity: "sendMailerService",
//                 type: "service",
//                 chemin: "/server/src/services/mailer/sendMailerService.ts",
//                 "❌ Nature de l'erreur": sendMailerServiceError,
//             },
//         }
//     );
//     return;
// }