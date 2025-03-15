import { Request, Response } from "express";

async function albumDeleteResponse(req: Request, res: Response) {
    try {
        res.status(200).json({
            reponse: "Route Delete ok : Suppression album",
        });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "albumDeleteResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/albumRouter/albumResponse/albumDeleteResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default albumDeleteResponse;
