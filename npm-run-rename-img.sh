#!/bin/bash

# Vérifier si un dossier est passé en argument
if [ -z "$1" ]; then
    echo "Usage: $0 <dossier_contenant_les_images>"
    exit 1
fi

# Vérifier si le dossier existe
if [ ! -d "$1" ]; then
    echo "Erreur : Le dossier '$1' n'existe pas."
    exit 1
fi

# Fonction pour nettoyer le nom des fichiers
clean_name() {
    local name="$1"

    # Séparer nom et extension
    local filename="${name%.*}"
    local extension="${name##*.}"

    # Remplacer les espaces et underscores par des tirets
    filename=$(echo "$filename" | tr ' _' '-')

    # Enlever les accents via iconv (UTF-8 vers ASCII //IGNORE)
    filename=$(echo "$filename" | iconv -f UTF-8 -t ASCII//TRANSLIT)

    # Supprimer les caractères spéciaux non désirés
    filename=$(echo "$filename" | sed 's/[^a-zA-Z0-9.-]//g')

    # Supprimer les tirets ou underscores ou espaces en fin de nom
    filename=$(echo "$filename" | sed 's/[-_ ]\+$//')

    echo "$filename.$extension"
}

# Parcourir tous les fichiers (récursivement) et traiter les images uniquement
find "$1" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" -o -iname "*.gif" \) | while read -r file; do
    dir=$(dirname "$file")
    base=$(basename "$file")
    new_name=$(clean_name "$base")

    if [ "$base" != "$new_name" ]; then
        mv "$file" "$dir/$new_name"
        echo "Renommé : $base → $new_name"
    fi
done

echo "✅ Tous les fichiers ont été renommés proprement !"
