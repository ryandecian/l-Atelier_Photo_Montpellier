/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des composants de config : */

/* Import des Repositories : */
import { getOneTokenReset_repository } from "../../repository/reset_password_tbl/getOneTokenResetPassword.repository";
import { getOneUserById_repository } from "../../repository/user_tbl/getOneUserById.repository";
import { putOneUserPasswordById_repository } from "../../repository/user_tbl/putOneUserPasswordById.repository";
import { deleteOneTokenResetPassword_repository } from "../../repository/reset_password_tbl/deleteOneTokenResetPassword.repository";

/* Import des Services : */
import sendOneMailer_service from "../../services/mailer/sendOneMailer.service";

/* Import des Types : */
import getAllTokenResetPassword_type from "../../types/reset_password_type/getAllTokenResetPassword.type";
import getOneUserById_type from "../../types/user_type/getOneUserById.type";

/* Import des utils */
import { hashPasswordArgon_utils } from "../../utils/hashArgon.utils";

/* Réinitialisation du mot de passe : utilisation du token et enregistrement du nouveau mot de passe */
/* URI : /reset-password/confirme */
const deleteUseResetPassword_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Récupération et vérification du token dans la DB */
        const tokenDB: getAllTokenResetPassword_type[] = await getOneTokenReset_repository(req.body.token);

        /* Vérification si le token existe en DB */
        if (tokenDB.length === 0) {
            res.status(403).json({ error: "Token invalide." });
            return;
        }

        /* Création des variables pour faire la comparaison de date */
        const dateNow: Date = new Date();
        const dateToken: Date = new Date(tokenDB[0].expires_at);

        /* Vérification si le token est expiré */
        if (dateNow > dateToken) {
            res.status(403).json({ error: "Token expiré." });
            return;
        }

        /* Logique métier 2 : Récupération de l'utilisateur en DB */
        const dataUser: getOneUserById_type | null = await getOneUserById_repository(tokenDB[0].user_id);

        /* Vérification si l'utilisateur existe en DB ou que la requête a fonctionné */
        if (!dataUser) {
            res.status(404).json({ error: "Utilisateur introuvable." });
            return;
        }

        /* Logique métier 3 : Hachage du nouveau mot de passe utilisateur */
        const hash: string = await hashPasswordArgon_utils(req.body.password);

        /* Logique métier 4 : Enregistrement du nouveau mot de passe dans la DB */
        const updatePassword: ResultSetHeader = await putOneUserPasswordById_repository(dataUser.id, hash);
        
        /* Vérification si le mot de passe a bien été mis à jour */
        if (updatePassword.affectedRows === 0) {
            res.status(500).json({ error: "Erreur lors de la mise à jour du mot de passe." });
            return;
        }

        /* Logique métier 5 : Suppression du token dans la DB */
        const deleteToken: number = await deleteOneTokenResetPassword_repository(req.body.token);

        /* Vérification si le token a bien été supprimé */
        if (deleteToken === 0) {
            res.status(500).json({ error: "Erreur lors de la suppression du token." });
            return;
        }

        /* Logique métier 6 : Envoi d'un email de confirmation à l'utilisateur */
        try {
            const mailOptions = {
                to: dataUser.email,
                subject: "Confirmation de réinitialisation de mot de passe",
                html: `
                    <h1>Réinitialisation de mot de passe</h1>
                    <p>Bonjour ${dataUser.firstname},</p>
                    <p>Votre mot de passe a été réinitialisé avec succès.</p>
                    <p>Si vous n'êtes pas à l'origine de cette demande, veuillez contacter notre support.</p>
                    <p>Cordialement,</p>
                    <p>L'Atelier Photo Montpellier</p>
                `,
                text: `
                    Réinitialisation de mot de passe
                    Bonjour ${dataUser.firstname},
                    Votre mot de passe a été réinitialisé avec succès.
                    Si vous n'êtes pas à l'origine de cette demande, veuillez contacter notre support.
                    Cordialement,
                    L'Atelier Photo Montpellier
                `
            };

            await sendOneMailer_service(mailOptions);
        }
        catch (error) {
            res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
            return;
        }

        /* Logique métier 7 : Envoi de la réponse au client */
        res.status(200).json({ message: "Mot de passe réinitialisé avec succès." });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne du serveur inconnue." });
    }
};


export default deleteUseResetPassword_controller;
