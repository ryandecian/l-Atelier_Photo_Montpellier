/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des fichiers de configuration : */
import { ENV } from "../../config/ENV.config";

/* Import des Repositories : */
import verifyEmailByEmail_repository from "../../repository/user_tbl/verifyEmailByEmail.repository";
import insertOneUser_repository from "../../repository/user_tbl/insertOneUser.repository";

/* Import des Services : */
import sendOneMailer_service from "../../services/mailer/sendOneMailer.service";

/* Import des Types : */
import getAllUsers_type from "../../types/user_type/getAllUsers.type";
import MailOptions_type from "../../types/mailOptions.type";

/* Import des utils */
import { hashPasswordArgon_utils } from "../../utils/hashArgon.utils";


/* Register : Création d'un utilisateur */
/* URI : /register */    
const register_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Vérification si l'email existe */
        const dataUser: getAllUsers_type[] = await verifyEmailByEmail_repository(req.body.email);

        /* Si l'email existe déjà dans la DB, on ne peut pas continuer. */
        if (dataUser.length > 0) { /* Si c'est supérieur à 0, c'est que l'email existe déjà */
            res.status(409).json({ error: "Cet email est déjà utilisé. Veuillez en choisir un autre." });
            return;
        }

        /* Logique métier 2 : Hachage du mot de passe du nouvel utilisateur */
        /* On hache le mot de passe avant de l'insérer dans la DB */
        const hash: string = await hashPasswordArgon_utils(req.body.password);

        /* On remplace le mot de passe en clair par le mot de passe haché */
        req.body.password = hash;

        /* Logique métier 3 : Insertion de l'utilisateur dans la DB */
        const insertUser: ResultSetHeader = await insertOneUser_repository(req.body);

        if (insertUser.affectedRows === 0) {
            res.status(400).json({ error: "Erreur lors de l'enregistrement de l'utilisateur." });
            return;
        }
        console.info("Logique métier 3 ok")

        /* Logique métier 4 : Envois de l'email de confirmation de création de compte */
        if (!ENV.VITE_DOMAIN_CLIENT) {
            res.status(500).json({ error: "Erreur interne du serveur." });
            return;
        }

        const mailOptions: MailOptions_type = {
            to: req.body.email,
            subject: "Création de votre compte",
            html: `<p>Bonjour ${req.body.firstname},</p>
                   <p>Votre compte a été créé avec succès.</p>
                   <p>Cliquez sur le lien ci-dessous pour accéder à votre compte : </p>
                   <p><a href="${ENV.VITE_DOMAIN_CLIENT}/login">Se connecter</a></p>`,
            text: `Bonjour ${req.body.firstname},
                   Votre compte a été créé avec succès.
                   Cliquez sur le lien ci-dessous pour accéder à votre compte :
                   ${ENV.VITE_DOMAIN_CLIENT}/login`
        };

        try {
            await sendOneMailer_service(mailOptions); /* Gestion des erreurs directement dans sendMailerService */
        }
        catch (error) {
            res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
            return;
        }

        /* Logique métier 5 : Réponse de succès */
        res.status(201).json({ message: "Enregistrement accepté. Un mail de confirmation a été envoyé." });
        return;
    }
    catch (error) {
        res.status(500).json({ message: "Erreur interne serveur inconnue." });
        return;
    }
};

export default register_controller;
