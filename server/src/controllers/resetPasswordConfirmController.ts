import express, {Request, Response} from 'express';

const resetPasswordConfirmController = express.Router();

// Import des Types :

// Import des Middlewares :
import RouteLimiterRequestIP from '../Security/middlewareSecurity/RouteLimiterRequestIP';
import VerifyKeys from '../middleware/VerifyKeys/VerifyKeys';

// Import des Repositories :
import { getOneTokenResetRepository } from '../repository/resetTokenRegulator';
import { get } from 'http';

// Import des Services :

// Import des Outils :

// Vérification :
// URI : /api/resetpassword/confirm
resetPasswordConfirmController.post("/",

    // Vérification :
    RouteLimiterRequestIP,
    VerifyKeys(["token", "newPassword"]),
    
    async (req: Request, res: Response) => {
        try {
            // Logique métier 1 : Récupération et vérification du token dans la DB
                const tokenDB =  await getOneTokenResetRepository(req.body.token);

                // Vérification si le token existe en DB
                if (tokenDB.length === 0) {
                    res.status(403).json({ error: "Token invalide." });
                    console.error(
                        {
                            identity: "resetPasswordConfirmController.ts",
                            type: "controller",
                            URI: "/api/resetpassword/confirm",
                            methode: "POST",
                            metier: "Logique métier 1",
                            codeStatus: "403 : Forbidden",
                            chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la récupération des tokens dans la DB.",
                            getOneTokenResetRepository: {
                                identity: "getOneTokenResetRepository",
                                type: "repository",
                                chemin: "/server/src/repository/resetTokenRegulator.ts",
                                "❌ Nature de l'erreur": "Le token n'existe pas dans la DB, accès refusé.",
                            },
                        }
                    );
                    return;
                }

                // Création des variables pour faire la comparaison de date
                const dateNow = new Date();
                const dateToken = new Date(tokenDB[0].expires_at);
                
                // Vérification si le token est expiré


        }
        catch (error) {}
    });

export default resetPasswordConfirmController;
