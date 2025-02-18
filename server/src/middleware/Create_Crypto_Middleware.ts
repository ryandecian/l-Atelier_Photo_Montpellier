import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import usePoolConnection from '../database/config';
import { ResultSetHeader } from 'mysql2';

async function Create_Crypto_Middleware(req: Request, res: Response, next: NextFunction) {
    try {
        const user = req.body.email as { id: number };
        const userId = user.id;

        // Générer un token sécurisé
        const token = crypto.randomBytes(32).toString("hex");
        const expiresAt = new Date(Date.now() + 3600000); // Expiration dans 1h

        const [results] = await usePoolConnection.query<ResultSetHeader>(
            "INSERT INTO reset_password (user_id, token, expires_at) VALUES (?, ?, ?)",
            [userId, token, expiresAt]
        );
        if (results.affectedRows === 0) {
            res.status(400).json({ reponse: "La requête a été rejeté par la base de donnée"});
            console.error(
                {
                    identity: "Create_Crypto_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/Create_Crypto_Middleware.ts",
                    "❌ Nature de l'erreur": "Rejet des infos à enregistrer par la DB SQL",
                    analyse: "A ce stade, les Keys obligatoire demandé par la table son ok",
                    cause1 : "Les paramètres de la table ont changé",
                    cause2: "Le middleware VerifyKeys.ts à été modifié ou mal paramétré",
                },
            );
            return;
        };
    }
    catch (error) {
        console.error({
            identity: "Create_Crypto_Middleware.ts",
            type: "middleware",
            chemin: "/server/src/middleware/Create_Crypto_Middleware.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        res.status(500).json({ error: "Erreur interne server." });
    }
}