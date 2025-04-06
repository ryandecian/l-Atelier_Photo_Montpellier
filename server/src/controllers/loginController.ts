import express, { Request, Response } from "express";

const loginController = express.Router();

// Import des dépendances externes :
import jwt from "jsonwebtoken";
import { RowDataPacket } from "mysql2";

// Import des Middlewares :
import RouteLimiterRequestIP from "../Security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";

// Import des Repositories :
import verifyEmailTrueRepository from "../repository/emailRepository";

// Import des Types :
import payloadType from "../types/payloadType";

// Import des utils
import { verifyPasswordArgonUtils } from "../utils/hashArgonUtils";
import { createDate_Number_Utils } from "../utils/createDateUtils";


// URI : /api/login
loginController.post("/", 

    // Vérification : 
    RouteLimiterRequestIP,
    VerifyKeys(["email", "password"]),

    async (req: Request, res: Response) => {
        try {
            /* Logique métier 1 : Vérification si l'email existe */
                const dataUser: RowDataPacket[] = await verifyEmailTrueRepository(req.body.email);

                if (dataUser.length === 0) {
                    res.status(404).json({ message: "Email ou mot de passe incorrect" });
                    console.error(
                        {
                            identity: "loginController.ts",
                            type: "controller",
                            URI: "/api/login",
                            methode: "POST",
                            metier: "Logique métier 1",
                            codeStatus: "404 : Not Found",
                            chemin: "/server/src/middleware/VerifyEmail/VerifyEmailTrue.ts",
                            "❌ Nature de l'erreur": "L'email n'existe pas dans la DB, impossible de continuer.",
                        },
                    );
                    return;
                }

            /* Logique métier 2 : Vérifier le mot de passe utilisateur*/
                const verifyPassword: boolean = await verifyPasswordArgonUtils(dataUser[0].password, req.body.password);

                if (!verifyPassword) { // Si c'est false, c'est que le mot de passe est incorrect
                    res.status(401).json({ message: "Email ou mot de passe incorrect" });
                    console.error(
                        {
                            identity: "loginController.ts",
                            type: "controller",
                            URI: "/api/login",
                            methode: "POST",
                            metier: "Logique métier 2",
                            codeStatus: "401 : Unauthorized",
                            chemin: "/server/src/middleware/Argon/VerifyPassword.ts",
                            "❌ Nature de l'erreur": "Le mot de passe reçu est différent de la DB, accès interdit",
                        },
                    );
                    return;
                }

            /* Logique métier 3 : Création du JWT client et server */

                // Récupération de la clé secrète Server
                const SECRET_KEY_TOKEN_SERVER: string | undefined = process.env.SECRET_KEY_TOKEN_SERVER;
                
                // Récupération de la clé secrète Client
                const SECRET_KEY_TOKEN_CLIENT: string | undefined = process.env.SECRET_KEY_TOKEN_CLIENT;

                // Vérification des clés secrète Server et Client si elles existent
                // Si l'une d'entre elles n'existe pas, on renvoie une erreur 500
                if (!SECRET_KEY_TOKEN_SERVER || !SECRET_KEY_TOKEN_CLIENT) {
                    res.status(500).json({ message: "Erreur interne serveur." });
                    console.error(
                        {
                            identity: "loginController.ts",
                            type: "controller",
                            URI: "/api/login",
                            methode: "POST",
                            metier: "Logique métier 3",
                            codeStatus: "500 : Internal Server Error",
                            chemin: "/server/src/controllers/loginController.ts",
                            "❌ Nature de l'erreur": "Erreur interne serveur, clé secrète Server ou client pour la création token manquante.",
                        },
                    );
                    return;
                }

                // Création des variables token
                const expiresIn: number = 60 * 60; // 1 heure
                const dateNow: number = await createDate_Number_Utils(); // Date actuelle en timestamp UNIX

                const payload_server: payloadType = {
                    id: dataUser[0].id,
                    email: dataUser[0].email,
                    role: dataUser[0].role,
                    iat: dateNow, // ⏳ Date de création du token
                }

                const payload_client: payloadType = {
                    id: dataUser[0].id,
                    email: dataUser[0].email,
                    firstname: dataUser[0].firstname,
                    lastname: dataUser[0].lastname,
                    address: dataUser[0].address,
                    role: dataUser[0].role,
                    iat: dateNow, // ⏳ Date de création du token
                }

                // Création du token server
                const token_server: string = jwt.sign(payload_server, SECRET_KEY_TOKEN_SERVER, { expiresIn });

                // Création du token client
                const token_client: string = jwt.sign(payload_client, SECRET_KEY_TOKEN_CLIENT, { expiresIn });

            /* Logique métier 4 : Réponse au client */
                res.status(200)
                .cookie("jwtTokenServerLAPM", token_server, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "none",
                    maxAge: 60 * 60 * 1000, // 1 heure
                })
                .json({
                    message: "Connexion réussie",
                    jwtTokenClientLAPM: token_client
                });
                return;
        }
        catch (error) {
            res.status(500).json({ message: "Erreur interne serveur." });
            console.error(
                {
                    identity: "loginController.ts",
                    type: "controller",
                    URI: "/api/login",
                    methode: "POST",
                    codeStatus: "500 : Internal Server Error",
                    chemin: "/server/src/controllers/loginController.ts",
                    "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                    details: error,
                }
            )
            return;
        }
    }
)

export default loginController;
