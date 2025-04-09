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
function InsertUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // ✅ Envois des informations dans la DB
            const [results] = yield config_1.default.query("INSERT INTO user (firstname, lastname, address, email, password) VALUES (?, ?, ?, ?, ?)", [req.body.firstname, req.body.lastname, req.body.address, req.body.email, req.body.password]);
            // ✅ Vérification : Si la DB ne rejete pas les données
            if (results.affectedRows === 0) {
                res.status(400).json({ reponse: "La requête a été rejeté par la base de donnée" });
                console.error({
                    identity: "InsertUser.ts",
                    type: "middleware",
                    chemin: "/server/src/middleware/InsertDB/InsertUser.ts",
                    "❌ Nature de l'erreur": "Rejet des infos à enregistrer par la DB SQL",
                    analyse: "A ce stade, les Keys obligatoire demandé par la table son ok",
                    cause1: "Les paramètres de la table ont changé",
                    cause2: "Le middleware VerifyKeys.ts à été modifié ou mal paramétré",
                });
                return;
            }
            ;
            // ✅ Stocke l’ID du nouvel utilisateur pour d'autres traitements si besoin
            req.body.id = results.insertId;
            next();
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "InsertUser.ts",
                type: "middleware",
                chemin: "/server/src/middleware/InsertDB/InsertUser.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
        }
    });
}
;
exports.default = InsertUser;
