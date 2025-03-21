import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../../database/config";
import { RowDataPacket } from "mysql2";

async function isAdmin (req: Request, res: Response, next: NextFunction) {
    const userId = (req as any).user?.id;

    if (!userId) {
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
        const [userAdmin] = await usePoolConnection.query<RowDataPacket[]>(
            "SELECT role FROM user WHERE id = ?",
            [userId]
        );

        // Si l'utilisateur n'existe pas dans la DB on stop l'exécution
        if (!userAdmin || (userAdmin as any[]).length === 0) {
            res.status(404).json({ message: "Utilisateur introuvable" });
            console.error({
                identity: "isAdmin.ts",
                type: "middleware",
                chemin: "/server/src/middleware/isAdmin/isAdmin.ts",
                "❌ Nature de l'erreur": "L'utilisateur n'existe pas dans la DB, impossible de continuer.",
            });
            return;
          }

          // Récupération des données
          const user = (userAdmin as any[])[0];
          
          // Vérification du rôle de l'utilisateur : Admin ?
          if (user.role !== "admin") {
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
        res.status(500).json({ error: "Erreur interne serveur." });
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
