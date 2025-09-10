/* Import de la configuration : */
import { ENV_SAFE } from "../config/ENV.config";

/* Import des services */
import sendOneMailer_service from "../services/mailer/sendOneMailer.service";

/* Import des types */
import MailOptions_type from "../types/mailer_type/mailOptions.type";


async function sendConfirmResetPassword_email(email: string, firstname: string): Promise<boolean> {
    /* Logique métier 1 : Vérification des variables de paramètre */
        if (!email || !firstname) {
            return false;
        }

    /* Logique métier 2 : Création de l'email */
        const mailOptions: MailOptions_type = {
            to: email,
            subject: "Confirmation de réinitialisation de mot de passe",
            html: `
                <h1>Réinitialisation de mot de passe</h1>
                <p>Bonjour ${firstname},</p>
                <p>Votre mot de passe a été réinitialisé avec succès.</p>
                <p>Si vous n'êtes pas à l'origine de cette demande, veuillez contacter notre support.</p>
                <p>Cordialement,</p>
                <p>L'Atelier Photo Montpellier</p>
            `,
            text: `
                Réinitialisation de mot de passe
                Bonjour ${firstname},
                Votre mot de passe a été réinitialisé avec succès.
                Si vous n'êtes pas à l'origine de cette demande, veuillez contacter notre support.
                Cordialement,
                L'Atelier Photo Montpellier
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

export default sendConfirmResetPassword_email;

/**
 * Documentation : 
 * 
 * Pour utiliser ce composant il faut faire comme ceci :
 * const sendEmail = await sendConfirmResetPassword_email(email, firstname);
 * 
  * if (!sendEmail) {
 *     // Gérer l'erreur d'envoi d'email
 * }
 * 
 * Cela garantie une variable existante
 */
