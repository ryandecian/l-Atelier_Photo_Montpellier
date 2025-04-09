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
function InsertNewPassword(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // ✅ Envois des informations dans la DB
            const [results] = yield config_1.default.query("UPDATE user SET password = ? WHERE id = ?", [req.body.password, req.body.dataUser.id]);
            // ✅ Vérification : Si la DB ne rejete pas les données
            if (results.affectedRows === 0) {
                res.status(400).json({ reponse: "La requête a été rejeté par la base de donnée" });
                console.error({
                    identity: "InsertNewPassword.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/InsertDB/InsertNewPassword.ts",
                    "❌ Nature de l'erreur": "Rejet des infos à enregistrer par la DB SQL",
                    cause1: "l'id utilisateur n'a pas été trouvé dans dataUser qui est mis à disposition par Verify_Crypto_Middleware.ts",
                    cause2: "L'Erreur viens forcément de Verify_Crypto_Middleware.ts qui gère le token",
                });
                return;
            }
            ;
            next();
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "InsertNewPassword.ts",
                type: "middleware",
                chemin: "/server/src/middleware/InsertDB/InsertNewPassword.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
        }
    });
}
;
exports.default = InsertNewPassword;
