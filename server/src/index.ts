// Import général
import "./config/dotenv.config";
import express, { Request, Response } from "express";

import router from "./router/router";
import cors from "cors";
import cookieParser from "cookie-parser";

import "./config/dotenv.config";
import chalk from "chalk";
import {ENV_SAFE} from "./config/ENV.config";

const app = express();
const port = ENV_SAFE("VITE_PORT_API_SERVER");

app.use(cors(
    {
        origin: ENV_SAFE("VITE_DOMAIN_CLIENT"),
        credentials: true,
    }
));

app.use(express.json());
app.use(cookieParser());
app.use("/", router);

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
    res.status(404).json(
        {
            success: false,
            message: "Route non trouvée",
            method: req.method,
            path: req.originalUrl,
        }
    );
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
app.listen(port, async () => {
    console.info(chalk.cyan(`Server lancé sur ${ await ENV_SAFE("VITE_DOMAIN_API_SERVER")}`));
});
