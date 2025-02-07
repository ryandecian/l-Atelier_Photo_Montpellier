/**
 * Import des .env pour l'utilisation
 */
import "dotenv/config";

// Get the client
import mysql from 'mysql2/promise';

// Fonction pour créer la connexion avec gestion des erreurs
async function createConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    return connection;
  }

  catch (error) {
    console.error("❌ Erreur lors de la connexion à MySQL :", error);
    throw error; // Relancer l'erreur pour que l'application puisse la gérer
  }
}

// Export d'une promesse de connexion
export const dbConnection = createConnection();
