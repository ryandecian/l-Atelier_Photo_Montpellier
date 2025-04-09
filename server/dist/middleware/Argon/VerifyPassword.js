"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const argon2 = __importStar(require("argon2"));
function VerifyPassword(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            /**
             * Comparaison des mots de passe :
             * Mot de passe envoyé par le client
             * Mot de passe récupéré en DB par le middleware VerifyEmailTrue.ts
             */
            if (yield argon2.verify(req.body.dataUser.password, req.body.password)) {
                next();
            }
            else {
                res.status(401).json({ reponse: "Email ou mot de passe incorrect" });
                console.error({
                    identity: "VerifyPassword.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/Argon/VerifyPassword.ts",
                    "❌ Nature de l'erreur": "Le mot de passe reçu est différent de la DB, accès interdit",
                    analyse: "L'email existe car déjà vérifié par le middleware VerifyEmailTrue",
                    cause1: "Le middleware VerifyEmailTrue n'a pas mis à disposition les dataUser récupéré en DB"
                });
                return;
            }
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "VerifyPassword.ts",
                type: "middleware",
                chemin: "/server/src/middleware/Argon/VerifyPassword.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    });
}
exports.default = VerifyPassword;
