import express, {Request, Response} from 'express';

const resetPasswordConfirmController = express.Router();

// Import des dépendances externes :

// Import des Middlewares :
import RouteLimiterRequestIP from '../Security/middlewareSecurity/RouteLimiterRequestIP';
import VerifyKeys from '../middleware/VerifyKeys/VerifyKeys';

// Import des Repositories :
import { getOneTokenResetRepository } from '../repository/resetTokenRegulator';
import { getOneUserByIdRepository } from '../repository/getUserRepository';

// Import des Services :

// Import des Types :

// Import des Outils :
import { hashPasswordArgonUtils } from '../utils/hashArgonUtils';
import { RowDataPacket } from 'mysql2';

// Vérification :
// URI : /api/resetpassword/confirm
resetPasswordConfirmController.post("/",

    // Vérification :
    RouteLimiterRequestIP,
    VerifyKeys(["token", "newPassword"]),
    
    async (req: Request, res: Response) => {
        try {
            // Logique métier 1 : Récupération et vérification du token dans la DB
                const tokenDB: RowDataPacket[] =  await getOneTokenResetRepository(req.body.token);

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
                const dateNow: Date = new Date();
                const dateToken: Date = new Date(tokenDB[0].expires_at);

                // Vérification si le token est expiré
                if (dateNow > dateToken) {
                    res.status(403).json({ error: "Token expiré." });
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
                        }
                    );
                    return;
                }

            // Logique métier 2 : Récupération de l'utilisateur en DB
                const dataUser: RowDataPacket[] = await getOneUserByIdRepository(tokenDB[0].user_id);

                // Vérification si l'utilisateur existe en DB ou que la requête a fonctionné
                if (dataUser.length === 0) {
                    res.status(404).json({ error: "Utilisateur introuvable." });
                    console.error(
                        {
                            identity: "resetPasswordConfirmController.ts",
                            type: "controller",
                            URI: "/api/resetpassword/confirm",
                            methode: "POST",
                            metier: "Logique métier 2",
                            codeStatus: "404 : Not Found",
                            chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
                            "❌ Nature de l'erreur": "Erreur lors de la récupération de l'utilisateur dans la DB.",
                            getOneUserByIdRepository: {
                                identity: "getOneUserByIdRepository",
                                type: "repository",
                                chemin: "/server/src/repository/getUserRepository.ts",
                                "❌ Nature de l'erreur": "La DB n'a rien retourné.",
                                cause1: "L'utilisateur n'existe pas.",
                                cause2: "L'utilisateur a été supprimé.",
                                cause3: "La requête a échoué.",
                            },
                        }
                    );
                    return;
                }

            // Logique métier 3 : Hachage du nouveau mot de passe utilisateur
                const hash: string = await hashPasswordArgonUtils(dataUser[0].password);


        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne du serveur." });
            console.error(
                {
                    identity: "resetPasswordConfirmController.ts",
                    type: "controller",
                    URI: "/api/resetpassword/confirm",
                    methode: "POST",
                    codeStatus: "500 : Internal Server Error",
                    chemin: "/server/src/controllers/resetPasswordConfirmController.ts",
                    "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                    details: error,
                }
            );
        }
    });

export default resetPasswordConfirmController;
