/* Import des dépendances externes : */
import { Request, Response } from "express";

/* Import des Repositories : */
import { getOneUserById_repository } from "../../repository/user_tbl/getOneUserById.repository";

/* Import des Types : */
import getOneUserById_type from "../../types/user_type/getOneUserById.type";


/* Récupérer les données d'un utilisateur en tant qu'admin via l'id */
/* URI : /user/:id */

const getOneUserById_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Recupération des data de l'utilisateur */
        /* Récupération de l'ID de l'utilisateur dans l'URL */
        const userId = parseInt(req.params.id, 10);
        if (!Number.isFinite(userId) || userId <= 0) {
            res.status(400).json({ message: "ID invalide" });
            return;
        }

        const dataUser: getOneUserById_type | null = await getOneUserById_repository(userId);

        if (!dataUser) {
            res.status(404).json({ error: "Aucun utilisateur trouvé" });
            return;
        }

        /* Logique métier 2 : Envois des données de l'utilisateur */
        res.status(200).json({ data: dataUser });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        return;
    }
};


export default getOneUserById_controller;
