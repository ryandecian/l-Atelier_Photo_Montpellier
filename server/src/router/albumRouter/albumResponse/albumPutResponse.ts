import { Request, Response } from "express";

async function albumPutResponse(req: Request, res: Response) {
    try {
        res.status(200).json({
            reponse: "Route Put ok : Modification album",
        });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "albumPutResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/albumRouter/albumResponse/albumPutResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default albumPutResponse;
