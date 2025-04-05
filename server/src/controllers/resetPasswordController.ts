import express, { Request, Response } from "express";

const resetPasswordController = express.Router();

// Import des dépendances externes :

// Import des Middlewares :
import RouteLimiterRequestIP from '../Security/middlewareSecurity/RouteLimiterRequestIP';
import VerifyKeys from '../middleware/VerifyKeys/VerifyKeys';

// Import des Repositories :
import VerifyEmailTrueRepository from "../repository/emailRepository";
import insertTokenResetRepository from "../repository/insertTokenResetRepository";

// Import des Services :
import sendMailerService from "../services/mailer/sendMailerService";

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
                            methode: "POST",
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

                // Sécurité : On vérifie si le token et la date d'expiration sont valides
                if (!expiresAt || !token) {
                    res.status(500).json({ message: "Erreur interne du serveur." });
                    console.error(
                        {
                            identity: "resetPasswordController.ts",
                            type: "controller",
                            URI: "/api/resetpassword",
                            methode: "POST",
                            metier: "Logique métier 2",
                            codeStatus: "500 : Internal Server Error",
                            chemin: "/server/src/controllers/resetPasswordController.ts",
                            "❌ Nature de l'erreur": "Erreur interne du serveur.",
                        },
                    );
                    return;
                }

            // Logique métier 3 : Enregistrement du token et de la date d'expiration dans la DB
                // On insère le token et la date d'expiration dans la DB
                const insertTokenReset = await insertTokenResetRepository(dataUser[0].id, token, expiresAt);

                // Verification si l'insertion a réussi
                if (insertTokenReset.affectedRows === 0) {
                    res.status(400).json({ message: "Erreur lors de l'enregistrement du token." });
                    console.error(
                        {
                            identity: "resetPasswordController.ts",
                            type: "controller",
                            URI: "/api/resetpassword",
                            methode: "POST",
                            metier: "Logique métier 3",
                            codeStatus: "400 : Bad Request",
                            chemin: "/server/src/controllers/resetPasswordController.ts",
                            "❌ Nature de l'erreur": "Erreur lors de l'enregistrement du token dans la DB.",
                        },
                    );
                    return;
                }
            
            // Logique métier 4 : Création du lien de réinitialisation
                // Verification de la présence de la variable d'environnement DOMAIN_CLIENT
                if (!process.env.DOMAIN_CLIENT) {
                    res.status(500).json({ message: "Erreur interne du serveur." });
                    console.error(
                        {
                            identity: "resetPasswordController.ts",
                            type: "controller",
                            URI: "/api/resetpassword",
                            methode: "POST",
                            metier: "Logique métier 4",
                            codeStatus: "500 : Internal Server Error",
                            chemin: "/server/src/controllers/resetPasswordController.ts",
                            "❌ Nature de l'erreur": "Erreur interne du serveur, variable d'environnement DOMAIN_CLIENT manquante.",
                        },
                    );
                    return;
                }

                // On crée le lien de réinitialisation
                const linkResetPassword: string = `${process.env.DOMAIN_CLIENT}/reset-password?token=${token}`;

            // Logique métier 5 : Envoi de l'email de réinitialisation
                // On prépare les données pour l'envoi par email
                const subject: string = "Réinitialisation de votre mot de passe";

        }
        catch (error) {
            res.status(500).json({ message: "Erreur interne du serveur." });
            console.error(
                {
                    identity: "resetPasswordController.ts",
                    type: "controller",
                    URI: "/api/resetpassword",
                    methode: "POST",
                    codeStatus: "500 : Internal Server Error",
                    chemin: "/server/src/controllers/resetPasswordController.ts",
                    "❌ Nature de l'erreur": error,
                },
            );
            return;
        }
    }
)

export default resetPasswordController;