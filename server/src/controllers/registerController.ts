import express, { request, response } from 'express';

const registerController = express.Router();

// Import des dépendances externes :
import * as argon2 from "argon2";

// Import des Middlewares :
import RouteLimiterRequestIP from "../Security/middlewareSecurity/RouteLimiterRequestIP";
import VerifyKeys from '../middleware/VerifyKeys/VerifyKeys';

// Import des Repositories :
import verifyEmailFalseRepository from "../repository/emailRepository";
import InsertUserRepository from "../repository/insertUserRepository";

// URI : /api/register
registerController.post("/", 

    // Vérification : 
    RouteLimiterRequestIP,
    VerifyKeys(["firstname", "lastname", "email", "password"]),
    
    async (req, res) => {
        try {
            /* Logique métier 1 : Vérification si l'email existe */
                const dataUser = await verifyEmailFalseRepository(req.body.email);

                // Si l'email existe déjà dans la DB, on ne peut pas continuer.
                if (dataUser.length > 0) { // Si c'est supérieur à 0, c'est que l'email existe déjà
                    res.status(409).json({ message: "Cet email est déjà utilisé. Veuillez en choisir un autre." });
                    console.error(
                        {
                            identity: "registerController.ts",
                            type: "controller",
                            URI: "/api/register",
                            router: "registerController.post",
                            metier: "Logique métier 1",
                            codeStatus: "409 : Conflict",
                            chemin: "/server/src/middleware/VerifyEmail/VerifyEmailFalse.ts",
                            "❌ Nature de l'erreur": "L'email existe déjà dans la DB, impossible de continuer.",
                        },
                    );
                    return;
                }

            /* Logique métier 2 : Hachage du mot de passe du nouvelle utilisateur */
                // On hache le mot de passe avant de l'insérer dans la DB
                const hash = await argon2.hash(req.body.password);

                // On remplace le mot de passe en clair par le mot de passe haché
                req.body.password = hash;

            /* Logique métier 3 : Insertion de l'utilisateur dans la DB */
                // On insère l'utilisateur dans la DB
                const insertUser = await InsertUserRepository(req.body.firstname, req.body.lastname, req.body.adress?? null, req.body.email, req.body.password);

                res.status(201).json({ message: "Utilisateur créé avec succès." });
        }
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
