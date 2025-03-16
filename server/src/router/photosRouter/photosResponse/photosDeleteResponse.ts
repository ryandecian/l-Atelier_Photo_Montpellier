import { Request, Response } from "express";

async function photosDeleteResponse(req: Request, res: Response) {
    try {
        res.status(200).json({ reponse: "Route Delete ok : Suppression d'une photo" });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "photosDeleteResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/photosRouter/photosResponse/photosDeleteResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default photosDeleteResponse;
