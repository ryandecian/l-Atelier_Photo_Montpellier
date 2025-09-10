/* Import de la configuration : */
import { ENV_SAFE } from "../config/ENV.config";

/* Import des services */
import sendOneMailer_service from "../services/mailer/sendOneMailer.service";

/* Import des types */
import MailOptions_type from "../types/mailer_type/mailOptions.type";


async function sendResetPassword_email(email: string, firstname: string, token: string): Promise<boolean> {
    /* Logique métier 1 : Vérification des variables de paramètre */
        if (!email || !firstname || !token) {
            return false;
        }

    /* Logique métier 2 : Création du lien de réinitialisation */
    const linkResetPassword: string = `${ENV_SAFE("VITE_DOMAIN_CLIENT")}/reset-password/confirm?token=${token}`;

    /* Logique métier 3 : Création de l'email */
        const mailOptions: MailOptions_type = {
            to: email,
            subject: "Réinitialisation de votre mot de passe",
            html: `
                <p>Bonjour ${firstname},</p>
                <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
                <a href="${linkResetPassword}">Réinitialiser votre mot de passe</a>
                <p>Ce lien expirera dans 1 heure.</p>
            `,
            text: `
                Bonjour ${firstname},
                Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :
                ${linkResetPassword}
                Ce lien expirera dans 1 heure.
            `
        };

    /* Logique métier 4 : Envoi de l'email de confirmation */
        const sendEmail = await sendOneMailer_service(mailOptions);

        /* Vérification de l'envoi de l'email */
        if (!sendEmail) {
            return false;
        }

    /* Logique métier 5 : Retourne true si l'email a été envoyé avec succès */
        return true;
}

export default sendResetPassword_email;

/**
 * Documentation : 
 * 
 * Pour utiliser ce composant il faut faire comme ceci :
 * const sendEmail = await sendResetPassword_email(email, firstname, token);
 *
 * if (!sendEmail) {
 *     // Gérer l'erreur d'envoi d'email
 * }
 *
 * Cela garantie une variable existante
 */
