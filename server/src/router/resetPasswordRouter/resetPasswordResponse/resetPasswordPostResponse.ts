import { Request, Response } from "express";

async function resetPasswordPostResponse(req: Request, res: Response) {
    try {
        res.status(200)
        .json({ reponse: "Un email de reinitialisation vous a été envoyé" });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "resetPasswordPostResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/resetPasswordRouter/resetPasswordResponse/resetPasswordPostResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default resetPasswordPostResponse;
