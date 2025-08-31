// server/src/utils/normalize.ts
function optionalChampsSQL_utils(input: unknown): string | null {
    /* Vérifie que la valeur fournie est bien une string. */
    /* Si ce n’est pas le cas (undefined, number, object, etc.) → retourne null. */
    if (typeof input !== "string") {
        return null;
    }

    /* Supprime les espaces en début et fin de chaîne pour éviter les fausses valeurs. */
    const trimmed = input.trim();
    
    /* Retourne la chaîne si elle contient au moins 1 caractère, sinon retourne null. */
    return trimmed.length > 0 ? trimmed : null;
}

export default optionalChampsSQL_utils;
