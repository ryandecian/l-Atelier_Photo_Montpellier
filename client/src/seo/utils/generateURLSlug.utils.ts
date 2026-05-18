/**
 * Documentation :
 * 
 * ### Cette fonction utilitaire a pour objectif de générer un slug SEO-friendly à partir d'un texte donné.
 * 
 * **Objectif** : Sécuriser la string passée en paramètre aux fonctions script JSON-LD. 
 * Il est actuellement utilisé comme dépendance utilitaire pour l'ID unique d'une page dans les scripts JSON-LD.
 * 
 * ---
 * ### Étapes de transformation :
 * 1. Décompose les lettres accentuées en lettre + accent séparé.
 * 2. Supprime les accents séparés générés par la décomposition.
 * 3. Transforme tout le texte en minuscules.
 * 4. Supprime les espaces inutiles au début et à la fin du texte.
 * 5. Supprime les caractères spéciaux non autorisés dans le slug, en ne gardant que les lettres, chiffres, espaces et tirets.
 * 6. Remplace un ou plusieurs espaces par un seul tiret.
 * 7. Remplace plusieurs tirets consécutifs par un seul tiret.
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @param {string} text - Le texte à transformer en slug SEO-friendly.
 * @returns {string} Retourne une string transformée en slug SEO-friendly, prête à être utilisée dans les URL ou les ID de page.
 * 
 * @example
 * ```typescript
 * const slug = generateURLSlug_Utils("  Portrait Photo Zoom !  ");
 * // Résultat : "portrait-photo-zoom"
 */

function generateURLSlug_Utils(text: string): string {
    return text
        /* Décompose les lettres accentuées en lettre + accent séparé. */
        /* Exemple : "é" devient "e" + accent. */
        .normalize("NFD")

        /* Supprime les accents séparés générés par normalize("NFD"). */
        /* Exemple : "é", "è", "ê" deviennent "e". */
        .replace(/[\u0300-\u036f]/g, "")

        /* Transforme tout le texte en minuscules. */
        /* Exemple : "Portrait Photo" devient "portrait photo". */
        .toLowerCase()

        /* Supprime les espaces inutiles au début et à la fin du texte. */
        /* Exemple : "  portrait photo  " devient "portrait photo". */
        .trim()

        /* Supprime les caractères spéciaux non autorisés dans le slug. */
        /* Garde uniquement les lettres, chiffres, espaces et tirets. */
        .replace(/[^a-z0-9\s-]/g, "")

        /* Remplace un ou plusieurs espaces par un seul tiret. */
        /* Exemple : "portrait   photo" devient "portrait-photo". */
        .replace(/\s+/g, "-")

        /* Remplace plusieurs tirets consécutifs par un seul tiret. */
        /* Exemple : "portrait---photo" devient "portrait-photo". */
        .replace(/-+/g, "-");
}

export { generateURLSlug_Utils };
