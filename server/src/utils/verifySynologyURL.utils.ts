/* Vérifie et reformate une URL Synology Drive */
function verifySynologyURL(lien: string): string | null {
    try {
        const expectedDomain = "https://saunier.ddnsfree.com:1968";

        // Vérifie que c’est bien une URL valide
        const url = new URL(lien);

        // Cas 1 : Le domaine est déjà correct
        if (lien.startsWith(expectedDomain)) {
            return lien;
        }

        // Cas 2 : L'URL utilise une IP locale à remplacer
        const localIPPattern = /^https:\/\/192\.168\.\d{1,3}\.\d{1,3}:1968/;
        if (localIPPattern.test(lien)) {
            const newURL = lien.replace(localIPPattern, expectedDomain);
            return newURL;
        }

        // Cas 3 : L'URL est valide mais ne correspond pas à Synology
        return null;

    } catch (error) {
        // Si ce n’est même pas une URL valide
        return null;
    }
}

export default verifySynologyURL;

/*
const lienVerifie = verifySynologyURL(req.body.lien);

if (!lienVerifie) {
    res.status(400).json({ error: "URL Synology invalide ou non autorisée." });
    return;
}
*/