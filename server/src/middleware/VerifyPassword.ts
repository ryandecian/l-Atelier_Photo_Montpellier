import * as argon2 from "argon2";
import usePoolConnection from "../database/config";
import { Request, Response, NextFunction } from "express";
import { RowDataPacket } from "mysql2";

async function VerifyPassword( req: Request, res: Response, next: NextFunction ) {
    try {
        /**
         * Comparaison des mots de passe : 
         * Mot de passe envoyé par le client
         * Mot de passe récupéré en DB par le middleware VerifyEmailTrue.ts
         */
        if (await argon2.verify(req.body.dataUser.password, req.body.password)) {
            next()
        }
        else {
            res.status(401).json({ reponse: "Email ou mot de passe incorrect" });
            console.error(
                {
                    identity: "VerifyPassword.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/VerifyPassword.ts",
                    "❌ Nature de l'erreur": "Le mot de passe reçu est différent de la DB, accès interdit",
                    analyse: "L'email existe car déjà vérifié par le middleware VerifyEmailTrue",
                    cause1: "Le middleware VerifyEmailTrue n'a pas mis à disposition les dataUser récupéré en DB"
                },
            );
            return;
        }
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "VerifyPassword.ts",
                type: "middleware",
                chemin: "/server/src/middleware/VerifyPassword.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
    }
}

export default VerifyPassword;
