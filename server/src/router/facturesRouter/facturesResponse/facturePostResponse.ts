import { Request, Response } from "express";

async function facturePostResponse(req: Request, res: Response) {
    try {
        res.status(200).json({
            reponse: "Route Post ok : Création facture",
        });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "facturePostResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/facturesRouter/facturesResponse/facturePostResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default facturePostResponse;
