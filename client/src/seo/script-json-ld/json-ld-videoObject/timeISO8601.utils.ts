type Duration_video_Type = {
    h?: number;
    m?: number;
    s?: number;
}

/**
 * Documentation :
 * 
 * ### Cette fonction utilitaire a pour objectif de générer une string format ISO 8601 à partir d'un objet pouvant avoir 3 clées.
 * 
 * **Objectif** : Sécuriser la string passée en paramètre au script JSON-LD videoObject qui représente la durée de la vidéo. 
 * Il est actuellement utilisé comme dépendance utilitaire pour la clé "duration" dans le script JSON-LD videoObject.
 * 
 * ---
 * ### Étapes de transformation :
 * 1. Vérifie si une valeur de temps exploitable a été trouvée pour les heures, minutes ou secondes. Si aucune valeur n'est trouvée, retourne null.
 * 2. Si une ou plusieurs valeurs de temps sont trouvées, construit la string finale au format ISO 8601 (ex : "PT2H30M" pour 2 heures et 30 minutes).
 * 3. Si une clé n'existe pas, ou propose une valeur nulle ou indéfinie, elle est simplement ignorée dans la construction de la string finale.
 * 
 * ---
 * ### Texte accepté en entrée :
 * - Seul des number sont acceptés.
 * 
 * ---
 * @param {Duration_video_Type} duration - L'objet représentant la durée à transformer en string format ISO 8601.
 * @param {number} [duration.h] - Le nombre d'heures. Optionnel. Si la valeur vaut 0, elle est ignorée.
 * @param {number} [duration.m] - Le nombre de minutes. Optionnel. Si la valeur vaut 0, elle est ignorée.
 * @param {number} [duration.s] - Le nombre de secondes. Optionnel. Si la valeur vaut 0, elle est ignorée.
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {string | null} Retourne une string transformée en string format ISO 8601, prête à être utilisée dans les scripts JSON-LD, ou null si aucune valeur de temps exploitable n'est trouvée.
 * 
 * @example
 * ```typescript
 * const duration = timeISO8601_Utils({ h: 2, m: 30, s: 0 });
 * // Résultat : "PT2H30M"
 */

function timeISO8601_Utils(duration: Duration_video_Type): string | null {
    let isoDuration = "PT"; /* Initialisation de la chaîne de caractères au format ISO 8601 */
    let control: boolean = false; /* Variable permettant le controle de la chaine. Par défaut c'est false pour chaine invalide. Si une valeur valide est trouvée, elle passe à true. */

    /**
     * Traitement de la variable h pour les heures
     * 
     * Point de vérification -  La variable doit : 
     * - doit exister.
     * - être de type number.
     * - ne pas être nulle.
     * 
     * Si la variable h respecte ces conditions, elle est ajoutée à la string finale au format ISO 8601 (ex : "PT2H" pour 2 heures).
     */
    if (duration.h && typeof duration.h === "number" && duration.h !== null) {
        isoDuration += `${duration.h}H`;
        control = true;
    }

    /**
     * Traitement de la variable m pour les minutes
     * 
     * Point de vérification -  La variable doit : 
     * - doit exister.
     * - être de type number.
     * - ne pas être nulle.
     * 
     * Si la variable m respecte ces conditions, elle est ajoutée à la string finale au format ISO 8601 (ex : "PT30M" pour 30 minutes).
     */
    if (duration.m && typeof duration.m === "number" && duration.m !== null) {
        isoDuration += `${duration.m}M`;
        control = true;
    }

    /**
     * Traitement de la variable s pour les secondes
     * 
     * Point de vérification -  La variable doit : 
     * - doit exister.
     * - être de type number.
     * - ne pas être nulle.
     * 
     * Si la variable s respecte ces conditions, elle est ajoutée à la string finale au format ISO 8601 (ex : "PT45S" pour 45 secondes).
     */
    if (duration.s && typeof duration.s === "number" && duration.s !== null) {
        isoDuration += `${duration.s}S`;
        control = true;
    }

    /* Vérification de la chaine avant envois de la réponse finale */
    if (!control) {
        return null;
    }
    return isoDuration;
}

export { timeISO8601_Utils };
