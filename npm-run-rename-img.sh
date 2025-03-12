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

    # Remplacer les espaces par des "_"
    name="${name// /_}"

    # Supprimer les caractères accentués et spéciaux avec un mapping explicite
    name=$(echo "$name" | tr 'àáâäãåçéèêëíìîïñóòôöõøùúûüýÿ' 'aaaaaaceeeeiiiinooooouuuuyy')

    # Supprimer les caractères spéciaux non désirés (guillemets, apostrophes, etc.)
    name=$(echo "$name" | sed 's/[^a-zA-Z0-9._-]//g')

    # Retourner le nom nettoyé
    echo "$name"
}

# Parcourir tous les fichiers du dossier
for file in "$1"/*; do
    if [ -f "$file" ]; then
        dir=$(dirname "$file")
        base=$(basename "$file")
        new_name=$(clean_name "$base")

        # Vérifier si le nom a changé avant de renommer
        if [ "$base" != "$new_name" ]; then
            mv "$file" "$dir/$new_name"
            echo "Renommé : $base → $new_name"
        fi
    fi
done

echo "✅ Tous les fichiers ont été renommés avec succès !"
