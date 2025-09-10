/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des fichiers de configuration : */
import { ENV } from "../../config/ENV.config";

/* Import des Repositories : */
import verifyEmailByEmail_repository from "../../repository/user_tbl/verifyEmailByEmail.repository";
import insertOneUser_repository from "../../repository/user_tbl/insertOneUser.repository";

/* Import des emails : */
import sendRegister_email from "../../mails/sendRegister.email";

/* Import des Types : */
import getAllUsers_type from "../../types/user_type/getAllUsers.type";

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

        /* Logique métier 4 : Envois de l'email de confirmation de création de compte */
            const sendEmail = await sendRegister_email(req.body.email, req.body.firstname);

            if (!sendEmail) {
                res.status(201).json({ message: "Enregistrement accepté." });
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
