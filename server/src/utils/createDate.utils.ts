async function createExpireDate_utils(): Promise<Date> {
    /* Date.now créer une valeur type number qui represente le nombre de millisecondes écoulées depuis le 1er janvier 1970 */
    /* new Date convertie ce nombre de millisecondes en un objet Date auquel on ajoute 1h */
    return new Date(Date.now() + 3600000); /* Expiration dans 1h */
    /* Exemple de résultat : Mon Sep 01 2025 12:20:00 GMT+0200 (heure locale dans 1h)*/
}

export {createExpireDate_utils};


async function createDate_Number_utils(): Promise<number> {
    const dateNow: number = Math.floor(Date.now() / 1000); // Date actuelle
    return dateNow; /* Date actuelle en timestamp UNIX */
}

export {createDate_Number_utils};
