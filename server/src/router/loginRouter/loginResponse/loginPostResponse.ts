import { Request, Response } from "express";

async function loginPostResponse(req: Request, res: Response) {
    try {
        res.status(200)
        .cookie("jwtToken", req.body.jwt) /* jwtToken est le nom du cookie */
        .json({
            jwt: req.body.jwt,
            id: req.body.dataUser.id,
            firstname: req.body.dataUser.firstname,
            lastname: req.body.dataUser.lastname,
            address: req.body.dataUser.address,
            email: req.body.dataUser.email,
            role: req.body.dataUser.role,
            date_save: req.body.dataUser.date_save,
        });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "loginPostResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/loginRouter/loginResponse/loginPostResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
}

export default loginPostResponse;
