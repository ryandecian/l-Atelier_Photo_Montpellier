import chalk from "chalk";

const valeurCritical = ["Critical", "critical", "Critique", "critique", "1", 1, "Haut", "haut"] as const;
const valeurWarning = ["Warning", "warning", "Avertissement", "avertissement", "2", 2, "Moyen", "moyen", "Faible", "faible", "Bas", "bas"] as const;

type ValeurCritical = typeof valeurCritical[number];
type ValeurWarning = typeof valeurWarning[number];
type NiveauErreur = ValeurCritical | ValeurWarning | undefined;

type ParamsType = {
  env: string | undefined;
  lvl?: NiveauErreur;
};

function test(env: ParamsType["env"], lvl?: ParamsType["lvl"]): string {
  let env_verify = env;
  let lvl_verify = lvl;

  if (valeurWarning.includes(lvl as any) || !lvl) {
    lvl_verify = "Warning";
  }
  if (valeurCritical.includes(lvl as any)) {
    lvl_verify = "Critical";
  }

  if (env_verify === undefined) {
    const lignes = [
      `identity : verifEnv.config.ts`,
      `type : fichier de configuration`,
      `chemin : /server/src/config/verifEnv.config.ts`,
      `❌ Nature de l'erreur : La variable d'environnement est non définie. Le serveur ne peut pas démarrer sans cette variable !`,
      `⚠️ Vérifiez que le fichier .env.${process.env.NODE_ENV} existe et contient la variable !`,
    ];

    const color = lvl_verify === "Critical" ? chalk.red : chalk.yellow;
    lignes.forEach((line) => console.error(color(line)));

    if (lvl_verify === "Critical") process.exit(1);
    return ""; // En Warning, on retourne une string vide pour éviter undefined
  }

  return env_verify;
}

export default test;
