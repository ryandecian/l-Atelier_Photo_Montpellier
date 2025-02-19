import { Request, Response, NextFunction } from "express";
import crypto from 'crypto';
import usePoolConnection from "../database/config";
import { RowDataPacket } from "mysql2";


async function Verify_Crypto_Middleware(req: Request, res: Response, next: NextFunction) {
    try {
        // Vérification supplémentaire, les clé token et newPassword sont-elles présentes ?
        if (!req.body.token || !req.body.newPassword) {
            res.status(400).json({ error: "Requête invalide." });
            console.error(
                {
                    identity: "Verify_Crypto_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/Verify_Crypto_Middleware.ts",
                    "❌ Nature de l'erreur": "Requête invalide.",
                    cause1: "Les champs token et ou newPassword sont absents.",
                });
            return;
        };

        // Requête SQL pour aller chercher LE token reçu dans la DB
        const [dataToken] = await usePoolConnection.query<RowDataPacket[]>(
            "SELECT * FROM reset_password WHERE token = ?", [req.body.token]
        );

        // Vérification si le token est valide
        // Si la DB nous renvois quelque chose, c'est que le token est valide et existe
        if (!Array.isArray(dataToken) || dataToken.length === 0) {
            res.status(403).json({ error: "Token invalide." });
            console.error(
                {
                    identity: "Verify_Crypto_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/Verify_Crypto_Middleware.ts",
                    "❌ Nature de l'erreur": "Token invalide.",
                    cause1: "Le token n'existe pas dans la DB.",
                    explication1: "La requête SQL n'a pas retourné de résultat.",
                    explication2: "Le token n'existe donc pas dans la DB.",
                    explication3: "On n'a pas besoin de vérifier la date d'expiration si le token n'existe pas.",
                });
            return;
        };

        // Vérification si le token est expiré
        if (new Date(dataToken[0].expires_at) < new Date()) {
            // Le token est expiré, on le supprime de la DB
            const [deleteToken] = await usePoolConnection.query<RowDataPacket[]>(
                "DELETE FROM reset_password WHERE token = ?", [req.body.token]
            );

            if (deleteToken.length === 0) {
                res.status(500).json({ error: "Erreur interne serveur + Token expiré. Veuillez refaire la demande." });
                console.error(
                    {
                        identity: "Verify_Crypto_Middleware.ts",
                        type: "middleware",
                        chemin: "/server/src/middleware/Verify_Crypto_Middleware.ts",
                        "❌ Nature de l'erreur": "Erreur interne serveur.",
                        cause1: "La requête SQL DELETE n'a pas fonctionné.",
                        explication1: "La date d'expiration du token est inférieure à la date actuelle.",
                        explication2: "Le token n'est plus valide.",
                        explication3: "Le server a essayé de supprimer le token de la DB et cela a échoué.",
                        explication4: "Le token n'a donc pas été supprimé de la DB.",
                    }
                );
                return;
            }

            res.status(403).json({ message: "Token expiré. Veuillez refaire la demande." });
            console.error(
                {
                    identity: "Verify_Crypto_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/Verify_Crypto_Middleware.ts",
                    "❌ Nature de l'erreur": "Token expiré.",
                    cause1: "Le token est expiré.",
                    explication1: "La date d'expiration du token est inférieure à la date actuelle.",
                    explication2: "Le token n'est plus valide.",
                    action: "Le server va donc supprimer le token de la DB.",
                });
            return;
        }

        // Préparation du passwort à être transmis au middleware Hash_Password.ts
        req.body.password = req.body.newPassword;

        // Préparation des données à envoyer au middleware Send_Email.ts
        const [dataUser] = await usePoolConnection.query<RowDataPacket[]>(
            "SELECT * FROM user WHERE id = ?", [dataToken[0].user_id]
        );
        // Mise a disposition des données de l'utilisateur
        req.body.dataUser = dataUser[0];
        
        next();
    }
    catch (error) {
        console.error(
            {
                identity: "Verify_Crypto_Middleware.ts",
                type: "middleware",
                chemin: "/server/src/middleware/Verify_Crypto_Middleware.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            }
        )
    }
};

export default Verify_Crypto_Middleware;
