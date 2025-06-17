import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {

    // Récupère le chemin absolue ou est exécuté ce fichier
    const root = process.cwd();

    // On récupère la variable d'environnement injectée par Docker
    const viteNodeEnv = process.env.VITE_NODE_ENV || 'development';

    let envBase: Record<string, string> = {};
    let envRoot: Record<string, string> = {};

    // Initialisation conditionnelle
    if (viteNodeEnv === 'production') {
        envBase = loadEnv('base', root, 'VITE_'); // .env.base
        envRoot = loadEnv('production', root, 'VITE_'); // .env.root
    } 
    else if (viteNodeEnv === 'development') {
        envBase = loadEnv('base', root, 'VITE_'); // peut être partagé
        envRoot = loadEnv('development', root, 'VITE_'); // .env.development
    }
    

    // Fusion manuelle des variables (ordre de priorité : root > base)
    const env: Record<string, string> = {
        ...envBase,
        ...envRoot
    };

    // ✅ Injection dans process.env pour un usage possible dans ce fichier
    for (const [key, value] of Object.entries(env)) {
        process.env[key] = value;
   }

    return {
        plugins: [react()],
        server: {
            host: true,
            port: process.env.VITE_PORT_FRONT || 4000
        },

    // // Redéfinit import.meta.env à la main pour bloquer tout chargement implicite, ne charge plus les .env par défauts
    // define: {
    //     'import.meta.env': JSON.stringify(env)
    // }
  };
});
