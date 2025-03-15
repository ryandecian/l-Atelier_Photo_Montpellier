import { Request, Response } from "express";

async function albumGetResponse(req: Request, res: Response) {
    try {
        res.status(200).json({
            reponse: "Route Get ok : Récupération de tous les albums",
        });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "albumResponse.ts",
                type: "route album",
                chemin: "/server/src/router/albumRouter/albumResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default albumGetResponse;
