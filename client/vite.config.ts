import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  const root = process.cwd();

  // Charge uniquement les fichiers souhaités :
  const envBase = loadEnv('base', root, 'VITE_'); // .env.base
  const envRoot = loadEnv('root', root, 'VITE_'); // .env.root

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
