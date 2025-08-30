/* Import des dépendances externes : */
import { Request, Response } from "express";

/* Import des Middlewares : */

/* Import des Repositories : */

/* Import des Types : */

/* Import des utils : */


/* URI : /api/users/me */
const getMeUser_controller = async (req: Request, res: Response) => {
    try {
        // Logique métier 1 : Recuperer l'utilisateur connecté
        const userId = req.body.dataUser.id; // Récupérer l'ID de l'utilisateur à partir du token JWT
        const dataUser: RowDataPacket[] = await getOneUserByIdRepository(userId);

        if (dataUser.length === 0) {
            res.status(404).json({ error: "Aucun utilisateur trouvé" });
            return;
        }

        // Logique métier 2 : Envois des données de l'utilisateur
        res.status(200).json({ data: dataUser });
        return;
    } 
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur inconnue." });
        return;
    }
};

export default getMeUser_controller;
