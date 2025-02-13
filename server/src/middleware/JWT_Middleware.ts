import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY_TOKEN

function JWT_Middleware(req: Request, res: Response, next: NextFunction) {
    try {
        if (!SECRET_KEY) {
            res.status(500).json({ error: "Erreur interne serveur." });
                console.error(
                    {
                        identity: "JWT_Middleware.ts",
                        type: "middleware",
                        chemin: "/server/src/middleware/JWT_Middleware.ts",
                        "❌ Nature de l'erreur": "SECRET_KEY_TOKEN est absent dans .env !",
                    },
                );
                return;
        }
        if (!req.body.dataUser) {
            res.status(500).json({ error: "Erreur interne serveur." });
                console.error(
                    {
                        identity: "JWT_Middleware.ts",
                        type: "middleware",
                        chemin: "/server/src/middleware/JWT_Middleware.ts",
                        "❌ Nature de l'erreur": "Le middleware VerifyEmailTrue.ts n'a pas mis a disposition dataUser.",
                    },
                );
                return;
        }
        const payload = {
            id: req.body.dataUser.id,
            email: req.body.dataUser.email,
        }
        const token = jwt.sign(payload, SECRET_KEY, {expiresIn: 60 * 60}); //60s * 60 = 1h
        req.body.jwt = token;
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "JWT_Middleware.ts",
                type: "middleware",
                chemin: "/server/src/middleware/JWT_Middleware.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
    }
}

export default JWT_Middleware;