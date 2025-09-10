/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des Repositories : */
import verifyEmailById_repository from "../../repository/user_tbl/verifyEmailById.repository";
import verifyEmailByEmail_repository from "../../repository/user_tbl/verifyEmailByEmail.repository";
import { putOneUser_repository } from "../../repository/user_tbl/putOneUserById.repository";
import { getOneUserById_repository } from "../../repository/user_tbl/getOneUserById.repository";

/* Import des Types : */
import getAllUsers_type from "../../types/user_type/getAllUsers.type";
import getOneUserById_type from "../../types/user_type/getOneUserById.type";


/* Modifier les données utilisateurs en tant qu'admin */
/* URI : /user */
const putOneUser_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Vérification si l'utilisateur existe */
            const dataUserDB: getAllUsers_type[] = await verifyEmailById_repository(req.body.id);

            if (dataUserDB.length === 0) { /* Si la fonction ne retourne rien, c'est que l'utilisateur n'existe pas */
                res.status(404).json({ error: "Cet utilisateur n'existe pas." });
                return;
            }
        
        /* Logique métier 2 : Vérification si l'email dans la requête est identique à l'email de l'utilisateur en DB */
            /* Si l'email en DB est différent de celui de la requête c'est que l'admin veux modifier l'email utilisateur */
            if (dataUserDB[0].email !== req.body.email) {
                /* On vérifie alors que l'email demandé n'est pas déjà utilisé par un autre utilisateur */
                const emailExists = await verifyEmailByEmail_repository(req.body.email);

                /* Si l'email existe déjà dans la DB, on ne peut pas continuer. */
                if (emailExists.length > 0) { // Si c'est supérieur à 0, c'est que l'email existe déjà
                    res.status(409).json({ error: "Cet email est déjà utilisé. Veuillez en choisir un autre." });
                    return;
                }
            }

        /* Logique métier 2 : Modifier un utilisateur par son id */
            const putDataUser: ResultSetHeader = await putOneUser_repository(req.body);

            if (putDataUser.affectedRows === 0) {
                res.status(404).json({ error: "Erreur lors de la mise à jour de l'utilisateur." });
                return;
            }

        /* Logique métier 3 : Récupérer l'utilisateur par son id */
            const dataUser: getOneUserById_type | null = await getOneUserById_repository(req.body.id);

            if (!dataUser) {
                res.status(404).json({ error: "Erreur lors de la récupération de l'utilisateur modifié." });
                return;
            }

        /* Logique métier 4 : Envois des données de l'utilisateur */
            res.status(200).json({ data: dataUser });
            return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur inconnue." });
        return;
    }
};

export default putOneUser_controller;
