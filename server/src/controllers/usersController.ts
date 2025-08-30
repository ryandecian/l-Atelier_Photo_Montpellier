import express, { Request, Response } from "express";

const usersController = express.Router();

// Import des dépendances externes :
import { ResultSetHeader, RowDataPacket } from "mysql2";

// Import des Middlewares :
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";
import Verify_JWT_Middleware from "../middleware/JWT/Verify_JWT_Middleware";
import isAdmin from "../middleware/isAdmin/isAdmin_Middleware";

// Import des Repositories :
import { getAllUsersRepository } from "../repository/getUserRepository";
import { getOneUserByIdRepository } from "../repository/getUserRepository";
import { putUserMeRepository } from "../repository/putUserRepository";
import { deleteUserRepository } from "../repository/deleteUserRepository";
import verifyEmailFalseRepository from "../repository/emailRepository";
import { putOneUserRepository } from "../repository/putOneUserRepository";

// Import des Types :
import payloadType from "../types/payloadType";

// Import des utils
import { hashPasswordArgonUtils } from "../utils/hashArgon.utils";
import { createJwtTokenClientLAPM, createJwtTokenServerLAPM } from "../utils/jwtTokenLAPMUtils";

/* Récupération de tous les utilisateurs en tant qu'admin */
// URI : /api/users
// Ok refacto
usersController.get("/", 
    
    // Vérification :
    Verify_JWT_Middleware,
    isAdmin,
    async ( req: Request, res: Response) => {
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

/* Récupération de ses propre données utilisateurs */
// URI : /api/users/me
// Ok refacto
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

/* Modification de ses propre données utilisateurs */
// URI : /api/users/me
usersController.put("/me",
    
    // Vérification :
    VerifyKeys(["firstname", "lastname", "email"]),
    Verify_JWT_Middleware,
    async (req: Request, res: Response) => {
        try {
            /* Logique métier 1 : Vérifier que l'email demandé en modification n'existe pas en DB */
                /* Vérification que l'email du formulaire est différent de celui du token */
                /* Si l'email est différent alors l'utilisateur veux volontairement modifier son email */
                if (req.body.email !== req.body.dataUser.email) {
                    const dataUserDB: RowDataPacket[] = await verifyEmailFalseRepository(req.body.email);

                    // Si l'email existe déjà dans la DB, on ne peut pas continuer.
                    if (dataUserDB.length > 0) { // Si c'est supérieur à 0 et que l'email est différent c'est que l'email existe déjà
                        res.status(409).json({ message: "Cet email est déjà utilisé. Veuillez en choisir un autre." });
                        return;
                    }
                }

            /* Logique métier 2 : Vérifier s'il y a une demande de modification de mot de passe */
                /* Si password est vide ou seulement des espaces, on l’enlève */
                if (typeof req.body.password === "string" && req.body.password.trim() === "") {
                    delete req.body.password;
                }

                /* Si un mot de passe est fourni on le hache et le met à jour */
                if (req.body.password) {
                    // Si un mot de passe est fourni, le hacher
                    const hashedPassword = await hashPasswordArgonUtils(req.body.password);
                    req.body.password = hashedPassword;
                } 

            // Logique métier 3 : Modifier l'utilisateur connecté
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
            
            // Logique métier 4 : Recuperer l'utilisateur connecté
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
            
                /* Logique métier 5 : Réédition des token de l'utilisateur */
                    // Création du token server
                    const jwtTokenServerLAPM: string | boolean = await createJwtTokenServerLAPM(dataUser[0] as payloadType);
                    // Création du token client
                    const jwtTokenClientLAPM: string | boolean = await createJwtTokenClientLAPM(dataUser[0] as payloadType);

                    // Vérification des clés secrète Server et Client si elles existent
                // Si l'une d'entre elles n'existe pas, on renvoie une erreur 500
                if (!jwtTokenServerLAPM || !jwtTokenClientLAPM) {
                    res.status(500).json({ message: "Erreur interne serveur." });
                    return;
                }
            
            // Logique métier 6 : Envois des données de l'utilisateur
                res.status(200)
                .cookie("jwtTokenServerLAPM", jwtTokenServerLAPM, {
                    httpOnly: true,
                    // secure: true, seulment en production
                    sameSite: "lax",
                    maxAge: 60 * 60 * 1000, // 1 heure
                })
                .json({
                    message: "Modification réussie",
                    jwtTokenClientLAPM: jwtTokenClientLAPM,
                });
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

/* Récupérer les données d'un utilisateur en tant qu'admin via l'id */
// URI : /api/users/:id
usersController.get("/:id",

    // Vérification :
    Verify_JWT_Middleware,
    isAdmin,
    async (req: Request, res: Response) => {
        try {
            // Logique métier 1 : Recupération des data de l'utilisateur
                /* Récupération de l'ID de l'utilisateur  dans l'URL */
                const userId = parseInt(req.params.id, 10);
                if (!Number.isFinite(userId) || userId <= 0) {
                    res.status(400).json({ message: "ID invalide" });
                return;
            }

                const dataUser: RowDataPacket[] = await getOneUserByIdRepository(userId)

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

            // Logique métier 2 : Envois de la liste de tout les utilisateurs
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
)

/* Modifier les données utilisateurs en tant qu'admin */
// URI : /api/users
usersController.put("/",
    
    // Vérification :
    VerifyKeys(["id", "firstname", "lastname", "email"]),
    Verify_JWT_Middleware,
    isAdmin,
    async (req: Request, res: Response) => {
        try {
            /* Logique métier 1 : Vérification si l'email existe */
                const dataUserDB: RowDataPacket[] = await verifyEmailFalseRepository(req.body.email);

                // Si l'email existe déjà dans la DB, on ne peut pas continuer.
                if (dataUserDB.length > 0) { // Si c'est supérieur à 0, c'est que l'email existe déjà
                    res.status(409).json({ message: "Cet email est déjà utilisé. Veuillez en choisir un autre." });
                    console.error(
                        {
                            identity: "usersController.ts",
                            type: "controller",
                            URI: "/api/users/:id",
                            methode: "PUT",
                            metier: "Logique métier 1",
                            codeStatus: "409 : Conflict",
                            chemin: "/server/src/middleware/VerifyEmail/VerifyEmailFalse.ts",
                            "❌ Nature de l'erreur": "L'email existe déjà dans la DB, impossible de continuer.",
                        },
                    );
                    return;
                }

            // Logique métier 2 : Modifier un utilisateur par son id

                const putDataUser: ResultSetHeader = await putOneUserRepository(req.body)

                if (putDataUser.affectedRows === 0) {
                    res.status(404).json({ message: "Aucun utilisateur trouvé" });
                    console.error({
                        identity: "usersController.ts",
                        type: "controller",
                        URI: "/api/users/:id",
                        methode: "PUT",
                        chemin: "/server/src/controllers/usersController.ts",
                        "❌ Nature de l'erreur": "Erreur lors de la modification des données de l'utilisateur.",
                        putOneUserRepository: {
                            identity: "putOneUserRepository.ts",
                            type: "repository",
                            chemin: "/server/src/repository/putUserRepository.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la modification des données de l'utilisateur.",
                        }
                    });
                    return;
                }
            
            // Logique métier 3 : Recuperer l'utilisateur par son id
                const dataUser: RowDataPacket[] = await getOneUserByIdRepository(req.body.id)
                if (dataUser.length === 0) {
                    res.status(404).json({ message: "Aucun utilisateur trouvé" });
                    console.error({
                        identity: "usersController.ts",
                        type: "controller",
                        URI: "/api/users/:id",
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
            
            // Logique métier 4 : Envois des données de l'utilisateur
                res.status(200).json({ data: dataUser });
                return;
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "usersController.ts",
                type: "controller",
                URI: "/api/users/:id",
                methode: "PUT",
                chemin: "/server/src/controllers/usersController.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    }
);

/* Suppression d'un utilisateur en tant qu'admin */
// URI : /api/users
usersController.delete("/",
    
    // Vérification :
    VerifyKeys(["id"]),
    Verify_JWT_Middleware,
    isAdmin,
    async (req: Request, res: Response) => {
        try {
            // Logique métier 1 : Suppression de l'utilisateur dans la DB
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
