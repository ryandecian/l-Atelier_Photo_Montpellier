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

# Étape 2 : Serveur de production avec Nginx + Alpine
FROM nginx:1.25-alpine

# Nettoie les fichiers Nginx par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copie le build depuis l'étape précédente
COPY --from=build /app/dist /usr/share/nginx/html

# Copie la config Nginx personnalisée ici (incluant error_page 404 etc.)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Ouvre le port 80 (HTTP standard)
EXPOSE 80

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]


# nginx → exécute le serveur
# -g → permet de passer des options globales
# 'daemon off;' → dit à nginx de ne pas se lancer en arrière-plan, ce qui est crucial dans Docker !