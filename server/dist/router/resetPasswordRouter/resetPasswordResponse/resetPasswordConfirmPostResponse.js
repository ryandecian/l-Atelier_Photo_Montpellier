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
Object.defineProperty(exports, "__esModule", { value: true });
function resetPasswordConfirmPostResponse(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.status(200).json({
                reponse: "Votre mot de passe a bien été reinitialisée",
                id: req.body.dataUser.id,
                firstname: req.body.dataUser.firstname,
                lastname: req.body.dataUser.lastname,
                email: req.body.dataUser.email,
            });
            return;
        }
        catch (error) {
            res.status(500).json({ error: "Erreur interne serveur." });
            console.error({
                identity: "resetPasswordConfirmPostResponse.ts",
                type: "Middleware de réponse",
                chemin: "/server/src/router/resetPasswordRouter/resetPasswordResponse/resetPasswordConfirmPostResponse.ts",
                "❌ Nature de l'erreur": "Erreur non gérée dans le serveur !",
                details: error,
            });
            return;
        }
    });
}
exports.default = resetPasswordConfirmPostResponse;
