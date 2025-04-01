import express, { Request, Response} from "express";

const loginController = express.Router();

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
                        chemin: "/server/src/middleware/VerifyEmail/VerifyEmailTrue.ts",
                        "❌ Nature de l'erreur": "L'email n'existe pas dans la DB, impossible de continuer.",
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
