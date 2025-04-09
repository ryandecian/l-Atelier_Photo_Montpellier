import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import payloadType from "../../types/payloadType";

const SECRET_KEY_TOKEN_SERVER = process.env.SECRET_KEY_TOKEN_SERVER;

async function Verify_JWT_Middleware(req: Request, res: Response, next: NextFunction) {
  try {
    if (!SECRET_KEY_TOKEN_SERVER) {
      console.error({
        identity: "Verify_JWT_Middleware.ts",
        type: "Middleware",
        chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
        "❌ Nature de l'erreur": "SECRET_KEY_TOKEN_SERVER est absent dans .env !",
      });
      return res.status(500).json({ error: "Erreur interne serveur." });
    }

    // ✅ Récupération du token depuis le cookie HTTP-only
    const token = req.cookies?.jwtTokenServerLAPM;

    if (!token) {
      console.warn({
        identity: "Verify_JWT_Middleware.ts",
        type: "Middleware",
        chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
        "⚠️ Alerte !": "Tentative d'accès sans token JWT (cookie manquant).",
      });
      return res.status(401).json({ error: "Accès refusé. Aucun token fourni." });
    }

    // Vérification du token
    try {
        const payload = jwt.verify(token, SECRET_KEY_TOKEN_SERVER) as payloadType;
        // Stocke les infos du token dans req.dataUser
        (req as any).dataUser = payload;
        next();
    }
    catch (error) {
        res.status(403).json({ error: "Token invalide ou expiré." });
        console.warn({
            identity: "Verify_JWT_Middleware.ts",
            type: "Middleware",
            chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
            "⚠️ Alerte !": "Tentative d'accès avec un token invalide ou expiré.",
          });
          return;
    }
  } 
  catch (error) {
    console.error({
      identity: "Verify_JWT_Middleware.ts",
      type: "middleware",
      chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
      "❌ Nature de l'erreur": "Erreur non gérée dans le middleware !",
      details: error,
    });
    res.status(500).json({ error: "Erreur interne serveur." });
  }
}

export default Verify_JWT_Middleware;
