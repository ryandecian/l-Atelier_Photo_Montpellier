/* Import des dépendances externes : */
import { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";

/* Import des Repositories : */
import { getOneUserById_repository } from "../../repository/user_tbl/getOneUserById.repository";
import insertOneAlbum_repository from "../../repository/album_tbl/insertOneAlbum.repository";

/* Import des Types : */
import getOneUserById_type from "../../types/user_type/getOneUserById.type";

/* Import des utils */
import toSQLDate from "../../utils/toSQLDate.utils";
import verifySynologyURL from "../../utils/verifySynologyURL.utils";

/* Création d'un unique album */
/* URI : /album */    
const postOneAlbum_controller = async (req: Request, res: Response) => {
    try {
        /* Logique métier 1 : Vérification si l'utilisateur cible existe */
        const dataUser: getOneUserById_type | null = await getOneUserById_repository(req.body.user_id);

        /* Si l'utilisateur n'existe pas dans la DB, on ne peut pas continuer. */
        if (!dataUser) { /* Si c'est = à 0, c'est que l'utilisateur n'existe pas */
            res.status(409).json({ error: "Cet utilisateur n'existe pas, veuillez en choisir un autre" });
            return;
        }

        /* Logique métier 2 : Vérification de l'url du lien */
        const lienVerifie = verifySynologyURL(req.body.lien);

        if (!lienVerifie) {
            res.status(400).json({ error: "URL Synology invalide ou non autorisée." });
            return;
        }

        /* Remplacement de l'URL dans le body */
        req.body.lien = lienVerifie;

        /* Logique métier 3 : Convertir la date au format SQL */
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

        /* Logique métier 4 : Insertion du nouvel album dans la DB */
        const insertAlbum: ResultSetHeader = await insertOneAlbum_repository(req.body);

        if (insertAlbum.affectedRows === 0) {
            res.status(400).json({ error: "Erreur lors de l'enregistrement de l'album." });
            return;
        }

        /* Logique métier 5 : Réponse de succès */
        res.status(201).json({ message: "Enregistrement accepté." });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur inconnue." });
        return;
    }
};

export default postOneAlbum_controller;
