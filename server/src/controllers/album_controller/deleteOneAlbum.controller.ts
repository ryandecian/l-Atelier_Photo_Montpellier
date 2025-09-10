/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des Repositories : */
import { deleteOneAlbumById_repository } from "../../repository/album_tbl/deleteOneAlbumById.repository";

/* Suppression d'un utilisateur en tant qu'admin */
/* URI : /album */
const deleteOneAlbum_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Suppression de l'album dans la DB */
            const deleteDataAlbum: ResultSetHeader = await deleteOneAlbumById_repository(req.body.id_album);

            if (deleteDataAlbum.affectedRows === 0) {
                res.status(404).json({ error: "Aucun album trouvé" });
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

export default deleteOneAlbum_controller;
