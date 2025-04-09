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
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
/**
 * Middleware pour limiter les tentatives de connexion sur `/login`
 */
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 5 * 60 * 1000, // ⏳ Fenêtre de 5 minutes
    max: 10, // 🔥 Maximum 10 tentatives par IP dans la fenêtre
    standardHeaders: true, // 🔥 Active `RateLimit-Limit`, `RateLimit-Remaining`
    legacyHeaders: false, // ❌ Désactive les anciens headers `X-RateLimit`
    message: { reponse: "Trop de tentatives de connexion. Réessayez dans 5 minutes." },
    handler: (req, res) => {
        res.set("Retry-After", String(5 * 60)); // ⏳ Ajoute `Retry-After: 300` (5 min)
        res.status(429).json({
            reponse: "Trop de tentatives de connexion. Réessayez dans 5 minutes.",
            retryAfter: "5 minutes",
        });
        console.error({
            identity: "RouteLimiterRequestIP.ts",
            type: "middleware",
            chemin: "/server/src/Security/middlewareSecurity/RouteLimiterRequestIP.ts",
            "❌ Nature de l'erreur": "L'IP a dépassé la limite de tentatives de connexion",
            ip: req.ip,
            route: req.originalUrl,
        });
        return; // ✅ Stoppe l'exécution ici pour éviter `next()`
    },
});
/**
 * Middleware avec `try/catch` pour capturer d'éventuelles erreurs
 */
function RouteLimiterRequestIP(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield limiter(req, res, next); // 🔥 Exécute `rateLimit`
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "RouteLimiterRequestIP.ts",
                type: "middleware",
                chemin: "/server/src/Security/middlewareSecurity/RouteLimiterRequestIP.ts",
                "❌ Nature de l'erreur": "Erreur dans le middleware de limitation de connexion",
                details: error,
            });
            return; // ✅ Stoppe bien l'exécution après une erreur
        }
    });
}
exports.default = RouteLimiterRequestIP;
