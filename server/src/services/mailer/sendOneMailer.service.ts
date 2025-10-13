/* Import des dépendances : */
import { SentMessageInfo } from "nodemailer/lib/sendmail-transport";

/* Import des Config : */
import { ENV_SAFE } from "../../config/ENV.config";

/* Import des composants de Security */
import verifyHeaderInjectionMail_security from "../../security/verifyHeaderInjectionMail.security";

/* Import des services */
import transporter from "./transporter.service";

/* Import des types */
import MailOptions_type from "../../types/mailer_type/mailOptions.type";


async function sendOneMailer_service(mailOptions: MailOptions_type): Promise<boolean> {
    /* Logique métier 1 : Vérification des paramètres obligatoires */

        /* Si le champ 'to' est vide, on retourne une erreur */
        if (!mailOptions.to || (Array.isArray(mailOptions.to) && mailOptions.to.length === 0)) {
            return false;
        }

        /* Si le champ 'subject' est vide, on retourne une erreur */
        if (!mailOptions.subject || mailOptions.subject.trim().length === 0) {
            return false;
        }

    /* Logique métier 2 : Vérification des en-têtes de l'email */
        /* On bloque toute tentative d'injection de nouveaux en-têtes via l'insertion de "\r" ou "\n" dans les champs sensibles. */

       /* Si le champ 'subject' contient des caractères interdits, on retourne une erreur */
        if (verifyHeaderInjectionMail_security(mailOptions.subject)) {
            return false;
        }

        /* Si le champ 'to' contient des caractères interdits, on retourne une erreur */
        if (!Array.isArray(mailOptions.to) && verifyHeaderInjectionMail_security(String(mailOptions.to))) {
            return false;
        }

    /* Logique métier 3 : Création du contenu du mail */

        /* Création de l'objet filtré pour l'envoi */
        const filterMailOption: MailOptions_type = {
            from: `"LAPM - l'Atelier Photo Montpellier" <${ENV_SAFE("MAIL_SERVER_ADMIN")}>`,
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
        /* Si le champ 'text' et 'html' sont vides, on retourne une erreur */
        if (!filterMailOption.text && !filterMailOption.html) {
            return false;
        }

    /* Logique métier 4 : Envoi de l'email */

        /* Envoi de l'email via Nodemailer */
        const sendMailer: SentMessageInfo = await transporter.sendMail(filterMailOption);

        /* Vérification : si l'email n'a pas été envoyé */
        if (!sendMailer.accepted || sendMailer.accepted.length === 0) {
            return false;
        }

    /* Logique métier 5 : Renvoi du statut d'envoi */

        /* Si tout est bon, on retourne true pour annoncer que l'email a été envoyé avec succès */
        return true;
}

export default sendOneMailer_service;
