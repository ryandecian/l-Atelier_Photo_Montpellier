/* Import des dépendances externes : */
import { Request, Response } from "express";

/* Import des Repositories : */
import { getOneAlbum_repository } from "../../repository/album_tbl/getOneAlbumById.repository";
import { getOneUserById_repository } from "../../repository/user_tbl/getOneUserById.repository";

/* Import des Types : */
import getAllAlbums_type from "../../types/album_type/getAllAlbums.type";
import getOneUserById_type from "../../types/user_type/getOneUserById.type";

/* Récupération d'un album par son ID en tant qu'admin */
/* URI : /album/:id */
const getOneAlbumById_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Récupération de l'album cible */
        const albumId = parseInt(req.params.id, 10);
        if (!Number.isFinite(albumId) || albumId <= 0) {
            res.status(400).json({ error: "ID d'album invalide" });
            return;
        }

        const dataAlbum: getAllAlbums_type | null = await getOneAlbum_repository(albumId);

        if (!dataAlbum) {
            res.status(404).json({ error: "Aucun album trouvé" });
            return;
        }

        /* Logique métier 2 : Récupération des données de l'utilisateur associé */
        const userId = dataAlbum.user_id;
        const dataUser: getOneUserById_type | null = await getOneUserById_repository(userId);

        if (!dataUser) {
            res.status(404).json({ error: "Erreur dans la récupération des données de l'utilisateur associé" });
            return;
        }

        /* Logique métier 3 : Construction de la réponse */
        res.status(200).json({
            message: "Album récupéré avec succès.",
            data: {
                id_album: dataAlbum.id,
                user_id: dataUser.id,
                firstname: dataUser.firstname,
                lastname: dataUser.lastname,
                lien: dataAlbum.lien,
                access_code: dataAlbum.access_code,
                date: new Date(dataAlbum.date).toLocaleDateString("fr-FR") /* "12/05/2025" */
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: "Erreur interne serveur inconnue." });
        return;
    }
}

export default getOneAlbumById_controller;
