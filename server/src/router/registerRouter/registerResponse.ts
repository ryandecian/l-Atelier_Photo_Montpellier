import { Request, Response } from "express";

async function loginResponse(req: Request, res: Response) {
    try {
        // ✅ Réponse de succès
        res.status(201).json(
            {
                reponse: "Enregistrement accepté",
                id: req.body.id, 
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
            }
        );
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "loginResponse.ts",
                type: "route login",
                chemin: "/server/src/router/loginRouter/loginResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default loginResponse;
