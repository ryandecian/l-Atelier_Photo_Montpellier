# Étape 1 : Build des fichiers TypeScript
FROM node:20-alpine AS build

# Crée un dossier de travail
WORKDIR /app

# Copie les fichiers nécessaires
COPY package*.json tsconfig.json ./

# Installe les dépendances sans les devDependencies
RUN npm install --omit=dev

# Copie le code source
COPY ./src ./src

# Compile TypeScript en JavaScript
RUN npm run build

# Étape 2 : Exécution avec Node uniquement (image minimaliste)
FROM node:20-alpine

WORKDIR /app

# Copie uniquement le nécessaire depuis le build
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Dossier pour les fichiers uploadés
RUN mkdir -p /app/uploads

# Déclare le port utilisé par le serveur
EXPOSE 8080

# Commande de démarrage
CMD ["node", "dist/index.js"]
