import jwt, { VerifyErrors, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY_TOKEN;

async function Verify_JWT_Middleware(req: Request, res: Response, next: NextFunction) {
    try {
        if (!SECRET_KEY) {
            console.error({
                identity: "Verify_JWT_Middleware.ts",
                type: "middleware",
                chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
                "❌ Nature de l'erreur": "SECRET_KEY_TOKEN est absent dans .env !",
            });
            res.status(500).json({ error: "Erreur interne serveur." });
            return;
        }

        // ✅ Récupération du token depuis les cookies ou l’Authorization header
        const token = req.cookies?.jwtToken || req.headers.authorization?.split(" ")[1];

        if (!token) {
            res.status(401).json({ error: "Accès refusé. Aucun token fourni." });
            console.warn({
                identity: "Verify_JWT_Middleware.ts",
                type: "sécurité",
                chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
                "⚠️ Alerte !": "Tentative d'accès sans token JWT.",
            });
            return;
        }

        // ✅ Vérification et déchiffrement du token
        jwt.verify(token, SECRET_KEY, (err: VerifyErrors | null, decoded: string | JwtPayload | undefined) => {
            if (err) {
                res.status(403).json({ error: "Token invalide ou expiré." });
                console.warn({
                    identity: "Verify_JWT_Middleware.ts",
                    type: "sécurité",
                    chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
                    "⚠️ Alerte !": "Tentative d'accès avec un token invalide ou expiré.",
                    details: err,
                });
                return;
            }

            // ✅ Stocke les infos du token dans req.user
            req.body.user = decoded;
            (req as any).user = decoded;


            next(); 
        });
    } catch (error) {
        console.error({
            identity: "Verify_JWT_Middleware.ts",
            type: "middleware",
            chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        res.status(500).json({ error: "Erreur interne serveur." });
    }
}

export default Verify_JWT_Middleware;
