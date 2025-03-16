import { Request, Response } from "express";

async function photosPostResponse(req: Request, res: Response) {
    try {
        res.status(200).json({ reponse: "Route Post ok : Création d'une photo" });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "photosPostResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/photosRouter/photosResponse/photosPostResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default photosPostResponse;
