import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

/* Ce fichier de config ne s'applique que lorsque que l'on fait npm run dev, pas en production donc aucun problème */

export default defineConfig(() => {

    /* Récupère le chemin absolue ou est exécuté ce fichier */
    const root = process.cwd();

    /* On récupère la variable d'environnement injectée par Docker */
    const viteNodeEnv = process.env.VITE_NODE_ENV || 'development';

    /* Typage clé valeur des variables d'environnements */
    let envDev: Record<string, string> = {};

    /* Initialisation conditionnelle et chargement des variables d'environnement en fonction du mode (development) */
    /* depuis .env.development et .env (fallback), filtrées sur le préfixe VITE_. */
    if (viteNodeEnv === 'development') {
        envDev = loadEnv('development', root, 'VITE_'); // .env.development
    } 


    /* Fusion manuelle des variables (ordre de priorité : configurable, premier lu premier chargé) */
    const env: Record<string, string> = {
        ...envDev,
    };

    /* ✅ Injection dans process.env pour un usage possible dans ce fichier */
    for (const [key, value] of Object.entries(env)) {
        process.env[key] = value;
   }

    return {
        plugins: [react()],
        server: {
            host: true,
            port: 4500,
        },
  };
});
