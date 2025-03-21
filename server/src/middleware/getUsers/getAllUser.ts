import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../../database/config";
import { RowDataPacket } from "mysql2";

async function getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const [users] = await usePoolConnection.query<RowDataPacket[]>(
            "SELECT id, firstname, lastname, address, email, role, date_save FROM user"
        );
        req.body.dataUser = users;
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error({
            identity: "getAllUsers.ts",
            type: "middleware",
            chemin: "/server/src/middleware/getUsers/getAllUsers.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
}
export default getAllUsers;
