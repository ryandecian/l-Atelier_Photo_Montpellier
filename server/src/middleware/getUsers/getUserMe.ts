import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../../database/config";
import { RowDataPacket } from "mysql2";

async function getUserMe(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = (req as any).user?.id;

        const [dataUser] = await usePoolConnection.query<RowDataPacket[]>(
            "SELECT id, firstname, lastname, email, role, date_save FROM user WHERE id = ?",
            [userId]
        );

        // Vérifie si l'utilisateur existe dans la DB avec l'id du token
        if (!dataUser || dataUser.length === 0) {
            res.status(404).json({ message: "Utilisateur introuvable" });
            console.error({
                identity: "getUserMe.ts",
                type: "middleware",
                chemin: "/server/src/middleware/getUsers/getUserMe.ts",
                "❌ Nature de l'erreur": "L'utilisateur n'existe pas dans la DB, impossible de continuer.",
            });
            return;
        }

        req.body.dataUser = dataUser[0];
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error({
            identity: "getUserMe.ts",
            type: "middleware",
            chemin: "/server/src/middleware/getUsers/getUserMe.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
}

export default getUserMe;
