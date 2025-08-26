import express, { Request, Response } from "express";

const loginController = express.Router();

// Import des dépendances externes :
import { RowDataPacket } from "mysql2";

// Import des Middlewares :
import RouteLimiterRequestIP from "../security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";

// Import des Repositories :
import verifyEmailTrueRepository from "../repository/emailRepository";

// Import des Types :
import payloadType from "../types/payloadType";

// Import des utils
import { verifyPasswordArgonUtils } from "../utils/hashArgonUtils";
import { createJwtTokenClientLAPM, createJwtTokenServerLAPM } from "../utils/jwtTokenLAPMUtils";


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

            /* Logique métier 2 : Vérifier le mot de passe utilisateur */
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

                // Création du token server
                const jwtTokenServerLAPM: string | boolean = await createJwtTokenServerLAPM(dataUser[0] as payloadType);
                // Création du token client
                const jwtTokenClientLAPM: string | boolean = await createJwtTokenClientLAPM(dataUser[0] as payloadType);

                // Vérification des clés secrète Server et Client si elles existent
                // Si l'une d'entre elles n'existe pas, on renvoie une erreur 500
                if (!jwtTokenServerLAPM || !jwtTokenClientLAPM) {
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
                            "❌ Nature de l'erreur": "Erreur interne serveur, impossible de créer les token.",
                            "jwtTokenServerLAPM et jwtTokenClientLAPM": {
                                identity: "jwtTokenLAPM.ts",
                                type: "utils",
                                chemin: "/server/src/utils/jwtTokenLAPM.ts",
                                "❌ Nature de l'erreur": "Erreur interne serveur, clé secrète Server ou client pour la création token manquante.",
                            }
                        },
                    );
                    return;
                }

            /* Logique métier 4 : Réponse au client */
                res.status(200)
                .cookie("jwtTokenServerLAPM", jwtTokenServerLAPM, {
                    httpOnly: true,
                    // secure: true, seulment en production
                    sameSite: "lax",
                    maxAge: 60 * 60 * 1000, // 1 heure
                })
                .json({
                    message: "Connexion réussie",
                    jwtTokenClientLAPM: jwtTokenClientLAPM,
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
