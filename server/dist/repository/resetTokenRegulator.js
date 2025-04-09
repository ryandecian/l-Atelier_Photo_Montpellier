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
exports.getTokenResetRepository = getTokenResetRepository;
exports.deleteTokenResetRepository = deleteTokenResetRepository;
exports.getOneTokenResetRepository = getOneTokenResetRepository;
exports.deletOneTokenResetRepository = deletOneTokenResetRepository;
const config_1 = __importDefault(require("../database/config"));
// Récupération de tout les id et dates d'expiration dans la DB
function getTokenResetRepository() {
    return __awaiter(this, void 0, void 0, function* () {
        const [results] = yield config_1.default.query("SELECT id, expires_at FROM reset_password");
        return results;
    });
}
// Suppression des tokens ciblés par un id dans la DB
function deleteTokenResetRepository(tabExpiredToken) {
    return __awaiter(this, void 0, void 0, function* () {
        // Vérification si le tableau est vide
        if (tabExpiredToken.length === 0) {
            return;
        }
        // Stockage de la requête SQL
        const querySQL = "DELETE FROM reset_password WHERE id IN (?)";
        // Exécution de la requête SQL
        const [results] = yield config_1.default.query(querySQL, [tabExpiredToken]);
        return results.affectedRows;
    });
}
// Récupération d'un token cible dans la DB
function getOneTokenResetRepository(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const [results] = yield config_1.default.query("SELECT * FROM reset_password WHERE token = ?", [token]);
        return results;
    });
}
// Suppression d'un token ciblé dans la DB
function deletOneTokenResetRepository(token) {
    return __awaiter(this, void 0, void 0, function* () {
        const [results] = yield config_1.default.query("DELETE FROM reset_password WHERE token = ?", [token]);
        return results.affectedRows;
    });
}
