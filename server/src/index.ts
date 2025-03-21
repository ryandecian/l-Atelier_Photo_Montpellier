// Import général
import express, { query, Request, Response, NextFunction } from "express";
import router from "./router/router";
import cors from "cors";

// Import des composants de sécurités
import LimiteRequestIP from "./Security/LimiteRequestIP";


const app = express();
const port = 8080;


app.use(cors({
  origin: "http://localhost:4000", // Ton client Vite
  credentials: true,
}));

/**
 * Pour lire le body d'un (request) contenant un json, j'ai besoin d'importer un middleware
 * d'express pour lire la request correctement.
 * Action callBack
 * Methode: USE
*/
app.use(express.json());

app.use("/api", router);

/**
 * Sécurité DDOS
 * Permet de limité les requêtes d'une même IP à 1000 par min
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
