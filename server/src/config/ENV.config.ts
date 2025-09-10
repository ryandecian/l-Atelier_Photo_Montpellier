import chalk from "chalk";

/**
 * Ce composant permet au démarrage du serveur de vérifier et récupérer toute les variables d'environnement nécessaires.
 * Si une ou plusieurs variables sont manquantes, cela permet de lancer immédiatement un averticement dans la console. 
 */

/* Liste des variable d'environnement du serveur à récupérer et tester */
const envVariablesListe = [
    "VITE_DOMAIN_CLIENT",
    "VITE_DOMAIN_API_SERVER",
    "VITE_PORT_API_SERVER",
    "DB_HOST",
    "DB_PORT",
    "DB_USER",
    "DB_PASSWORD",
    "DB_NAME",
    "MAIL_SERVER_ADMIN",
    "MAIL_PASSWORD",
    "SECRET_KEY_TOKEN_CLIENT",
    "SECRET_KEY_TOKEN_API_SERVER"
]

/* Création des types à partir du tableau. */
/* Cela donne : DB_HOST: string, DB_PORT: string etc... */
type EnvVariablesType = {
    [K in (typeof envVariablesListe)[number]]: string;
};

function getEnvVariables() {
    /* Création d'un objet vide ne pouvant contenir que les types définis pour valeur */
    const envVars: Partial<EnvVariablesType> = {};

    /* Boucle de récupération des variables d'environnement */
    envVariablesListe.forEach((key) => {
        const value = process.env[key];
        /* Si la variable n'existe pas, cela renvois un avertissement */
        if (!value) {
            console.info(`⚠️  Variable d'environnement manquante : ${key}`);
        }
        /* Si la variable existe, on l'ajoute à l'objet envVars sous forme de clé/valeur */
        else {
            envVars[key] = value;
        }
    });

    return (
        envVars
    )
}

const ENV = getEnvVariables();

export {ENV};

/**
 * Documentation
 * 
 * Pour utiliser ce composant il faut importer ENV puis lancer une vérification
 * pour savoir si la variable cible existe bien et éliminer le possible undefined
 * 
 * Exemple avec if : 
 * 
 * if (!ENV.DB_HOST) {
 *     res.status(500).json({ message: "Erreur interne serveur." });
 * }
 */

function ENV_SAFE(key: keyof typeof ENV): string  {
    const value = ENV[key];

    if (!value) {
        console.error(chalk.yellow(`❌ La variable d'environnement ${key} est manquante`));
        process.exit(1); // Arrête le serveur immédiatement
    }

    return (
        value
    );
}

export {ENV_SAFE};

/**
 * Documentation : 
 * 
 * Pour utiliser ce composant il faut faire comme ceci : 
 * ENV_SAFE("Variable_cible")
 * 
 * Cela garantie une variable existante
 */
