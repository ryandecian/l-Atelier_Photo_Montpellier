import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import environnement_type from '../types/environnement.config.type';
import chalk from 'chalk';

/**
 * Détermine le fichier .env à charger
 * 
 * NODE_ENV est une variable d'environnement du docker-compose.yml qui indique l'environnement d'exécution (développement, production, etc.).
 * Si elle n'est pas définie, on utilise "development" par défaut.
 */
const VerifENV = (process.env.NODE_ENV || "development") as environnement_type;
const envDevPath: string = path.resolve(__dirname, `../../.env.${VerifENV}`);

if (VerifENV === "development") {
  // Vérifie si le fichier .env.base existe
  if (!fs.existsSync(envDevPath)) {
    console.error(
      {
        identity: "dotenv.config.ts",
        type: "fichier de configuration",
        chemin: "/server/src/config/dotenv.config.ts",
        "❌ Nature de l'erreur": `Fichier .env.development introuvable !`,
        route: envDevPath,
      }
    );
    process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
  }
  // Charge le fichier .env.development pour les variables d'environnements
  dotenv.config({ path: envDevPath });
  console.info(chalk.magenta(`Environnement .env.${VerifENV} chargé !`));
}
