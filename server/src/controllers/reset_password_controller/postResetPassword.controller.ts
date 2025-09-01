/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des composants de config : */
import { ENV } from "../../config/ENV.config";

/* Import des Repositories : */
import verifyEmail_repository from "../../repository/user_tbl/verifyEmail.repository";
import { insertTokenResetPassword_repository } from "../../repository/reset_password_tbl/insertTokenResetPassword.repository";
import { getAllTokenResetPassword_repository } from "../../repository/reset_password_tbl/getAllTokenResetPassword.repository";
import { deleteVariousTokenReset_repository } from "../../repository/reset_password_tbl/deleteVariousTokenResetPassword.repository";

/* Import des Services : */
import sendOneMailer_service from "../../services/mailer/sendOneMailer.service";

/* Import des Types : */
import getAllUsers_type from "../../types/user_type/getAllUsers.type";
import getAllTokenResetPassword_type from "../../types/reset_password_type/getAllTokenResetPassword.type";
import MailOptions_type from "../../types/mailOptions.type";

/* Import des utils */
import { createCryptoToken_utils } from "../../utils/createCryptoToken.utils";
import { createExpireDate_utils } from "../../utils/createDate.utils";

/* Réinitialisation du mot de passe : enregistrement d'un token de réinitialisation */
/* URI : /reset-password */
const postResetPassword_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Vérification si l'email existe */
        const dataUser: getAllUsers_type[] = await verifyEmail_repository(req.body.email);

        /* Si l'email n'existe pas dans la DB, on ne peut pas continuer. */
        if (dataUser.length === 0) {
            res.status(404).json({ error: "Cet email n'existe pas." });
            return;
        }

        /* Logique métier 2 : Création du token avec crypto */
        const token: string = await createCryptoToken_utils();
        const expiresAt: Date = await createExpireDate_utils();

        /* Sécurité : On vérifie si le token et la date d'expiration sont valides */
        if (!expiresAt || !token) {
            res.status(500).json({ error: "Erreur interne du serveur." });
            return;
        }

        /* Logique métier 3 : Enregistrement du token et de la date d'expiration dans la DB */
        const insertTokenReset: ResultSetHeader = await insertTokenResetPassword_repository(
            dataUser[0].id,
            token,
            expiresAt
        );

        /* Vérification si l'insertion a réussi */
        if (insertTokenReset.affectedRows === 0) {
            res.status(400).json({ error: "Erreur interne serveur." });
            return;
        }

        /* Logique métier 4 : Création du lien de réinitialisation */
        if (!ENV.VITE_DOMAIN_CLIENT) {
            res.status(500).json({ error: "Erreur interne du serveur." });
            return;
        }

        const linkResetPassword: string = `${ENV.VITE_DOMAIN_CLIENT}/reset-password?token=${token}`;

        /* Logique métier 5 : Envoi de l'email de réinitialisation */
        const mailOptions: MailOptions_type = {
            to: dataUser[0].email,
            subject: "Réinitialisation de votre mot de passe",
            html: `<p>Bonjour ${dataUser[0].firstname},</p>
                   <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
                   <a href="${linkResetPassword}">${linkResetPassword}</a>
                   <p>Ce lien expirera dans 1 heure.</p>`,
            text: `Bonjour ${dataUser[0].firstname},
                   Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :
                   ${linkResetPassword}
                   Ce lien expirera dans 1 heure.`
        };

        try {
            await sendOneMailer_service(mailOptions); /* Gestion des erreurs directement dans sendMailerService */
        }
        catch (error) {
            res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
            return;
        }

        /* Logique métier 6 : Régulation et nettoyage des tokens expirés en DB */
        const dataToken: getAllTokenResetPassword_type[] = await getAllTokenResetPassword_repository();

        if (dataToken.length === 0) { /* La table ne peut pas être vide car on vient d'enregistrer un token */
            res.status(500).json({ error: "Erreur interne du serveur" });
            return;
        }

        const dateNow: Date = new Date();

        const tabExpiredToken: number[] = dataToken
            .filter(token => new Date(token.expires_at) < dateNow)
            .map(token => token.id);

        const deleteTokenReset: number | undefined = await deleteVariousTokenReset_repository(tabExpiredToken);

        if (deleteTokenReset === 0) { /* Si rien à supprimer → retourne undefined → pas d'erreur bloquante */
            /* Même s'il y a une erreur à ce stade, on renvoie une réponse de succès */
            console.error("Erreur lors de la suppression des tokens expirés.");
            res.status(200).json({ message: "Email de réinitialisation envoyé." });
            return;
        }

        /* Logique métier 7 : Réponse de succès */
        res.status(200).json({ message: "Email de réinitialisation envoyé." });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne du serveur inconnue." });
        return;
    }
};

export default postResetPassword_controller;
