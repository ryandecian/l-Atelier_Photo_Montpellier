/* Import de la configuration : */
import { ENV_SAFE } from "../../config/ENV.config";

/* Import des services */
import sendOneMailer_service from "../mailer/sendOneMailer.service";

/* Import des types */
import MailOptions_type from "../../types/mailer_type/mailOptions.type";

async function sendRegister_mail(email: string, firstname: string): Promise<boolean> {
    /* Logique métier 1 : Vérification des variables de paramètre */
        if (!email || !firstname) {
            return false;
        }

    /* Logique métier 2 : Création de l'email */
        const mailOptions: MailOptions_type = {
            to: email,
            subject: "Création de votre compte",
            html: `
                <p>Bonjour ${firstname},</p>
                <p>Votre compte a été créé avec succès.</p>
                <p>Cliquez sur le lien ci-dessous pour accéder à votre compte : </p>
                <p><a href="${ENV_SAFE("VITE_DOMAIN_CLIENT")}/login">Se connecter</a></p>`,
            text: `
                Bonjour ${firstname},
                Votre compte a été créé avec succès.
                Cliquez sur le lien ci-dessous pour accéder à votre compte :
                ${ENV_SAFE("VITE_DOMAIN_CLIENT")}/login
            `
        };

    /* Logique métier 3 : Envoi de l'email de confirmation */
        const sendEmail = await sendOneMailer_service(mailOptions);

        /* Vérification de l'envoi de l'email */
        if (!sendEmail) {
            return false;
        }

    /* Logique métier 4 : Retourne true si l'email a été envoyé avec succès */
        return true;
}

export default sendRegister_mail;
