import { Request, Response, NextFunction } from "express";
import usePoolConnection from "../database/config";
import { ResultSetHeader } from "mysql2";

async function InsertUser(req: Request, res: Response, next: NextFunction) {
    try {
        // ✅ Envois des informations dans la DB
        const [results] = await usePoolConnection.query<ResultSetHeader>(
            "INSERT INTO user (firstname, lastname, address, email, password) VALUES (?, ?, ?, ?, ?)",
            [req.body.firstname, req.body.lastname, req.body.address, req.body.email, req.body.password],
        );
    
        // ✅ Vérification : Si la DB ne rejete pas les données
        if (results.affectedRows === 0) {
            res.status(400).json({ reponse: "La requête a été rejeté par la base de donnée"});
            console.error(
                {
                    identity: "InsertUser.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/InsertUser.ts",
                    "❌ Nature de l'erreur": "Rejet des infos à enregistrer par la DB SQL",
                    analyse: "A ce stade, les Keys obligatoire demandé par la table son ok",
                    cause1 : "Les paramètres de la table ont changé",
                    cause2: "Le middleware VerifyKeys.ts à été modifié ou mal paramétré",
                },
            );
            return;
        };

        // ✅ Stocke l’ID du nouvel utilisateur pour d'autres traitements si besoin
        req.body.id = results.insertId;
        next()
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "InsertUser.ts",
                type: "middleware",
                chemin: "/server/src/middleware/InsertUser.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
    }
};

export default InsertUser;
