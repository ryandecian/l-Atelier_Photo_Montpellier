/* Import des Types */
import { ENV_config_Type } from "./env.config.type";

/**
 * Ce composant permet une utilisation simplifiée et stricte des variables d'environnement.
 * Le typage est strict et permet donc d'éviter toute erreur de syntaxe ou utilisation de variable inexistante.
 * Si une ou plusieurs variables sont manquantes, cela permet de lancer immédiatement un avertissement dans la console.
 */

function ENV(key: ENV_config_Type): string | undefined {
    const value : string | undefined = import.meta.env[key];

    if (typeof value === "undefined" || value.trim() === "") {
        console.error(`[ENV] Variable d'environnement manquante : ${key}`);
        return undefined;
    }

    return value;
}

export { ENV };
