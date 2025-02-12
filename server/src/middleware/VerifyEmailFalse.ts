import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../database/config";
import { RowDataPacket } from "mysql2";

// Objectif, vérifier que l'email reçu pour l'enregistrement n'est pas utilisé.

async function VerifyEmailFalse(req:Request, res: Response, next: NextFunction) {
    try {
        // ✅ Vérification : l'email reçu existe t-il dans la DB ?
        const [dataUser] = await usePoolConnection.query<RowDataPacket[]>(
            "SELECT * FROM user WHERE email= ?",
            [req.body.email]
        )

        // ✅ Si l'email existe sa dégage, on arrête l'exécution
        if (dataUser.length > 0) {
            res.status(409).json({ reponse: "Cet email est déjà utilisé. Veuillez en choisir un autre." });
            console.error(
                {
                    identity: "VerifyEmailFalse.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/VerifyEmailFalse.ts",
                    "❌ Nature de l'erreur": "L'email existe déjà dans la DB, interdiction de le réutiliser.",
                },
            );
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "VerifyEmailFalse.ts",
                type: "middleware",
                chemin: "/server/src/middleware/VerifyEmailFalse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
    }
}

export default VerifyEmailFalse;
