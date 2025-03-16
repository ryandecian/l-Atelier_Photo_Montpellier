import { Request, Response } from "express";

async function facturesGetResponse(req: Request, res: Response) {
    try {
        res.status(200).json({
            reponse: "Route Get ok : Récupération des factures",
        });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "facturesGetResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/facturesRouter/facturesResponse/facturesGetResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default facturesGetResponse;
