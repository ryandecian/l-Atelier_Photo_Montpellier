/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des Repositories : */
import { deleteOneUserById_repository } from "../../repository/user_tbl/deleteOneUserById.repository";


/* Suppression d'un utilisateur en tant qu'admin */
/* URI : /user */
const deleteOneUser_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Suppression de l'utilisateur dans la DB */
            const deleteDataUser: ResultSetHeader = await deleteOneUserById_repository(req.body.id);

            if (deleteDataUser.affectedRows === 0) {
                res.status(404).json({ error: "Aucun utilisateur trouvé" });
                return;
            }

        /* Logique métier 2 : Envois de la confirmation de la suppression */
            res.status(200).json({ message: "Suppression réussie" });
            return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur inconnue." });
        return;
    }
};

export default deleteOneUser_controller;
