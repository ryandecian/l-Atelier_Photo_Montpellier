import express from "express";

const usersRouter = express.Router();

// Import des Middlewares :
import isAdmin from "../../middleware/isAdmin/isAdmin";
import Verify_JWT_Middleware from "../../middleware/JWT/Verify_JWT_Middleware";
import usePoolConnection from "../../database/config";
import { RowDataPacket } from "mysql2";
import getAllUsers from "../../middleware/getUsers/getAllUser";

// Liste de tous les utilisateurs (admin seulement)
// URI : /api/user
usersRouter.get("/", 
    Verify_JWT_Middleware,
    isAdmin,
    getAllUsers,
    (req, res) => {
        try {
            // Envois de la liste de tout les utilisateurs
            res.status(200).json({ data: req.body.dataUser });
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "usersRouter.ts",
                type: "router",
                chemin: "/server/src/router/usersRouter/usersRouter.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    }
);

usersRouter.get("/user/me",);

export default usersRouter;