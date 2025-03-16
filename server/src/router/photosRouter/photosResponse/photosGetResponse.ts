import { Request, Response } from "express";

async function photosGetResponse(req: Request, res: Response) {
    try {
        res.status(200).json({ reponse: "Route Get ok : Récupération de toutes les photos" });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "photosGetResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/photosRouter/photosResponse/photosGetResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default photosGetResponse;