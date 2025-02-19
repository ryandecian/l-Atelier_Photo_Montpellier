// Import général
import express, { query, Request, Response, NextFunction } from "express";

// Import des composants de sécurités
import LimiteRequestIP from "./Security/LimiteRequestIP";

// Import des middlewares de sécurités
// Non opérationnel
import RouteLimiterRequestIP from "./Security/middlewareSecurity/RouteLimiterRequestIP";

/*----------------------------------------------------*/

// Import pour SQL
import usePoolConnection from "./database/config";
import { useComplexConnection } from "./database/config";
import { ResultSetHeader, RowDataPacket } from "mysql2";

// Import des middlewares générals
import VerifyKeys from "./middleware/VerifyKeys";
import VerifyEmailFalse from "./middleware/VerifyEmailFalse";
import VerifyEmailTrue from "./middleware/VerifyEmailTrue";
import HashPassword from "./middleware/HashPassword";
import VerifyPassword from "./middleware/VerifyPassword";
import InsertUser from "./middleware/InsertUser";
import Create_JWT_Middleware from "./middleware/Create_JWT_Middleware";
import Create_Crypto_Middleware from "./middleware/Create_Crypto_Middleware";
import Verify_Crypto_Middleware from "./middleware/Verify_Crypto_Middleware";
import InsertNewPassword from "./middleware/insertNewPassword";

// Import des Services
import mailer from "./services/mailer";
import SendMailer_Middleware from "./middleware/SendMailer_Middleware";


const app = express();
const port = 8080;

/**
 * Pour lire le body d'un (request) contenant un json, j'ai besoin d'importer un middleware
 * d'express pour lire la request correctement.
 * Action callBack
 * Methode: USE
 */
app.use(express.json());

/**
 * Sécurité DDOS
 * Permet de limité les requêtes d'une même IP à 150 par min
 * Déblocage automatique
 */
app.use(LimiteRequestIP)

/**
 * Route de base
 * Path: /
 * Action callBack
 * Methode: GET
 */
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("API de Anne SAUNIER !!!");
})

/**
 * Route pour envoyer un email
 * Path: /email
 * Action callBack
 * Methode: POST
 */
app.post("/email",
    // Ajout des middlewares
    VerifyKeys(["to", "subject", "text"]),
    SendMailer_Middleware,
    async (req: Request, res: Response) => {
    try {
        // res.status(200).json({ reponse: "Mail envoyé avec succès !", data: req.body })
        res.status(200).json({ reponse: "Route mail existant", data: req.body })
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "index.ts",
                type: "route register",
                chemin: "/server/src/index.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
})

/**
 * Route de reset password
 * Path: /reset-password
 * middleware:
 * Action callBack
 * Methode: POST
 */
app.post("/reset-password",
    // Ajout des middlewares
    RouteLimiterRequestIP,
    VerifyKeys(["email"]),
    VerifyEmailTrue,
    Create_Crypto_Middleware,
    SendMailer_Middleware,
    async (req: Request, res: Response) => {
        try {
        res.status(200).json({ reponse: "Un email de reinitialisation vous a été envoyé" });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "index.ts",
                type: "route reset-password",
                chemin: "/server/src/index.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
});

/**
 * Route de reset password
 * Path: /reset-password/confirm
 * middleware:
 * Action callBack
 * Methode: POST
 */
app.post("/reset-password/confirm",
    // Ajout des middlewares
    RouteLimiterRequestIP,
    VerifyKeys(["token", "newPassword"]),
    Verify_Crypto_Middleware,
    HashPassword,
    InsertNewPassword,
    async (req: Request, res: Response) => {
    try {
        res.status(200).json({ reponse: "Un email de reinitialisation vous a été envoyé" });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "index.ts",
                type: "route reset-password",
                chemin: "/server/src/index.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
});

/**
 * Route de register
 * Path: /register
 * middleware: HashPassword
 * Action callBack
 * Methode: POST
 */
app.post("/register",
    // Ajout des middlewares
    RouteLimiterRequestIP,
    VerifyKeys(["firstname", "lastname", "email", "password"]),
    VerifyEmailFalse,
    HashPassword,
    InsertUser,

    // Début de la fonction de la route principale
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {

        try {
            // ✅ Réponse de succès
            res.status(201).json(
                {
                    reponse: "Enregistrement accepté",
                    id: req.body.id, 
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                }
            );
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error(
                {
                    identity: "index.ts",
                    type: "route register",
                    chemin: "/server/src/index.ts",
                    "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                    details: error,
                },
            );
            return;
        }
})

/**
 * Route de login
 * Path: /login
 * Action callBack
 * Methode: POST
 */
app.post("/login",
    // Ajout des middlewares
    RouteLimiterRequestIP,
    VerifyKeys(["email", "password"]),
    VerifyEmailTrue,
    VerifyPassword,
    Create_JWT_Middleware,
    async (req: Request, res: Response):Promise<void> => {
    try {
        res.status(200)
        .cookie("jwtToken", req.body.jwt)
        .json({
            id: req.body.dataUser.id,
            firstname: req.body.dataUser.firstname,
            lastname: req.body.dataUser.lastname,
            address: req.body.dataUser.address,
            email: req.body.dataUser.email,
        });
    } 
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error(
            {
                identity: "index.ts",
                type: "route login",
                chemin: "/server/src/index.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            },
        );
        return;
    }
});


/**
 * Gestion des routes innexistante
 */
app.use( async (req: Request, res: Response) => {
    res.status(404).json({
      success: false,
      message: "Route non trouvée",
      method: req.method,
      path: req.originalUrl,
    });
    console.error(
        {
            identity: "index.ts",
            type: "Gestionnaire des routes inconnues",
            chemin: "/server/src/index.ts",
            "❌ Nature de l'erreur": "Tentative d'accès à une route inexistante !",
            method: req.method,
            path: req.originalUrl,
            contenu : req.body
        },
    );
  });

/**
 * Le server se lance sur le port 8080
 */
app.listen(port, () => {
    console.log(`Server lancé sur http://localhost:${port}`);
});
