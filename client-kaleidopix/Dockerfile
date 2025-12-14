# Étape 1 : Build avec Node + Alpine
FROM node:20-alpine AS build

# Crée un dossier de travail
WORKDIR /app

# Variables d'environnement de build
ARG VITE_NODE_ENV
ARG VITE_DOMAIN_CLIENT
ARG VITE_DOMAIN_API_SERVER

# Copie uniquement les fichiers nécessaires à l'installation
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du projet
COPY . .

# Injecte les variables dans l'environnement du build Vite
ENV VITE_DOMAIN_CLIENT=$VITE_DOMAIN_CLIENT
ENV VITE_DOMAIN_API_SERVER=$VITE_DOMAIN_API_SERVER
ENV VITE_NODE_ENV=$VITE_NODE_ENV

# Lance le build Vite (génère le dossier dist/)
RUN npm run build

# Étape 2 : Image minimale contenant juste les fichiers buildés
FROM alpine

# Crée un dossier de travail
WORKDIR /app

# Copie uniquement le dossier dist généré depuis l’étape précédente
COPY --from=build /app/dist ./dist

# Ce conteneur ne sert pas les fichiers directement
# Il sera utilisé uniquement pour partager le dossier dist avec Nginx via un volume
CMD ["sh"]
