/* Import des Types */
import { ENV_config_Type } from "./env.config.type";

/**
 * Récupère de manière stricte et sécurisée une variable d'environnement.
 * Bloque immédiatement l'exécution (Fail-Fast) si la variable est manquante ou vide.
 * 
 * @pure
 * @param {ENV_config_Type} key - La clé typée de la variable d'environnement.
 * @returns {string} La valeur de la variable d'environnement (garantie non vide).
 */

function ENV(key: ENV_config_Type): string {
    const value: string | undefined = import.meta.env[key];

    if (!value || value.trim() === "") {
        throw new Error(`[CRITICAL ENV ERROR]: La variable d'environnement "${key}" est manquante ou vide dans votre fichier .env !`);
    }

    return value;
}

export { ENV };
