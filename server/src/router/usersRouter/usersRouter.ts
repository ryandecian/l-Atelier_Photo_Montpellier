import express from "express";

const usersRouter = express.Router();

// Import des Middlewares :
import isAdmin from "../../middleware/isAdmin/isAdmin";
import Verify_JWT_Middleware from "../../middleware/JWT/Verify_JWT_Middleware";
import usePoolConnection from "../../database/config";
import { RowDataPacket } from "mysql2";
import getAllUsers from "../../middleware/getUsers/getAllUser";
import getUserMe from "../../middleware/getUsers/getUserMe";
import putUserMe from "../../middleware/putUsers/putUserMe";

// Liste de tous les utilisateurs (admin seulement)
// URI : /api/users
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

usersRouter.get("/me",
    Verify_JWT_Middleware,
    getUserMe,
    (req, res) => {
        try {
            // Envois des données de l'utilisateur
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

// Modification de ses propre données
// URI : /api/users/me
usersRouter.put("/me",
    Verify_JWT_Middleware,
    putUserMe,
    (req, res) => {
        try {
            // Envois de la confirmation de la modification
            res.status(200).json({ message: "Modification réussie" });
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
)

// Modification des données d'un utilisateur (admin seulement)
// URI : /api/users/:id
usersRouter.put("/:id",
    Verify_JWT_Middleware,
    isAdmin,
    async (req, res) => {
        try {
            const userId = req.params.id;

            const [dataUser] = await usePoolConnection.query(
                "UPDATE user SET firstname = ?, lastname = ?, email = ?, address = ? WHERE id = ?",
                [req.body.firstname, req.body.lastname, req.body.email, req.body.address, userId]
            );

            // Vérification : au moins une ligne modifiée ?
            if ((dataUser as any).affectedRows === 0) {
                res.status(404).json({ message: "Échec de la modification" });
                console.error({
                    identity: "usersRouter.ts",
                    type: "router",
                    chemin: "/server/src/router/usersRouter/usersRouter.ts",
                    "❌ Nature de l'erreur": "Échec de la modification des données de l'utilisateur.",
                });
                return;
            }

            // Envois de la confirmation de la modification
            res.status(200).json({ message: "Modification réussie" });
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

// Suppression d'un utilisateur (admin seulement)
// URI : /api/users/:id
usersRouter.delete("/:id",
    Verify_JWT_Middleware,
    isAdmin,
    async (req, res) => {
        try {
            const userId = req.params.id;

            const [dataUser] = await usePoolConnection.query(
                "DELETE FROM user WHERE id = ?",
                [userId]
            );

            // Vérification : au moins une ligne supprimée ?
            if ((dataUser as any).affectedRows === 0) {
                res.status(404).json({ message: "Échec de la suppression" });
                console.error({
                    identity: "usersRouter.ts",
                    type: "router",
                    chemin: "/server/src/router/usersRouter/usersRouter.ts",
                    "❌ Nature de l'erreur": "Échec de la suppression de l'utilisateur.",
                });
                return;
            }

            // Envois de la confirmation de la suppression
            res.status(200).json({ message: "Suppression réussie" });
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

export default usersRouter;
