/* Import des dépendances externes : */
import { Request, Response } from "express";

/* Import des Repositories : */
import { getAllAlbums_repository } from "../../repository/album_tbl/getAllAlbums.repository";

/* Import des Types : */
import getAllAlbums_type from "../../types/album_type/getAllAlbums.type";

/* URI : /album */
const getAllAlbums_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Recuperer tous les albums */
        const albums: getAllAlbums_type[] = await getAllAlbums_repository();
        
        if (albums.length === 0) {
            res.status(404).json({ error: "Aucun album trouvé" });
            console.info("Aucun album trouvé");
            return;
        }

        /* Logique métier 2 : Retourner les albums */
        res.status(200).json({
            message: "Liste des albums récupérée avec succès.",
            data: albums
        });
    } 
    catch (error) {
        res.status(500).json({ message: "Erreur interne serveur inconnue." });
        return;
    }
}

export default getAllAlbums_controller;
