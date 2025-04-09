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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const SECRET_KEY = process.env.SECRET_KEY_TOKEN;
function Create_JWT_Middleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!SECRET_KEY) {
                res.status(500).json({ error: "Erreur interne serveur." });
                console.error({
                    identity: "Create_JWT_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/JWT/Create_JWT_Middleware.ts",
                    "❌ Nature de l'erreur": "SECRET_KEY_TOKEN est absent dans .env !",
                });
                return;
            }
            // ✅ Définition du payload avec `iat` et `exp`
            const expiresIn = 60 * 60; // 1 heure
            const now = Math.floor(Date.now() / 1000); // Date actuelle en timestamp UNIX
            const payload = {
                id: req.body.dataUser.id,
                email: req.body.dataUser.email,
                iat: now, // ⏳ Date de création du token
            };
            const token = jsonwebtoken_1.default.sign(payload, SECRET_KEY, { expiresIn });
            // ✅ Sécurisation de `req.body.jwt`
            if (req.body.jwt) {
                console.warn({
                    identity: "Create_JWT_Middleware.ts",
                    type: "sécurité",
                    chemin: "/server/src/middleware/JWT/Create_JWT_Middleware.ts",
                    "⚠️ Alerte !": "Tentative de modification de `req.body.jwt` détectée. Le serveur écrase la valeur !",
                    "⚠️ Alerte": "Le serveur écrase la valeur pour sécuriser !",
                });
            }
            req.body.jwt = token;
            next();
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "Create_JWT_Middleware.ts",
                type: "middleware",
                chemin: "/server/src/middleware/JWT/Create_JWT_Middleware.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    });
}
exports.default = Create_JWT_Middleware;
