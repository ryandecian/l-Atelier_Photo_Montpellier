import express, { Request, Response } from "express";

const usersController = express.Router();
const usersControllerMe = express.Router();

// Import des dépendances externes :
// import jwt from "jsonwebtoken";
import { RowDataPacket } from "mysql2";

// Import des Middlewares :
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";
import Verify_JWT_Middleware from "../middleware/JWT/Verify_JWT_Middleware";
import isAdmin from "../middleware/isAdmin/isAdmin";

// Import des Repositories :
// import verifyEmailTrueRepository from "../repository/emailRepository";

// Import des Types :
// import payloadType from "../types/payloadType";

// Import des utils
import { getAllUsersRepository } from "../repository/getUserRepository";
import { getOneUserByIdRepository } from "../repository/getUserRepository";

// URI : /api/users
usersController.get("/", 
    
    // Vérification :
    Verify_JWT_Middleware,
    isAdmin,
    async (req: Request, res: Response) => {
        try {
            // Logique métier 1 : Recuperer tous les utilisateurs
                const datasUsers: RowDataPacket[] = await getAllUsersRepository()

                if (datasUsers.length === 0) {
                    res.status(404).json({ message: "Aucun utilisateur trouvé" });
                    console.error({
                        identity: "usersController.ts",
                        type: "controller",
                        URI: "/api/users",
                        methode: "GET",
                        chemin: "/server/src/controllers/usersController.ts",
                        "❌ Nature de l'erreur": "Aucun utilisateur trouvé",
                    });
                    return;
                }

            // Logique métier 2 : Envois de la liste de tout les utilisateurs
                res.status(200).json({ data: datasUsers });
                return;
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "usersController.ts",
                type: "controller",
                URI: "/api/users",
                methode: "GET",
                chemin: "/server/src/controllers/usersController.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    }
);

export default usersController;


// URI : /api/users/me
usersControllerMe.get("/me",

    // Vérification :
    Verify_JWT_Middleware,
    async (req: Request, res: Response) => {
        try {
            // Logique métier 1 : Recuperer l'utilisateur connecté
                const userId = req.body.dataUser.id; // Récupérer l'ID de l'utilisateur à partir du token JWT
                const dataUser: RowDataPacket[] = await getOneUserByIdRepository(userId)

                if (dataUser.length === 0) {
                    res.status(404).json({ message: "Aucun utilisateur trouvé" });
                    console.error({
                        identity: "usersController.ts",
                        type: "controller",
                        URI: "/api/users/me",
                        methode: "GET",
                        chemin: "/server/src/controllers/usersController.ts",
                        "❌ Nature de l'erreur": "Aucun utilisateur trouvé",
                    });
                    return;
                }

            // Logique métier 2 : Envois des données de l'utilisateur
                res.status(200).json({ data: dataUser });
                return;
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "usersController.ts",
                type: "controller",
                URI: "/api/users/me",
                methode: "GET",
                chemin: "/server/src/controllers/usersController.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    }
);