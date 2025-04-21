# Partie 1 : Builder l'app React avec Vite
# Étape 1 : Choisir une base officielle
FROM node:23-alpine AS build

# Étape 2 : Créer un dossier pour ton app
WORKDIR /app

# Étape 3 : Copier les fichiers dans l’image
COPY package*.json ./
RUN npm install

# Étape 4 : Ajouter le reste du code de l'app
COPY . .
RUN npm run build

# Partie 2 : Servir l'app avec NGINX Alpine
FROM nginx:alpine

# Supprimer les fichiers par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers buildés dans le dossier Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
