import express, { Request, Response } from "express";

const usersController = express.Router();

// Import des dépendances externes :
// import jwt from "jsonwebtoken";
import { ResultSetHeader, RowDataPacket } from "mysql2";

// Import des Middlewares :
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";
import Verify_JWT_Middleware from "../middleware/JWT/Verify_JWT_Middleware";
import isAdmin from "../middleware/isAdmin/isAdmin";

// Import des Repositories :
import { getAllUsersRepository } from "../repository/getUserRepository";
import { getOneUserByIdRepository } from "../repository/getUserRepository";
import { putUserMeRepository } from "../repository/putUserRepository";
import { deleteUserRepository } from "../repository/deleteUserRepository";

// Import des Types :

// Import des utils
import dataUserType from "../types/dataUserType";

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
                        "❌ Nature de l'erreur": "Erreur lors de la récupération de la liste des utilisateurs.",
                        getAllUsersRepository: {
                            identity: "getAllUsersRepository.ts",
                            type: "repository",
                            chemin: "/server/src/repository/getUserRepository.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la récupération de la liste des utilisateurs.",
                        }
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


// URI : /api/users/me
usersController.get("/me",
    
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
                        getOneUserByIdRepository: {
                            identity: "getOneUserByIdRepository.ts",
                            type: "repository",
                            chemin: "/server/src/repository/getUserRepository.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la récupération des données de l'utilisateur.",
                        }
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

// URI : /api/users/me
usersController.put("/me",
    
    // Vérification :
    VerifyKeys(["firstname", "lastname", "email"]),
    Verify_JWT_Middleware,
    async (req: Request, res: Response) => {
        try {
            // Logique métier 1 : Modifier l'utilisateur connecté
                const putDataUser: ResultSetHeader = await putUserMeRepository(req.body)
            
                if (putDataUser.affectedRows === 0) {
                    res.status(404).json({ message: "Aucun utilisateur trouvé" });
                    console.error({
                        identity: "usersController.ts",
                        type: "controller",
                        URI: "/api/users/me",
                        methode: "PUT",
                        chemin: "/server/src/controllers/usersController.ts",
                        "❌ Nature de l'erreur": "Erreur lors de la modification des données de l'utilisateur.",
                        putUserMeRepository: {
                            identity: "putUserMeRepository.ts",
                            type: "repository",
                            chemin: "/server/src/repository/putUserRepository.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la modification des données de l'utilisateur.",
                        }
                    });
                    return;
                }
            
            // Logique métier 2 : Recuperer l'utilisateur connecté
                const dataUser: RowDataPacket[] = await getOneUserByIdRepository(req.body.dataUser.id)
                if (dataUser.length === 0) {
                    res.status(404).json({ message: "Aucun utilisateur trouvé" });
                    console.error({
                        identity: "usersController.ts",
                        type: "controller",
                        URI: "/api/users/me",
                        methode: "PUT",
                        chemin: "/server/src/controllers/usersController.ts",
                        "❌ Nature de l'erreur": "Erreur lors de la récupération des données de l'utilisateur.",
                        getOneUserByIdRepository: {
                            identity: "getOneUserByIdRepository.ts",
                            type: "repository",
                            chemin: "/server/src/repository/getUserRepository.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la récupération des données de l'utilisateur.",
                            
                        }
                    });
                    return;
                }
            
            // Logique métier 3 : Envois des données de l'utilisateur
                res.status(200).json({ data: dataUser });
                return;
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "usersController.ts",
                type: "controller",
                URI: "/api/users/me",
                methode: "PUT",
                chemin: "/server/src/controllers/usersController.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    }
);


// URI : /api/users/:id
usersController.get("/:id",
    
    // Vérification :
    VerifyKeys(["fristname", "lastname", "email"]),
    Verify_JWT_Middleware,
    isAdmin,
    async (req: Request, res: Response) => {
        try {
            // Logique métier 1 : Recuperer un utilisateur par son id
                req.body.id = parseInt(req.params.id, 10);
                const dataUserTarget: dataUserType = req.body
                
                const putDataUser: ResultSetHeader = await putUserMeRepository(dataUserTarget)
                
                if (putDataUser.affectedRows === 0) {
                    res.status(404).json({ message: "Aucun utilisateur trouvé" });
                    console.error({
                        identity: "usersController.ts",
                        type: "controller",
                        URI: "/api/users/:id",
                        methode: "GET",
                        chemin: "/server/src/controllers/usersController.ts",
                        "❌ Nature de l'erreur": "Erreur lors de la modification des données de l'utilisateur.",
                        putUserMeRepository: {
                            identity: "putUserMeRepository.ts",
                            type: "repository",
                            chemin: "/server/src/repository/putUserRepository.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la modification des données de l'utilisateur.",
                        }
                    });
                    return;
                }
            
            // Logique métier 2 : Recuperer l'utilisateur par son id
                const dataUser: RowDataPacket[] = await getOneUserByIdRepository(req.body.id)
                if (dataUser.length === 0) {
                    res.status(404).json({ message: "Aucun utilisateur trouvé" });
                    console.error({
                        identity: "usersController.ts",
                        type: "controller",
                        URI: "/api/users/:id",
                        methode: "GET",
                        chemin: "/server/src/controllers/usersController.ts",
                        "❌ Nature de l'erreur": "Erreur lors de la récupération des données de l'utilisateur.",
                        getOneUserByIdRepository: {
                            identity: "getOneUserByIdRepository.ts",
                            type: "repository",
                            chemin: "/server/src/repository/getUserRepository.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la récupération des données de l'utilisateur.",
                        }
                    });
                    return;
                }
            
            // Logique métier 3 : Envois des données de l'utilisateur
                res.status(200).json({ data: dataUser });
                return;
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "usersController.ts",
                type: "controller",
                URI: "/api/users/:id",
                methode: "GET",
                chemin: "/server/src/controllers/usersController.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    }
);


// URI : /api/users/:id
usersController.delete("/:id",
    
    // Vérification :
    Verify_JWT_Middleware,
    isAdmin,
    async (req: Request, res: Response) => {
        try {
            // Logique métier 1 : Recuperer un utilisateur par son id
                req.body.id = parseInt(req.params.id, 10);
                const dataUserTarget: dataUserType = req.body
                
                const deleteDataUser: ResultSetHeader = await deleteUserRepository(req.body.id)
                
                if (deleteDataUser.affectedRows === 0) {
                    res.status(404).json({ message: "Aucun utilisateur trouvé" });
                    console.error({
                        identity: "usersController.ts",
                        type: "controller",
                        URI: "/api/users/:id",
                        methode: "DELETE",
                        chemin: "/server/src/controllers/usersController.ts",
                        "❌ Nature de l'erreur": "Erreur lors de la suppression des données de l'utilisateur.",
                        deleteUserRepository: {
                            identity: "deleteUserRepository.ts",
                            type: "repository",
                            chemin: "/server/src/repository/deleteUserRepository.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la suppression des données de l'utilisateur.",
                        }
                    });
                    return;
                }

            // Logique métier 2 : Envois de la confirmation de la suppression
                res.status(200).json({ message: "Suppression réussie" });
                return;
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "usersController.ts",
                type: "controller",
                URI: "/api/users/:id",
                methode: "DELETE",
                chemin: "/server/src/controllers/usersController.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    }
);

export default usersController;
