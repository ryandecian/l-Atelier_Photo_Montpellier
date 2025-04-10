import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../../database/config";
import { RowDataPacket } from "mysql2";

async function isAdmin (req: Request, res: Response, next: NextFunction) {
    const dataUser = req.body.dataUser

    if (!dataUser) {
        res.status(401).json({ message: "Utilisateur non authentifié." });
        console.error({
            identity: "isAdmin.ts",
            type: "middleware",
            chemin: "/server/src/middleware/isAdmin/isAdmin.ts",
            "❌ Nature de l'erreur": "Utilisateur non authentifié.",
        });
        return;
    }

    try {
          // Vérification du rôle de l'utilisateur : Admin ?
          if (dataUser.role !== "admin") {
            res.status(403).json({ message: "Accès refusé : administrateur requis" });
            console.error({
                identity: "isAdmin.ts",
                type: "middleware",
                chemin: "/server/src/middleware/isAdmin/isAdmin.ts",
                "❌ Nature de l'erreur": "L'utilisateur n'est pas administrateur.",
            });
            return;
          }

        next();
    } 
    catch (error) {
        res.status(500).json({ message: "Erreur interne serveur." });
        console.error({
            identity: "isAdmin.ts",
            type: "middleware",
            chemin: "/server/src/middleware/isAdmin/isAdmin.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
};

export default isAdmin;
