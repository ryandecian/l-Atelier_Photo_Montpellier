/**
 * Import des .env pour l'utilisation
 */
import "dotenv/config";

// Get the client
import mysql from 'mysql2/promise';

// Stockage du pool pour éviter sa recréation multiple
let pool: mysql.Pool | null = null;

// Fonction pour créer le pool de connexions
function createConnection() {
  if (!pool) { // ✅ Vérifie si un pool existe déjà
    try {
      pool = mysql.createPool({
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
      throw error;
    }
  }

  else {
    console.log("✅ Pool de connexions MySQL déjà créé !")
  }

  return pool;
}

// Export du pool unique (utilisation de la même connexion à chaque fois)
export const usePoolConnection = createConnection();
// Export de la fonction permettant d'obtenir une connexion
export default createConnection;
