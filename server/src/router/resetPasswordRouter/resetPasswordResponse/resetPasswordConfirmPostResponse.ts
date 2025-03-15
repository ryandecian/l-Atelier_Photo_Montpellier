import { Request, Response } from "express";

async function resetPasswordConfirmPostResponse(req: Request, res: Response) {
    try {
        res.status(200).json({ 
            reponse: "Votre mot de passe a bien été reinitialisée",
            id: req.body.dataUser.id,
            firstname: req.body.dataUser.firstname,
            lastname: req.body.dataUser.lastname,
            email: req.body.dataUser.email,
             });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "resetPasswordConfirmPostResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/resetPasswordRouter/resetPasswordResponse/resetPasswordConfirmPostResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default resetPasswordConfirmPostResponse;
