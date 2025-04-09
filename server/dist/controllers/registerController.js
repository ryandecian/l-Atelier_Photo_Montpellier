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
const express_1 = __importDefault(require("express"));
const registerController = express_1.default.Router();
// Import des Middlewares :
const RouteLimiterRequestIP_1 = __importDefault(require("../Security/middlewareSecurity/RouteLimiterRequestIP"));
const VerifyKeys_1 = __importDefault(require("../middleware/VerifyKeys/VerifyKeys"));
// Import des Repositories :
const emailRepository_1 = __importDefault(require("../repository/emailRepository"));
const insertUserRepository_1 = __importDefault(require("../repository/insertUserRepository"));
// Impot des Outils :
const hashArgonUtils_1 = require("../utils/hashArgonUtils");
// URI : /api/register
registerController.post("/", 
// Vérification : 
RouteLimiterRequestIP_1.default, (0, VerifyKeys_1.default)(["firstname", "lastname", "email", "password"]), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        /* Logique métier 1 : Vérification si l'email existe */
        const dataUser = yield (0, emailRepository_1.default)(req.body.email);
        // Si l'email existe déjà dans la DB, on ne peut pas continuer.
        if (dataUser.length > 0) { // Si c'est supérieur à 0, c'est que l'email existe déjà
            res.status(409).json({ message: "Cet email est déjà utilisé. Veuillez en choisir un autre." });
            console.error({
                identity: "registerController.ts",
                type: "controller",
                URI: "/api/register",
                methode: "POST",
                metier: "Logique métier 1",
                codeStatus: "409 : Conflict",
                chemin: "/server/src/middleware/VerifyEmail/VerifyEmailFalse.ts",
                "❌ Nature de l'erreur": "L'email existe déjà dans la DB, impossible de continuer.",
            });
            return;
        }
        /* Logique métier 2 : Hachage du mot de passe du nouvelle utilisateur */
        // On hache le mot de passe avant de l'insérer dans la DB
        const hash = yield (0, hashArgonUtils_1.hashPasswordArgonUtils)(req.body.password);
        // On remplace le mot de passe en clair par le mot de passe haché
        req.body.password = hash;
        /* Logique métier 3 : Insertion de l'utilisateur dans la DB */
        // On insère l'utilisateur dans la DB
        const insertUser = yield (0, insertUserRepository_1.default)(req.body.firstname, req.body.lastname, (_a = req.body.adress) !== null && _a !== void 0 ? _a : null, req.body.email, req.body.password);
        if (insertUser.affectedRows === 0) {
            res.status(400).json({ message: "Erreur lors de l'enregistrement de l'utilisateur." });
            console.error({
                identity: "registerController.ts",
                type: "controller",
                URI: "/api/register",
                methode: "POST",
                metier: "Logique métier 3",
                codeStatus: "400 : Bad Request",
                chemin: "/server/src/middleware/InsertDB/InsertUser.ts",
                "❌ Nature de l'erreur": "Erreur lors de l'enregistrement de l'utilisateur dans la DB.",
            });
            return;
        }
        /* Logique métier 4 : Réponse de succès */
        res.status(201).json({ message: "Enregistrement accepté." });
        return;
    }
    catch (error) {
        res.status(500).json({ message: "Erreur interne serveur." });
        console.error({
            identity: "registerController.ts",
            type: "controller",
            URI: "/api/register",
            methode: "POST",
            codeStatus: "500 : Internal Server Error",
            chemin: "/server/src/middleware/VerifyEmail/VerifyEmailFalse.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
}));
exports.default = registerController;
