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
// Objectif : Effectuer la requete SQL pour récupérer les albums
// Attention, si la requete ne renvoie pas de données, le tableau sera vide.
// Ce middleware ne renverra pas d'erreur si aucun album n'est trouvé.
// C'est le middleware albumGetResponse qui renverra une réponse adaptée.
function VerifyAlbum(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const [dataAlbum] = yield config_1.default.query("SELECT * FROM album");
            /**
             * Mise a disposition de données
             */
            req.body.dataAlbum = dataAlbum;
            next();
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "VerifyAlbum.ts",
                type: "middleware",
                chemin: "/server/src/middleware/VerifyAlbum/VerifyAlbum.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
        }
    });
}
exports.default = VerifyAlbum;
