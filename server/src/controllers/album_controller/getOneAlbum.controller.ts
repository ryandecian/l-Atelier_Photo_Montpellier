/* Import des dépendances externes : */
import { Request, Response } from "express";

/* Import des Repositories : */
import { getAllAlbums_repository } from "../../repository/album_tbl/getAllAlbums.repository";

/* Import des Types : */
import getAllAlbums_type from "../../types/album_type/getAllAlbums.type";

/* URI : /album */
const getOneAlbum_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Recupération de l'album cible */
    } 
    catch (error) {
        res.status(500).json({ message: "Erreur interne serveur inconnue." });
        return;
    }
}

export default getOneAlbum_controller;
