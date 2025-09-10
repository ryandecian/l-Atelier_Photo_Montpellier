/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des Repositories : */
import { getOneAlbum_repository } from "../../repository/album_tbl/getOneAlbumById.repository";
import { putOneAlbumById_repository } from "../../repository/album_tbl/putOneAlbumById.repository";

/* Import des Types : */
import getAllAlbums_type from "../../types/album_type/getAllAlbums.type";

/* Import des Utils */
import toSQLDate from "../../utils/toSQLDate.utils";

/* Mise à jour d'un album par son ID en tant qu'admin */
/* URI : /album */
const putOneAlbum_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Récupérer l'album par son ID qui permet de valider son existence */
            const dataAlbum: getAllAlbums_type | null = await getOneAlbum_repository(req.body.id);

            if (!dataAlbum) {
                res.status(404).json({ error: "Album non trouvé." });
                return;
            }

        /* Logique métier 2 : Convertir la date au format SQL */
            let sqlDate: string;
            try {
                sqlDate = toSQLDate(req.body.date);
            }
            catch (e) {
                res.status(400).json({ error: (e as Error).message });
                return;
            }
            /* Remplacement de la date dans le body */
            req.body.date = sqlDate;

        /* Logique métier 3 : Mettre à jour l'album */
            const putDataAlbum: ResultSetHeader = await putOneAlbumById_repository(req.body);

            if (putDataAlbum.affectedRows === 0) {
                res.status(404).json({ error: "Erreur dans la mise à jour de l'album." });
                return;
            }

        /* Logique métier 4 : Répondre à la requête */
            res.status(200).json({ message: "Album mis à jour avec succès." });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur inconnue." });
        return;
    }
};

export default putOneAlbum_controller;
