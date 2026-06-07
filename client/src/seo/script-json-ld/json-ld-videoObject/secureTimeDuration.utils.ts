/**
 * Documentation :
 * 
 * ### Cette fonction utilitaire a pour objectif de générer une string format ISO 8601 à partir d'un texte donné.
 * 
 * **Objectif** : Sécuriser la string passée en paramètre au script JSON-LD videoObject qui représente la durée de la vidéo. 
 * Il est actuellement utilisé comme dépendance utilitaire pour la clé "duration" dans le script JSON-LD videoObject.
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
 * 8. Ajoute un tiret entre les chiffres et les lettres adjacentes pour faciliter la lecture des durées (ex : "2h30m" devient "2-h-30-m").
 * 9. Vérifie si une valeur de temps exploitable a été trouvée pour les heures, minutes ou secondes. Si aucune valeur n'est trouvée, retourne null.
 * 10. Si une ou plusieurs valeurs de temps sont trouvées, construit la string finale au format ISO 8601 (ex : "PT2H30M" pour 2 heures et 30 minutes).
 * 
 * ---
 * ### Texte accepté en entrée :
 * - Pour les heures : "h", "heures", "heure" (ex : "2h", "2 heures", "2 heure")
 * - Pour les minutes : "m", "min", "minutes", "minute" (ex : "30m", "30 min", "30 minutes", "30 minute")
 * - Pour les secondes : "s", "sec", "secondes", "seconde" (ex : "30s", "30 sec", "30 secondes", "30 seconde")
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @param {string} text - Le texte à transformer en string format ISO 8601 (ex : "PT1H2M30S" pour 1 heure, 2 minutes et 30 secondes).
 * @returns {string | null} Retourne une string transformée en string format ISO 8601, prête à être utilisée dans les scripts JSON-LD, ou null si aucune valeur de temps exploitable n'est trouvée.
 * 
 * @example
 * ```typescript
 * const duration = secureTimeDuration_Utils("  2 heures 30 min  ");
 * // Résultat : "PT2H30M"
 */

function secureTimeDuration_Utils(text: string): string | null{
    const dictionary = {
        h: [
            "h", "heures", "heure"
        ],
        m: [
            "m", "min", "minutes", "minute"
        ],
        s: [
            "s", "sec", "secondes", "seconde"
        ],
    }

    /* Etape 1 : Transformation de la string en une chaine de caractère plus homogène */
    const cleanText = text

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
        .replace(/-+/g, "-")

        /* Ajoute un tiret entre les chiffres et les lettres adjacentes */
        /* Exemple : "2h30m" devient "2-h-30-m". */
        .replace(/(\d)([a-zA-Z])/g, "$1-$2");


        /* Etape 2 : Isolation de 3 valeurs spécifiques  */
        function extractTimeValue(textString: string, tab: string[]): number | null {
            /* Créer un tableau de string en séparant les éléments par des tirets */
            /* Exemple : "2-h-30-m" devient ["2", "h", "30", "m"] */
            const parts = textString.split("-");

            /* Trouve l'index de la partie qui correspond à l'un des éléments du tableau de référence (h, m, s) */
            const index = parts.findIndex((part) => {
                return tab.includes(part);
            });

            /* Récupère la valeur numérique associée à l'unité de temps trouvée à l'index précédent */
            const value: number | null = index !== -1 ? Number(parts[index - 1]) : null;

            return value;
        }

        /* Création des valeurs de temps pour les heures, minutes et secondes */
        const H: number | null = extractTimeValue(cleanText, dictionary.h);
        const M: number | null = extractTimeValue(cleanText, dictionary.m);
        const S: number | null = extractTimeValue(cleanText, dictionary.s);

        /* Etape 3 : Vérification si une valeur exploitable a été trouvée */
        if (H === null && M === null && S === null) {
            return null;
        }

        /* Etape 4 : Construction de la string finale au format ISO 8601 */
        return `PT${H !== null ? H + "H" : ""}${M !== null ? M + "M" : ""}${S !== null ? S + "S" : ""}`;
    }

export { secureTimeDuration_Utils };
