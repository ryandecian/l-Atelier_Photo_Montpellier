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
