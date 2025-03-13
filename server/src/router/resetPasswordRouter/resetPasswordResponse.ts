import { Request, Response } from "express";

async function resetPasswordResponse(req: Request, res: Response) {
    try {
        res.status(200)
        .json({ reponse: "Un email de reinitialisation vous a été envoyé" });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "resetPasswordResponse.ts",
                type: "route reset-password",
                chemin: "/server/src/router/resetPasswordRouter/resetPasswordResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default resetPasswordResponse;
