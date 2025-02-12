import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../database/config";
import { RowDataPacket } from "mysql2";

// Objectif, vérifier que l'email reçu pour l'enregistrement n'est pas utilisé.

async function VerifyEmailTrue(req:Request, res: Response, next: NextFunction) {
    try {
        // ✅ Vérification : l'email reçu existe t-il dans la DB ?
        const [dataUser] = await usePoolConnection.query<RowDataPacket[]>(
            "SELECT * FROM user WHERE email= ?",
            [req.body.email]
        )

        // ✅ Si l'email n'existe pas, sa dégage, on arrête l'exécution
        if (dataUser.length === 0) {
            res.status(404).json({ reponse: "Email ou mot de passe incorrect" });
            console.error(
                {
                    identity: "VerifyEmailTrue.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/VerifyEmailTrue.ts",
                    "❌ Nature de l'erreur": "L'email n'existe pas dans la DB, impossible de continuer.",
                },
            );
            return;
        }


        /**
         * Mise a disposition de données
         */
        req.body.dataUser = dataUser[0];
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "VerifyEmailTrue.ts",
                type: "middleware",
                chemin: "/server/src/middleware/VerifyEmailTrue.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
    }
}

export default VerifyEmailTrue;
