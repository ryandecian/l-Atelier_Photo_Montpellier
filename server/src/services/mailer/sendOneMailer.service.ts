/* Import des dépendances : */
import { SentMessageInfo } from "nodemailer/lib/sendmail-transport";

/* Import de la configuration : */
import { ENV_SAFE } from "../../config/ENV.config";

/* Import des composants de security */
import verifyHeaderInjectionMail_security from "../../security/verifyHeaderInjectionMail.security";

/* Import des services */
import transporter from "./transporter.service";

/* Import des types */
import MailOptions_type from "../../types/mailOptions.type";


async function sendOneMailer_service(mailOptions: MailOptions_type): Promise<SentMessageInfo> {
    try {
        /* Récupération de l'email de l'expéditeur depuis les variables d'environnement */
        const MAIL_SERVER_ADMIN: string = ENV_SAFE("MAIL_SERVER_ADMIN");

        /* Vérification des paramètres obligatoires */
        if (!mailOptions.to || (Array.isArray(mailOptions.to) && mailOptions.to.length === 0)) {
            throw new Error("Erreur : le champ 'to' est obligatoire.");
        }

        if (!mailOptions.subject || mailOptions.subject.trim().length === 0) {
            throw new Error("Erreur : le champ 'subject' est obligatoire.");
        }

        /* 
            Vérifications de sécurité : anti-injection d'en-têtes SMTP
            ----------------------------------------------------------
            On bloque toute tentative d'injection de nouveaux en-têtes via 
            l'insertion de "\r" ou "\n" dans les champs sensibles.
        */
        if (verifyHeaderInjectionMail_security(mailOptions.subject)) {
            throw new Error("Erreur : 'subject' contient des caractères interdits.");
        }
        if (!Array.isArray(mailOptions.to) && verifyHeaderInjectionMail_security(String(mailOptions.to))) {
            throw new Error("Erreur : 'to' contient des caractères interdits.");
        }

        /* Création de l'objet filtré pour l'envoi */
        const filterMailOption: MailOptions_type = {
            from: MAIL_SERVER_ADMIN,
            to: mailOptions.to,
            subject: mailOptions.subject.trim(),
        };

        /* Vérification du contenu : au moins text ou html doit exister */
        if (mailOptions.text) {
            filterMailOption.text = mailOptions.text;
        }
        if (mailOptions.html) {
            filterMailOption.html = mailOptions.html;
        }
        if (!filterMailOption.text && !filterMailOption.html) {
            throw new Error("Erreur : les champs 'text' et 'html' sont absents.");
        }

        /* Envoi de l'email via Nodemailer */
        const sendMailer: SentMessageInfo = await transporter.sendMail(filterMailOption);
        return sendMailer;
    }
    catch (error) {
        if (error instanceof Error) {
            throw error; /* on relance l'erreur d'origine, stack incluse */
        }
        throw new Error("Erreur inconnue lors de l’envoi d’email.");
    }
}

export default sendOneMailer_service;




// Exemple d'utilisation de la fonction sendMailerService dans un contrôleur
// const mailOptions: MailOptionsType = {
//     to: dataUser[0].email,
//     subject: "Réinitialisation de votre mot de passe",
//     html: `<p>Bonjour ${dataUser[0].firstname},</p>
//            <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
//            <a href="${linkResetPassword}">${linkResetPassword}</a>
//            <p>Ce lien expirera dans 1 heure.</p>`,
//     text: `Bonjour ${dataUser[0].firstname},
//            Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :
//            ${linkResetPassword}
//            Ce lien expirera dans 1 heure.`
// }
//
// try {
//     await sendOneMailer_service(mailOptions) // Gestion des erreur directement avec le try/catch dans la fonction sendMailerService
// }
// catch (error) {
//     res.status(500).json({ error: "Erreur lors de l'envoi de l'email de réinitialisation du mot de passe." });
//     const sendMailerServiceError = (error as Error).message; /* On récupère le message d'erreur de la fonction sendMailerService */
//     return;
// }