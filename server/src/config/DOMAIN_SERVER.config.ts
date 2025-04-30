import chalk from "chalk";
import VerfifEnv from "./ENV.config.ts";
import { Verify } from "crypto";

/**
 * Détermination de l'URL du serveur avec vérification
 */

function DOMAIN_SERVER() {
    let DOMAIN_SERVER_VERIFY: string | undefined = process.env.DOMAIN_SERVER;

    if (DOMAIN_SERVER_VERIFY === undefined) {
        console.error(
            chalk.red(
                {
                    identity: "DOMAIN_SERVER.config.ts",
                    type: "fichier de configuration",
                    chemin: "/server/src/config/DOMAIN_SERVER.config.ts",
                    "❌ Nature de l'erreur": `La variable DOMAIN_SERVER est non définie. Le serveur ne peut pas démarrer sans cette variable !`,
                    "⚠️ Vérifiez que le fichier" :`.env.${process.env.NODE_ENV} existe et contient la variable DOMAIN_SERVER !`,
                }
            )
        );
        process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
    }
}

VerfifEnv("")