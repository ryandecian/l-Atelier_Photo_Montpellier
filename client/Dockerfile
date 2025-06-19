# Étape 1 : Build avec Node + Alpine
FROM node:20-alpine AS build

# Crée un dossier de travail
WORKDIR /app

# Copie uniquement les fichiers nécessaires à l'installation
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste du projet
COPY . .

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
