# Étape 1 : Build des fichiers TypeScript
FROM node:23-alpine AS build

# Crée un dossier de travail
WORKDIR /app

# Copie les fichiers de conf et dépendances
COPY package*.json tsconfig.json ./

# Installe les dépendances
RUN npm install

# Copie le code source
COPY ./src ./src

# Compile TypeScript en JavaScript
RUN npm run build

# Étape 2 : Exécution en image minimale
FROM node:23-alpine

WORKDIR /app

# Copie uniquement le dossier dist et node_modules depuis l'étape précédente
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY package.json .

# Déclare le port exposé par le serveur
EXPOSE 8080

# Lance le serveur compilé
CMD ["npm", "start"]
