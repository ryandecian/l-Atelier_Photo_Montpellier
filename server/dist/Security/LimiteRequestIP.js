"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// 🔥 Middleware de protection contre le spam et les attaques DoS
const LimiteRequestIP = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // ⏳ Fenêtre de 15 minutes
    max: 1000, // 🚦 Maximum 1000 requêtes par IP dans la fenêtre
    message: { reponse: "Trop de requêtes envoyées, veuillez réessayer plus tard." },
    standardHeaders: true, // 🔥 Active `RateLimit-Limit`, `RateLimit-Remaining`
    legacyHeaders: false, // ❌ Désactive les anciens headers `X-RateLimit`
});
exports.default = LimiteRequestIP;
