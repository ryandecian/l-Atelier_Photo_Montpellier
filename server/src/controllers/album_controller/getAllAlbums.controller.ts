/* Import des dépendances externes : */
import { Request, Response } from "express";

/* Import des Repositories : */
import { getAllAlbums_repository } from "../../repository/album_tbl/getAllAlbums.repository";
import { getVariousUsersById_repository } from "../../repository/user_tbl/getVariousUsersById.repository";

/* Import des Types : */
import getAllAlbums_type from "../../types/album_type/getAllAlbums.type";
import getVariousUsersById_type from "../../types/user_type/getVariousUsersById.type";

/* Récupération de tous les albums en tant qu'admin */
/* URI : /album */
const getAllAlbums_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Récupérer tous les albums */
            const albums: getAllAlbums_type[] = await getAllAlbums_repository();

            if (albums.length === 0) {
                res.status(404).json({ error: "Aucun album trouvé" });
                console.info("Aucun album trouvé");
                return;
            }

        /* Logique métier 2 : Récupérer les IDs utilisateurs liés aux albums */
            const userIds: number[] = albums.map(album => album.user_id);

        /* Logique métier 3 : Récupérer les données des utilisateurs associés */
            const dataUsers: getVariousUsersById_type[] = await getVariousUsersById_repository(userIds);

            if (dataUsers.length === 0) {
                res.status(404).json({ error: "Aucun utilisateur associé aux albums trouvé" });
                return;
            }

        /* Logique métier 4 : Associer les utilisateurs aux albums et aplatir les données */
            const dataAlbums = albums.map(album => {
                const user = dataUsers.find(user => user.id === album.user_id);
                return {
                    id_album: album.id,
                    id_user: album.user_id,
                    firstname: user?.firstname ?? "",
                    lastname: user?.lastname ?? "",
                    email: user?.email ?? "",
                    date: new Date(album.date).toLocaleDateString("fr-FR") /* "12/05/2025" */
                };
            });

        /* Logique métier 5 : Retourner les datas prêtes pour le front */
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

export default getAllAlbums_controller;
