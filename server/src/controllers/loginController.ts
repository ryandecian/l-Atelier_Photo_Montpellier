import express, { Request, Response} from "express";

const loginController = express.Router();

// Import des dépendances externes :
import * as argon2 from "argon2";

// Import des Middlewares :
import RouteLimiterRequestIP from "../Security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from "../middleware/VerifyKeys/VerifyKeys";

// Import des Repositories :
import { verifyEmailTrueRepository } from "../repository/emailRepository"

/** 
 * Fiche technique : 
 * 
 * Nombre de routes : 
 * 
 * Méthode de utilisé : 
 * POST
 * 
 * Objectif : 
*/

// URI : /api/login
loginController.post("/", 

    // Vérification : 
    RouteLimiterRequestIP,
    VerifyKeys(["email", "password"]),

    async (req: Request, res: Response) => {
        try {
            /* Logique métier 1 : Vérification si l'email existe */
            const dataUser = await verifyEmailTrueRepository(req.body.email);

            if (dataUser.length === 0) {
                res.status(404).json({ message: "Email ou mot de passe incorrect" });
                console.error(
                    {
                        identity: "loginController.ts",
                        type: "controller",
                        URI: "/api/login",
                        router: "loginController.post",
                        metier: "Logique métier 1",
                        codeStatus: "404 : Not Found",
                        chemin: "/server/src/middleware/VerifyEmail/VerifyEmailTrue.ts",
                        "❌ Nature de l'erreur": "L'email n'existe pas dans la DB, impossible de continuer.",
                    },
                );
                return;
            }

            /* Logique métier 2 : Vérifier le mot de passe utilisateur*/
            const verifyPassword = await argon2.verify(dataUser[0].password, req.body.password);

            if (!verifyPassword) { // Si c'est false, c'est que le mot de passe est incorrect
                res.status(401).json({ message: "Email ou mot de passe incorrect" });
                console.error(
                    {
                        identity: "loginController.ts",
                        type: "controller",
                        URI: "/api/login",
                        router: "loginController.post",
                        metier: "Logique métier 2",
                        codeStatus: "401 : Unauthorized",
                        chemin: "/server/src/middleware/Argon/VerifyPassword.ts",
                        "❌ Nature de l'erreur": "Le mot de passe reçu est différent de la DB, accès interdit",
                    },
                );
                return;
            }


            res.status(200).json({ message: "Email et mot de passe corrects", dataUser });
            return;
        }
        catch (error) {
            console.error(
                {
                    identity: "loginController.ts",
                    type: "controller",
                    URI: "/api/login",
                    router: "loginController.post",
                    chemin: "/server/src/controllers/loginController.ts",
                    "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                    details: error,
                }
            )
            res.status(500).json({ message: "Erreur interne serveur." });
            return;
        }
    }
)

export default loginController;
