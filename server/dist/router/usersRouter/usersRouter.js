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
const usersRouter = express_1.default.Router();
// Import des Middlewares :
const isAdmin_1 = __importDefault(require("../../middleware/isAdmin/isAdmin"));
const Verify_JWT_Middleware_1 = __importDefault(require("../../middleware/JWT/Verify_JWT_Middleware"));
const config_1 = __importDefault(require("../../database/config"));
const getAllUser_1 = __importDefault(require("../../middleware/getUsers/getAllUser"));
const getUserMe_1 = __importDefault(require("../../middleware/getUsers/getUserMe"));
const putUserMe_1 = __importDefault(require("../../middleware/putUsers/putUserMe"));
const VerifyKeys_1 = __importDefault(require("../../middleware/VerifyKeys/VerifyKeys"));
// Liste de tous les utilisateurs (admin seulement)
// URI : /api/users
usersRouter.get("/", Verify_JWT_Middleware_1.default, isAdmin_1.default, getAllUser_1.default, (req, res) => {
    try {
        // Envois de la liste de tout les utilisateurs
        res.status(200).json({ data: req.body.dataUser });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error({
            identity: "usersRouter.ts",
            type: "router",
            chemin: "/server/src/router/usersRouter/usersRouter.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
});
usersRouter.get("/me", Verify_JWT_Middleware_1.default, getUserMe_1.default, (req, res) => {
    try {
        // Envois des données de l'utilisateur
        res.status(200).json({ data: req.body.dataUser });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error({
            identity: "usersRouter.ts",
            type: "router",
            chemin: "/server/src/router/usersRouter/usersRouter.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
});
// Modification de ses propre données
// URI : /api/users/me
usersRouter.put("/me", (0, VerifyKeys_1.default)(["firstname", "lastname", "email"]), Verify_JWT_Middleware_1.default, putUserMe_1.default, (req, res) => {
    try {
        // Envois de la confirmation de la modification
        res.status(200).json({ message: "Modification réussie", data: req.body.dataUser });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error({
            identity: "usersRouter.ts",
            type: "router",
            chemin: "/server/src/router/usersRouter/usersRouter.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
});
// Modification des données d'un utilisateur (admin seulement)
// URI : /api/users/:id
usersRouter.put("/:id", (0, VerifyKeys_1.default)(["firstname", "lastname", "email"]), Verify_JWT_Middleware_1.default, isAdmin_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const [dataUser] = yield config_1.default.query("UPDATE user SET firstname = ?, lastname = ?, email = ?, address = ? WHERE id = ?", [req.body.firstname, req.body.lastname, req.body.email, req.body.address, userId]);
        // Vérification : au moins une ligne modifiée ?
        if (dataUser.affectedRows === 0) {
            res.status(404).json({ message: "Échec de la modification" });
            console.error({
                identity: "usersRouter.ts",
                type: "router",
                chemin: "/server/src/router/usersRouter/usersRouter.ts",
                "❌ Nature de l'erreur": "Échec de la modification des données de l'utilisateur.",
            });
            return;
        }
        // Envois de la confirmation de la modification
        res.status(200).json({ message: "Modification réussie" });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error({
            identity: "usersRouter.ts",
            type: "router",
            chemin: "/server/src/router/usersRouter/usersRouter.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
}));
// Suppression d'un utilisateur (admin seulement)
// URI : /api/users/:id
usersRouter.delete("/:id", Verify_JWT_Middleware_1.default, isAdmin_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const [dataUser] = yield config_1.default.query("DELETE FROM user WHERE id = ?", [userId]);
        // Vérification : au moins une ligne supprimée ?
        if (dataUser.affectedRows === 0) {
            res.status(404).json({ message: "Échec de la suppression" });
            console.error({
                identity: "usersRouter.ts",
                type: "router",
                chemin: "/server/src/router/usersRouter/usersRouter.ts",
                "❌ Nature de l'erreur": "Échec de la suppression de l'utilisateur.",
            });
            return;
        }
        // Envois de la confirmation de la suppression
        res.status(200).json({ message: "Suppression réussie" });
    }
    catch (error) {
        res.status(500).json({ error: "Erreur interne serveur." });
        console.error({
            identity: "usersRouter.ts",
            type: "router",
            chemin: "/server/src/router/usersRouter/usersRouter.ts",
            "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
            details: error,
        });
        return;
    }
}));
exports.default = usersRouter;
