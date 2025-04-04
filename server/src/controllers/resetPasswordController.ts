import express, { Request, Response } from "express";

const resetPasswordController = express.Router();

// Import des dépendances externes :

// Import des Middlewares :
import RouteLimiterRequestIP from '../Security/middlewareSecurity/RouteLimiterRequestIP';
import VerifyKeys from '../middleware/VerifyKeys/VerifyKeys';

// Import des Repositories :
import VerifyEmailTrueRepository from "../repository/emailRepository";

// Import des Services :

// Import des Outils :
import { createCryptoUtils } from "../utils/cryptoUtils";
import { createExpireDateUtils } from "../utils/createExpireDateUtils";

// URI : /api/resetpassword
resetPasswordController.post("/",

    // Vérification :
    RouteLimiterRequestIP,
    VerifyKeys(["email"]),

    async (req: Request, res: Response) => {
        try {
            //* Logique métier 1 : Vérification si l'email existe */
                const dataUser = await VerifyEmailTrueRepository(req.body.email);

                // Si l'email n'existe pas dans la DB, on ne peut pas continuer.
                if (dataUser.length === 0) { // Si c'est égal à 0, c'est que l'email n'existe pas
                    res.status(404).json({ message: "Cet email n'existe pas." });
                    console.error(
                        {
                            identity: "resetPasswordController.ts",
                            type: "controller",
                            URI: "/api/resetpassword",
                            router: "resetPasswordController.post",
                            metier: "Logique métier 1",
                            codeStatus: "404 : Not Found",
                            chemin: "/server/src/controllers/resetPasswordController.ts",
                            "❌ Nature de l'erreur": "L'email n'existe pas dans la DB, impossible de continuer.",
                        },
                    );
                    return;
                }

            // Logique métier 2 : Création du token avec crypto
                // On génère un token sécurisé
                const token: string = createCryptoUtils()

                // On génère une date d'expiration dans 1h
                const expiresAt: Date = createExpireDateUtils();
        }
        catch (error) {
            console.error(
                {
                    identity: "resetPasswordController.ts",
                    type: "controller",
                    URI: "/api/resetpassword",
                    router: "resetPasswordController.post",
                    codeStatus: "500 : Internal Server Error",
                    chemin: "/server/src/controllers/resetPasswordController.ts",
                    "❌ Nature de l'erreur": error,
                },
            );
            res.status(500).json({ message: "Erreur interne du serveur." });
        }
    }
)

export default resetPasswordController;