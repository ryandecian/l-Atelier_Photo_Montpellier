/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des Repositories : */
import verifyEmail_repository from "../repository/user_tbl/verifyEmail.repository";
import insertTokenResetPassword_repository from "../repository/reset_password_tbl/insertTokenResetPassword.repository";

/* Import des Types : */
import getAllUsers_type from "../types/user_type/getAllUsers.type";

/* Import des utils */
import { createCryptoToken_utils } from "../utils/createCryptoToken.utils";
import { createExpireDate_utils } from "../utils/createDate.utils";


/* Réinitialisation du mot de passe : enregistrement d'un token de réinitialisation */
/* URI : /reset-password */
const resetPassword_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Vérification si l'email existe */
        const dataUser: getAllUsers_type[] = await verifyEmail_repository(req.body.email);

        /* Si l'email n'existe pas dans la DB, on ne peut pas continuer. */
        if (dataUser.length === 0) {
            res.status(404).json({ error: "Cet email n'existe pas." });
            return;
        }

        /* Logique métier 2 : Création du token avec crypto */
        /* On génère un token sécurisé */
        const token: string = await createCryptoToken_utils();

        /* On génère une date d'expiration dans 1h */
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
        /* Vérification de la présence de la variable d'environnement DOMAIN_CLIENT */
        if (!process.env.VITE_DOMAIN_CLIENT) {
            res.status(500).json({ error: "Erreur interne du serveur." });
            return;
        }

        /* On crée le lien de réinitialisation */
        const linkResetPassword: string = `${process.env.VITE_DOMAIN_CLIENT}/reset-password?token=${token}`;

        /* Logique métier 5 : Envoi de l'email de réinitialisation */
        const mailOptions: MailOptionsType = {
            to: dataUser[0].email,
            subject: "Réinitialisation de votre mot de passe",
            html: `<p>Bonjour ${dataUser[0].firstname},</p>
                   <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
                   <a href="${linkResetPassword}">${linkResetPassword}</a>
                   <p>Ce lien expirera dans 1 heure.</p>`,
        };

        try {
            await sendMailerService(mailOptions); /* Gestion des erreurs directement avec le try/catch dans sendMailerService */
        }
        catch (error) {
            res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
            const sendMailerServiceError = (error as Error).message; /* Récupération du message d'erreur */
            return;
        }

        /* Logique métier 6 : Régulation et nettoyage des tokens expirés en DB */
        const dataToken: RowDataPacket[] = await getTokenResetRepository();

        /* On vérifie si la récupération a réussi */
        if (dataToken.length === 0) { /* La table ne peut pas être vide car on vient d'enregistrer un token */
            res.status(500).json({ error: "Erreur interne du serveur" });
            return;
        }

        /* On crée une date actuelle pour comparer avec la date d'expiration des tokens */
        const dateNow: Date = new Date();

        /* On filtre les tokens expirés */
        const tabExpiredToken: number[] = dataToken
            .filter(token => new Date(token.expires_at) < dateNow)
            .map(token => token.id);

        /* On supprime les tokens expirés de la DB */
        const deleteTokenReset: number | undefined = await deleteTokenResetRepository(tabExpiredToken);

        /* On vérifie si la suppression a réussi */
        if (deleteTokenReset === 0) { /* Si il n'y avait rien à supprimer, cela retourne undefined donc pas d'erreur */
            res.status(500).json({ error: "Erreur lors de la suppression des tokens expirés." });
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

