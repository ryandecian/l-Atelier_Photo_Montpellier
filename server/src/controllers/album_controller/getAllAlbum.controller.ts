/* Import des dépendances externes : */
import { Request, Response } from "express";

/* Import des Repositories : */

/* Import des Types : */

/* URI : /album */
const getAllAlbum_controller = async (req: Request, res: Response) => {
    try {
        const albums = await AlbumRepository.findAll();
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
}

export default getAllAlbum_controller;
