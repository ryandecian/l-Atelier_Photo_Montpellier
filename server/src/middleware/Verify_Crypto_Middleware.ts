import { Request, Response, NextFunction } from "express";
import crypto from 'crypto';
import usePoolConnection from "../database/config";


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

        const token = req.body.token;

        // Vérification si le token est valide
        const [dataToken] = await usePoolConnection.query(
            "SELECT user_id, expires_at FROM reset_password WHERE token = ?", req.body.token
        );
    }
    catch (error) {}
};

export default Verify_Crypto_Middleware;
