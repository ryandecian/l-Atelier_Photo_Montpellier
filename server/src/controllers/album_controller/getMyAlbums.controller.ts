/* Import des dépendances externes : */
import { Request, Response } from "express";

/* Import des Repositories : */
import { getMyAlbums_repository } from "../../repository/album_tbl/getMyAlbums.repository";
import verifyEmailById_repository from "../../repository/user_tbl/verifyEmailById.repository";

/* Import des Types : */
import getAllUsers_type from "../../types/user_type/getAllUsers.type";
import getAllAlbums_type from "../../types/album_type/getAllAlbums.type";

/* URI : /album */
const getMyAlbums_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Vérifier que l'utilisateur existe et récupérer ses données complètes */
        const dataUser: getAllUsers_type[] | null = await verifyEmailById_repository(req.body.dataUser.id);

        if (!dataUser || dataUser.length === 0) {
            res.status(404).json({ error: "Utilisateur non trouvé" });
            return;
        }

        /* On prend le premier (et unique) enregistrement utilisateur */
        const user = dataUser[0];

        /* Logique métier 2 : Récupérer tous les albums privés de l'utilisateur connecté */
        const albums: getAllAlbums_type[] = await getMyAlbums_repository(req.body.dataUser.id);

        if (albums.length === 0) {
            res.status(404).json({ error: "Aucun album trouvé" });
            console.info("Aucun album trouvé");
            return;
        }

        /* Logique métier 3 : Construire le tableau d'objets attendu pour le front */
        const dataAlbums = albums.map((album) => {
            return {
                id_album: album.id,
                firstname: user.firstname,
                lastname: user.lastname,
                access_password: album.access_code, /* DB: access_code -> réponse: access_password */
                date: new Date(album.date).getTime() /* timestamp en ms */
            };
        });

        /* Logique métier 4 : Réponse */
        res.status(200).json({
            message: "Liste des albums récupérée avec succès.",
            data: dataAlbums
        });
        return;
    }
    catch (error) {
        res.status(500).json({ message: "Erreur interne serveur inconnue." });
        return;
    }
};

export default getMyAlbums_controller;
