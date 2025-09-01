import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import payloadJwtTokenServerLAPM_type from "../../types/payload_JWT_type/payloadJwtTokenServerLAPM.type";

const SECRET_KEY_TOKEN_API_SERVER = process.env.SECRET_KEY_TOKEN_API_SERVER;

function Verify_JWT_Middleware(req: Request, res: Response, next: NextFunction) {
    try {
        if (!SECRET_KEY_TOKEN_API_SERVER) {
            res.status(500).json({ error: "Erreur interne serveur." });
            return;
        }

        /* Récupération du token depuis le cookie HTTP-only */
        const token = req.cookies?.jwtTokenServerLAPM;

        if (!token) {
            res.status(401).json({ error: "Accès refusé. Aucun token fourni." });
            return;
        }

        /* Vérification du token */
        try {
            const payload: payloadJwtTokenServerLAPM_type = jwt.verify(
                token,
                SECRET_KEY_TOKEN_API_SERVER
            ) as payloadJwtTokenServerLAPM_type;

            /* Stockage des infos du token dans req.body.dataUser */
            req.body.dataUser = payload;
        }
        /* Renvoi d'une erreur 403 et suppression du cookie si le token est invalide ou expiré */
        catch (error) {
            res.status(403)
                .clearCookie("jwtTokenServerLAPM", {
                    httpOnly: true,
                    /* secure: true, uniquement en production */
                    sameSite: "lax",
                    path: "/",
                })
                .json({ message: "Token invalide ou expiré." });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
    }
    return;
}

export default Verify_JWT_Middleware;
