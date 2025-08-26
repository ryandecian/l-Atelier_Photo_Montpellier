type MethodeType = "GET" | "POST" | "PUT" | "DELETE";

async function fetchAPI(methode: MethodeType, uri: string, body?: Record<string, unknown>) {
    let error: string | null = null;
    let data: Record<string, unknown> | null = null;

    const ApiURL = import.meta.env.VITE_DOMAIN_API_SERVER;

    /* Vérification si le body est présent ou vide pour éviter l'envois d'un body vide */
    let checkBody = false;
    if (body && Object.keys(body).length > 0 && methode !== "GET") {
        checkBody = true;
    }

    try {
        /* Envois de la requête */
        const response = await fetch(`${ApiURL}${uri}`, {
            method: methode,
            ...(checkBody === true && {
                /* Envois un headers uniquement si un body est présent */
                headers: {
                    "Content-Type": "application/json",
                }
            }),
            credentials: "include",
            ...(checkBody === true && {
                /* Envois un body uniquement si un body est présent */
                body: JSON.stringify(body)
            })
        });

        /* On vérifie si le serveur renvois un type de contenu JSON */
        /* Cela évite un plantage si ce n'est pas le cas */
        const contentType = response.headers.get("Content-Type") || "";

        /* Si c'est le cas on le récupère son contenu */
        if (contentType.includes("application/json")) {
            data = await response.json();

            /* Vérification si data contient un token */
            if (data && typeof data.jwtTokenClientLAPM === "string") {
                // On ne stocke que le token
                localStorage.setItem("jwtTokenClientLAPM", data.jwtTokenClientLAPM);
            }
        }
        /* Si ce n'est pas le cas, on met un objet vide par convention */
        else {
            data = {};
        }

        /* Gestion des erreurs */
        if (!response.ok) {
            throw new Error(
                (data && typeof data === "object" && "message" in data) ?
                    String(data.message)
                : 
                    `Erreur HTTP ${response.status}`
            );
        }

    } 
    catch (err: unknown) {
        if (err instanceof Error) {
            error = err.message;
        }
        else {
            error = "Une erreur inconnue s'est produite";
        }
    }

    return (
        { error, data }
    );
}

export default fetchAPI;

/**
 * Documentation : 
 * 
 * Pour utiliser cet utils il faut : 
 * - Importer la fonction dans votre composant
 * - Créer une variable qui va stocker la réponse de l'API
 * - Appeler la fonction avec les paramètres nécessaires et un await !
 *
 * Exemple :
 * const res = await fetchAPI("GET", "/api/user", body)
 *
 * Conseil, créer une const body = {var1, var2, var3 etc...}
 * Sachant que chaque var est en général une useState pour les formulaire
 */
