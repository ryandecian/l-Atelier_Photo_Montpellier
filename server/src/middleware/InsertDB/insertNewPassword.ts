import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../../database/config";
import { ResultSetHeader } from "mysql2";

async function InsertNewPassword(req: Request, res: Response, next: NextFunction) {
    try {
        // ✅ Envois des informations dans la DB
        const [results] = await usePoolConnection.query<ResultSetHeader>(
            "UPDATE user SET password = ? WHERE id = ?", [req.body.password, req.body.dataUser.id]
        );
    
        // ✅ Vérification : Si la DB ne rejete pas les données
        if (results.affectedRows === 0) {
            res.status(400).json({ reponse: "La requête a été rejeté par la base de donnée"});
            console.error(
                {
                    identity: "InsertNewPassword.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/InsertDB/InsertNewPassword.ts",
                    "❌ Nature de l'erreur": "Rejet des infos à enregistrer par la DB SQL",
                    cause1 : "l'id utilisateur n'a pas été trouvé dans dataUser qui est mis à disposition par Verify_Crypto_Middleware.ts", 
                    cause2: "L'Erreur viens forcément de Verify_Crypto_Middleware.ts qui gère le token",
                },
            );
            return;
        };

        next()
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "InsertNewPassword.ts",
                type: "middleware",
                chemin: "/server/src/middleware/InsertDB/InsertNewPassword.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
    }
};

export default InsertNewPassword;
