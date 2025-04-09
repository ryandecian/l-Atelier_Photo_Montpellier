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
const crypto_1 = __importDefault(require("crypto"));
const config_1 = __importDefault(require("../../database/config"));
function Create_Crypto_Middleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const userId = (_a = req.body.dataUser) === null || _a === void 0 ? void 0 : _a.id;
            if (!userId) {
                res.status(500).json({ error: "Erreur interne serveur." });
                console.error({
                    identity: "Create_Crypto_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/Crypto_Middleware/Create_Crypto_Middleware.ts",
                    "❌ Nature de l'erreur": "Le middleware VerifyEmailTrue.ts n'a pas mis a disposition dataUser.",
                    cause1: "Le middleware VerifyEmailTrue.ts n'a pas été exécuté",
                    cause2: "L'id de l'utilisateur n'est pas présent et n'a pas été récupéré dans la DB.",
                });
                return;
            }
            // Générer un token sécurisé
            const token = crypto_1.default.randomBytes(32).toString("hex");
            const expiresAt = new Date(Date.now() + 3600000); // Expiration dans 1h
            const [results] = yield config_1.default.query("INSERT INTO reset_password (user_id, token, expires_at) VALUES (?, ?, ?)", [userId, token, expiresAt]);
            if (results.affectedRows === 0) {
                res.status(400).json({ reponse: "La requête a été rejeté par la base de donnée" });
                console.error({
                    identity: "Create_Crypto_Middleware.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/Crypto_Middleware/Create_Crypto_Middleware.ts",
                    "❌ Nature de l'erreur": "Rejet des infos à enregistrer par la DB SQL",
                    analyse: "A ce stade, les Keys obligatoire demandé par la table son ok",
                    cause1: "Les paramètres de la table ont changé",
                    cause2: "Le middleware VerifyKeys.ts à été modifié ou mal paramétré",
                });
                return;
            }
            ;
            // Lien de réinitialisation
            const resetLink = `${process.env.DOMAIN}/reset-password?token=${token}`;
            // Préparation des données pour l'envoi par email
            // Stocker la réponse de la DB pour l'envoyer par email
            req.body.to = req.body.email;
            req.body.subject = "Réinitialisation de votre mot de passe";
            req.body.html = `<p>Bonjour,</p>
                   <p>Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe :</p>
                   <a href="${resetLink}">${resetLink}</a>
                   <p>Ce lien expirera dans 1 heure.</p>`,
                next();
        }
        catch (error) {
            console.error({
                identity: "Create_Crypto_Middleware.ts",
                type: "middleware",
                chemin: "/server/src/middleware/Crypto_Middleware/Create_Crypto_Middleware.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            res.status(500).json({ error: "Erreur interne server." });
        }
    });
}
exports.default = Create_Crypto_Middleware;
