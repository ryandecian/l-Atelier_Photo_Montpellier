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
const config_1 = __importDefault(require("../../database/config"));
// Objectif, vérifier que l'email reçu existe bien dans la DB.
function VerifyEmailTrue(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // ✅ Vérification : l'email reçu existe t-il dans la DB ?
            const [dataUser] = yield config_1.default.query("SELECT * FROM user WHERE email= ?", [req.body.email]);
            // ✅ Si l'email n'existe pas, sa dégage, on arrête l'exécution
            if (dataUser.length === 0) {
                res.status(404).json({ reponse: "Email ou mot de passe incorrect" });
                console.error({
                    identity: "VerifyEmailTrue.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/VerifyEmail/VerifyEmailTrue.ts",
                    "❌ Nature de l'erreur": "L'email n'existe pas dans la DB, impossible de continuer.",
                });
                return;
            }
            /**
             * Mise a disposition de données
             */
            req.body.dataUser = dataUser[0];
            next();
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "VerifyEmailTrue.ts",
                type: "middleware",
                chemin: "/server/src/middleware/VerifyEmail/VerifyEmailTrue.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    });
}
exports.default = VerifyEmailTrue;
