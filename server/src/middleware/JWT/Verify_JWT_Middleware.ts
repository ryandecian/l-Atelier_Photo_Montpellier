import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import payloadType from "../../types/payloadType";

const SECRET_KEY_TOKEN_SERVER = process.env.SECRET_KEY_TOKEN_SERVER;

function Verify_JWT_Middleware(req: Request, res: Response, next: NextFunction) {
  try {
    if (!SECRET_KEY_TOKEN_SERVER) {
      res.status(500).json({ error: "Erreur interne serveur." });
      console.error({
        identity: "Verify_JWT_Middleware.ts",
        type: "Middleware",
        chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
        "❌ Nature de l'erreur": "SECRET_KEY_TOKEN_SERVER est absent dans .env !",
      });
      return;
    }

    // ✅ Récupération du token depuis le cookie HTTP-only
    const token = req.cookies?.jwtTokenServerLAPM;

    if (!token) {
      res.status(401).json({ error: "Accès refusé. Aucun token fourni." });
      console.warn({
        identity: "Verify_JWT_Middleware.ts",
        type: "Middleware",
        chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
        "⚠️ Alerte !": "Tentative d'accès sans token JWT (cookie manquant).",
      });
      return;
    }

    // Vérification du token
    try {
        const payload: payloadType = jwt.verify(token, SECRET_KEY_TOKEN_SERVER) as payloadType;
        // Stocke les infos du token dans req.body.dataUser
        req.body.dataUser = payload;
    }
    // Renvois une erreur 403 et supprime le cookie si le token est invalide ou expiré
    catch (error) {
        res.status(403)
        .clearCookie("jwtTokenServerLAPM", {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
        })        
        .json({ message: "Token invalide ou expiré." });
        console.warn({
            identity: "Verify_JWT_Middleware.ts",
            type: "Middleware",
            chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
            "⚠️ Alerte !": "Tentative d'accès avec un token invalide ou expiré.",
          });
          return;
    }
    next();
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
  return;
}

export default Verify_JWT_Middleware;
