import { Request, Response } from "express";

async function facturesDeleteResponse(req: Request, res: Response) {
    try {
        res.status(200).json({
            reponse: "Route Delete ok : Suppression facture",
        });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "facturesDeleteResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/facturesRouter/facturesResponse/facturesDeleteResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default facturesDeleteResponse;
