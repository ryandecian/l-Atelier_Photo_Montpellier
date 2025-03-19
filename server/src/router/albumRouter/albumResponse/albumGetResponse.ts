import { Request, Response } from "express";

async function albumGetResponse(req: Request, res: Response) {
    console.log({test: "console.log", data: req.body.dataAlbum});
    try {
        if (req.body.dataAlbum.length === 0) {
            res.status(200).json({ reponse: "Aucun album trouvé." });
            return;
        }

        res.status(200).json({
            reponse: "Route Get ok : Récupération de tous les albums",
            dataAlbum: req.body.dataAlbum,
        });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "albumGetResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/albumRouter/albumResponse/albumGetResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default albumGetResponse;
