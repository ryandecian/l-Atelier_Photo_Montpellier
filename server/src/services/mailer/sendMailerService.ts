import transporter from "./mailer";
import MailOptionsType from "../../types/mailOptionsType";

async function sendMailerService(mailOptions: MailOptionsType) {
    try {
        // Récupération de l'email de l'expéditeur depuis les variables d'environnement
        const MAIL_SERVER_ADMIN = process.env.MAIL_SERVER_ADMIN;

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
            throw new Error("Erreur : les champs 'text' et 'html' sont absents.");
        }

        const sendMailer = await transporter.sendMail(filterMailOption);
        return sendMailer;
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw new Error("Erreur lors de l'envoi de l'email.");
    }
}

export default sendMailerService;
