import { Request, Response } from "express";

async function emailPostResponse(req: Request, res: Response) {
    try {
        res.status(200).json({ 
            reponse: "Votre email a bien été envoyé",
            email: req.body,
             });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "emailPostResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/emailRouter/emailResponse/emailPostResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default emailPostResponse;