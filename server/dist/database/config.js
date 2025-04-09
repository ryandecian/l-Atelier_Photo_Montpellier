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
exports.usePoolConnection = void 0;
exports.useComplexConnection = useComplexConnection;
/**
 * Import des .env pour l'utilisation
 */
require("dotenv/config");
const promise_1 = __importDefault(require("mysql2/promise"));
// ✅ Stockage du pool dans une variable globale
let pool = null;
/**
 * Fonction pour initialiser le pool avec gestion des erreurs
 */
function initializePool() {
    if (!pool) {
        try {
            pool = promise_1.default.createPool({
                host: process.env.DB_HOST || "localhost",
                port: Number(process.env.DB_PORT || "3306"),
                user: process.env.DB_USER || "root",
                password: process.env.DB_PASSWORD || "password",
                database: process.env.DB_NAME || "DB_AESF",
                waitForConnections: true, // ✅ Attend qu'une connexion soit disponible au lieu de planter
                connectionLimit: 10, // ✅ Maximum 10 connexions simultanées
                queueLimit: 0 // ✅ Aucune limite d'attente (les requêtes attendent leur tour)
            });
            console.log("✅ Pool de connexions MySQL créé avec succès !");
        }
        catch (error) {
            console.error("❌ Erreur lors de la création du pool MySQL :", error);
            throw error; // 🔥 Permet de stopper l'application si le pool ne peut pas être créé
        }
    }
    return pool;
}
/**
 * Fonction pour récupérer une connexion du pool avec `try/catch`
 */
function useComplexConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!pool) {
            console.error("❌ Le pool de connexions MySQL n'a pas été initialisé !");
            throw new Error("Le pool de connexions MySQL n'a pas été initialisé !");
        }
        try {
            const connection = yield pool.getConnection();
            return connection;
        }
        catch (error) {
            console.error("❌ Erreur lors de la récupération d'une connexion MySQL :", error);
            throw error;
        }
    });
}
// ✅ Initialisation du pool au démarrage
exports.usePoolConnection = initializePool();
exports.default = exports.usePoolConnection;
/* Note d'utilisation : */
// usePoolConnection
// Utilisation pour des requête simple comme : 
// SELECT avec ou sans WHERE, INSERT, UPDATE, DELETE
// useComplexConnection
// Utile pour : Transactions ou plusieurs requêtes dans la même route
// Permet une utilisation manuel d'une des 10 connections possible dans le pool
// Il est cependant necessaire de refermer la connection avec : 
//  finally {
//     if (connection) connection.release(); // ✅ Toujours libérer la connexion
//  }
