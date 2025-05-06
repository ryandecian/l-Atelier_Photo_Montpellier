import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    const root = process.cwd();

    // On récupère la variable d'environnement injectée par Docker
    const viteNodeEnv = process.env.VITE_NODE_ENV || 'development';

    let envBase = {};
    let envRoot = {};

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
    const env = {
        ...envBase,
        ...envRoot
    };

    return {
        plugins: [react()],
        server: {
            host: true,
            port: 4000
        },

    // Redéfinit import.meta.env à la main pour bloquer tout chargement implicite, ne charge plus les .env par défauts
    define: {
        'import.meta.env': JSON.stringify(env)
    }
  };
});
