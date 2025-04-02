import express, { request, response } from 'express';

const registerController = express.Router();

// Import des dépendances externes :

// Import des Middlewares :
import RouteLimiterRequestIP from "../Security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from '../middleware/VerifyKeys/VerifyKeys';

// Import des Repositories :

// URI : /api/register
registerController.post("/", 

    // Vérification : 
    RouteLimiterRequestIP,
    VerifyKeys(["firstname", "lastname", "email", "password"]),
    
    async (req, res) => {
        try {}
        catch (error) {
            console.error(
                {
                    identity: "registerController.ts",
                    type: "controller",
                    URI: "/api/register",
                    router: "registerController.post",
                    codeStatus: "404 : Not Found",
                    chemin: "/server/src/middleware/VerifyEmail/VerifyEmailFalse.ts",
                    "❌ Nature de l'erreur": "L'email existe déjà dans la DB, impossible de continuer.",
                },
            );
            return;
        }
    });

export default registerController;
