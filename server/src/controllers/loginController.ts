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
            const dataUser = await verifyEmailTrueRepository(req.body.email);
            res.status(200).json({ message: "Email et mot de passe corrects", dataUser });
            console.log(dataUser[0])
            return;
        }
        catch (error) {
            console.error(
                {
                    identity: "loginController.ts",
                    type: "controller",
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
