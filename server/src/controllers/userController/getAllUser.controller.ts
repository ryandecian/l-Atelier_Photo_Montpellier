/* Import des dépendances externes : */
import { Request, Response } from "express";

/* Import des Repositories : */
import { getAllUsers_repository } from "../../repository/user/getAllUsers.repository";

/* Import des Types : */
import getAllUsers_type from "../../types/user/getAllUsers.type";


/* URI : /api/users */
const getAllUser_controller = async (req: Request, res: Response) => {
    try {
        // Logique métier 1 : Recuperer tous les utilisateurs
        const datasUsers: getAllUsers_type[] = await getAllUsers_repository();

        if (datasUsers.length === 0) {
            res.status(404).json({ error: "Aucun utilisateur trouvé" });
            return;
        }

        // Logique métier 2 : Envois de la liste de tout les utilisateurs
        res.status(200).json({
            message: "Liste des utilisateurs récupérée avec succès.",
            data: datasUsers
        });
        return;
    } catch (error) {
        res.status(500).json({ message: "Erreur interne serveur inconnue." });
        return;
    }
};

export default getAllUser_controller;
