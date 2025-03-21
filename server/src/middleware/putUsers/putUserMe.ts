import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../../database/config";
import { RowDataPacket } from "mysql2";

async function putUserMe(req: Request, res: Response, next: NextFunction) {
    try {
        // id de l'utilisateur récupéré du token
        const userId = (req as any).user?.id;

        const [updateDataUser] = await usePoolConnection.query(
            "UPDATE user SET firstname = ?, lastname = ?, email = ?, address = ? WHERE id = ?",
            [req.body.firstname, req.body.lastname, req.body.email, req.body.address, userId]
        );

        // Vérification : au moins une ligne modifiée ?
        if ((updateDataUser as any).affectedRows === 0) {
            res.status(404).json({ message: "Échec de la modification" });
            console.error({
                identity: "putUserMe.ts",
                type: "middleware",
                chemin: "/server/src/middleware/putUsers/putUserMe.ts",
                "❌ Nature de l'erreur": "Échec de la modification des données de l'utilisateur.",
            });
            return;
        }

        // Récupération des données de l'utilisateur modifié
        const [dataUser] = await usePoolConnection.query<RowDataPacket[]>(
            "SELECT id, firstname, lastname, address, email, role, date_save FROM user WHERE id = ?",
            [userId]
        );

        req.body.dataUser = dataUser[0];
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error({
            identity: "putUserMe.ts",
            type: "middleware",
            chemin: "/server/src/middleware/putUsers/putUserMe.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
}

export default putUserMe;
