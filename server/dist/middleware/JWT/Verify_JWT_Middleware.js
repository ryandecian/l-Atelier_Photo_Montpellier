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
function Verify_JWT_Middleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            if (!SECRET_KEY) {
                console.error({
                    identity: "Verify_JWT_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
                    "❌ Nature de l'erreur": "SECRET_KEY_TOKEN est absent dans .env !",
                });
                res.status(500).json({ error: "Erreur interne serveur." });
                return;
            }
            // ✅ Récupération du token depuis les cookies ou l’Authorization header
            const token = ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.jwtToken) || ((_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1]);
            if (!token) {
                res.status(401).json({ error: "Accès refusé. Aucun token fourni." });
                console.warn({
                    identity: "Verify_JWT_Middleware.ts",
                    type: "sécurité",
                    chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
                    "⚠️ Alerte !": "Tentative d'accès sans token JWT.",
                });
                return;
            }
            // ✅ Vérification et déchiffrement du token
            jsonwebtoken_1.default.verify(token, SECRET_KEY, (err, decoded) => {
                if (err) {
                    res.status(403).json({ error: "Token invalide ou expiré." });
                    console.warn({
                        identity: "Verify_JWT_Middleware.ts",
                        type: "sécurité",
                        chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
                        "⚠️ Alerte !": "Tentative d'accès avec un token invalide ou expiré.",
                        details: err,
                    });
                    return;
                }
                // ✅ Stocke les infos du token dans req.user
                req.body.user = decoded;
                req.user = decoded;
                next();
            });
        }
        catch (error) {
            console.error({
                identity: "Verify_JWT_Middleware.ts",
                type: "middleware",
                chemin: "/server/src/middleware/JWT/Verify_JWT_Middleware.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            res.status(500).json({ error: "Erreur interne serveur." });
        }
    });
}
exports.default = Verify_JWT_Middleware;
