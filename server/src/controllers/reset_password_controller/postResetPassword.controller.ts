/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des Repositories : */
import verifyEmail_repository from "../../repository/user_tbl/verifyEmailByEmail.repository";
import { insertTokenResetPassword_repository } from "../../repository/reset_password_tbl/insertTokenResetPassword.repository";
import { getAllTokenResetPassword_repository } from "../../repository/reset_password_tbl/getAllTokenResetPassword.repository";
import { deleteVariousTokenReset_repository } from "../../repository/reset_password_tbl/deleteVariousTokenResetPassword.repository";

/* Import des Services : */
import sendResetPassword_email from "../../mails/sendResetPassword.email";

/* Import des Types : */
import getAllUsers_type from "../../types/user_type/getAllUsers.type";
import getAllTokenResetPassword_type from "../../types/reset_password_type/getAllTokenResetPassword.type";

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

        /* Logique métier 4 : Envoi de l'email de réinitialisation */
            const sendEmail: boolean = await sendResetPassword_email(dataUser[0].email, dataUser[0].firstname, token);

            if (!sendEmail) {
                res.status(500).json({ error: "Erreur lors de l'envoi de l'email de réinitialisation du mot de passe." });
                return;
            }

        /* Logique métier 5 : Régulation et nettoyage des tokens expirés en DB */
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
                res.status(200).json({ message: "Un email de réinitialisation envoyé." });
                return;
            }

        /* Logique métier 6 : Réponse de succès */
            res.status(200).json({ message: "Email de réinitialisation envoyé." });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne du serveur inconnue." });
        return;
    }
};

export default postResetPassword_controller;
