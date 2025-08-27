# Déploiement – L’Atelier Photo Montpellier

Ce document décrit pas à pas la procédure de déploiement de l’application l’Atelier Photo Montpellier sur un VPS (Infomaniak) avec Docker, NGINX, MariaDB, et GitHub Actions.

## 📦 Structure du projet

.
├── client                → Application front-end (React + Vite)
├── server                → API back-end (Express + TypeScript)
├── nginx                 → Fichier nginx.conf + certificats + page statique optionnelle
├── .env                  → Variables d’environnement (voir ci-dessous)
├── docker-compose.yml    → Orchestration des conteneurs
├── README_DEPLOIEMENT.md → Ce fichier

## ⚙️ Prérequis serveur VPS

- Ubuntu 22.04 LTS
- Docker & Docker Compose (v2)
- Git
- Certbot (Let’s Encrypt)
- Clé SSH configurée avec GitHub Actions

## 🔐 Configuration NGINX (dans Docker)

Le fichier nginx.conf est monté dans le conteneur NGINX via volumes. Ce reverse proxy assure :
- le routage vers /api (serveur Express),
- la distribution du front via /lapm,
- la redirection HTTP → HTTPS,
- le support des certificats SSL Let’s Encrypt.

## 🔑 Certificats SSL

Certificats Let’s Encrypt générés avec certbot :

sudo certbot certonly --standalone -d atelier-photo-montpellier.fr -d api.atelier-photo-montpellier.fr

Certificats montés dans nginx :

- ./nginx/certs:/etc/nginx/certs
- /etc/letsencrypt:/etc/letsencrypt:ro

## 🌍 Variables d’environnement (.env)

Un fichier .env est requis à la racine avec : VITE_DOMAIN_CLIENT, DB_HOST, DB_NAME, MAIL_PASSWORD, SECRET_KEY_TOKEN_CLIENT, etc.

## 🐳 Lancement manuel

sudo docker compose up -d --build

## 🤖 Déploiement automatique (GitHub Actions)

Déclenché sur push dans la branche Deploy :
- SSH vers le VPS
- Arrêt des conteneurs
- Suppression du volume client-dist
- git pull + docker compose up -d --build

## 📁 Uploads

Le dossier server/uploads est monté dans le conteneur server.

## ✅ Vérification post-déploiement

- https://atelier-photo-montpellier.fr/lapm
- https://api.atelier-photo-montpellier.fr/api/
- 🔒 Certificat SSL actif

## 👤 Auteur

- Ryan Decian
- Déploiement initial : Juillet 2025