"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import général
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router/router"));
const cors_1 = __importDefault(require("cors"));
// Import des composants de sécurités
const LimiteRequestIP_1 = __importDefault(require("./Security/LimiteRequestIP"));
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)({
    origin: "http://localhost:4000", // Ton client Vite
    credentials: true,
}));
/**
 * Pour lire le body d'un (request) contenant un json, j'ai besoin d'importer un middleware
 * d'express pour lire la request correctement.
 * Action callBack
 * Methode: USE
*/
app.use(express_1.default.json());
app.use("/api", router_1.default);
/**
 * Sécurité DDOS
 * Permet de limité les requêtes d'une même IP à 1000 par min
 * Déblocage automatique
 */
app.use(LimiteRequestIP_1.default);
/**
 * Route de base
 * Path: /
 * Action callBack
 * Methode: GET
 */
app.get("/", (req, res) => {
    res.status(200).send("API de Anne SAUNIER !!!");
});
/**
 * Gestion des routes innexistante
 */
app.use((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(404).json({
        success: false,
        message: "Route non trouvée",
        method: req.method,
        path: req.originalUrl,
    });
    console.error({
        identity: "index.ts",
        type: "Gestionnaire des routes inconnues",
        chemin: "/server/src/index.ts",
        "❌ Nature de l'erreur": "Tentative d'accès à une route inexistante !",
        method: req.method,
        path: req.originalUrl,
        contenu: req.body
    });
}));
/**
 * Le server se lance sur le port 8080
 */
app.listen(port, () => {
    console.log(`Server lancé sur http://localhost:${port}`);
});
