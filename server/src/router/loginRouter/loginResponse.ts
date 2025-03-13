import { Request, Response } from "express";

async function loginResponse(req: Request, res: Response) {
    try {
        res.status(200)
        .cookie("jwtToken", req.body.jwt) /* jwtToken est le nom du cookie */
        .json({
            id: req.body.dataUser.id,
            firstname: req.body.dataUser.firstname,
            lastname: req.body.dataUser.lastname,
            address: req.body.dataUser.address,
            email: req.body.dataUser.email,
        });
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
