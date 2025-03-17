import { Request, Response } from "express";
import usePoolConnection from "../../database/config";
import { RowDataPacket } from "mysql2";

// Objectif : Effectuer la requete SQL pour récupérer les albums
// Attention, si la requete ne renvoie pas de données, le tableau sera vide.
// Ce middleware ne renverra pas d'erreur si aucun album n'est trouvé.
// C'est le middleware albumGetResponse qui renverra une réponse adaptée.

async function VerifyAlbum(req: Request, res: Response, next: Function) {
    try {
        const [dataAlbum] = await usePoolConnection.query<RowDataPacket[]>(
            "SELECT * FROM album WHERE id = 2",
        )

        /**
         * Mise a disposition de données
         */
        req.body.dataAlbum = dataAlbum;
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error({
            identity: "VerifyAlbum.ts",
            type: "middleware",
            chemin: "/server/src/middleware/VerifyAlbum/VerifyAlbum.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
    }
}

export default VerifyAlbum;
