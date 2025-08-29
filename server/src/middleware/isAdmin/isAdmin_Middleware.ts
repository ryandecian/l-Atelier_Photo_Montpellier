import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../../database/config";
import { RowDataPacket } from "mysql2";

async function isAdmin_Middleware (req: Request, res: Response, next: NextFunction) {
    const dataUser = req.body.dataUser

    if (!dataUser) {
        res.status(401).json({ message: "Utilisateur non authentifié." });
        return;
    }

    try {
          // Vérification du rôle de l'utilisateur : Admin ?
          if (dataUser.role !== "admin") {
            res.status(403).json({ message: "Accès refusé : administrateur requis" });
            return;
          }

        next();
    } 
    catch (error) {
        res.status(500).json({ message: "Erreur interne serveur." });
        return;
    }
};

export default isAdmin_Middleware;
