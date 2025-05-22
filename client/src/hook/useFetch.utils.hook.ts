import { useEffect, useState, useCallback } from "react";

type MethodType = "GET" | "POST" | "PUT" | "DELETE";

/* Options qu'accepte useFetch */
interface FetchOptions<TBody = any> {
  method?: MethodType;
  body?: TBody; /* Données à envoyer – optionnel, typé dynamiquement (TBody) */
  headers?: HeadersInit; /* Permet de passer des headers personnalisés */
  credentials?: RequestCredentials; /* "include" pour activer les cookies */
  autoFetch?: boolean; /* Permet de déclencher manuellement le fetch si false. Si true lance le fetch automatiquement */
}

interface FetchResult<TResponse = any> {
  data: TResponse | null; /* Réponse du serveur (ou null si échec) */
  error: string | null; /* Message d’erreur ou null */
  loading: boolean; /* True si le fetch est en cours */
  refetch: (overrideOptions?: Partial<FetchOptions>) => Promise<void>; /* fonction pour relancer la requête, avec possibilité d’écraser les options */
}

function useFetch<TResponse = any, TBody = any>(uri: string, options: FetchOptions<TBody> = {}): FetchResult<TResponse> {

    const {
        method = "GET",
        body,
        headers = {},
        credentials = "include",
        autoFetch = true,
    } = options;
    
        const [data, setData] = useState<TResponse | null>(null); /* Réponse du serveur (ou null si échec) */
        const [error, setError] = useState<string | null>(null); /* Message d’erreur ou null */
        const [loading, setLoading] = useState<boolean>(false); /* Si le fetch est en cours */

        const fetchData = useCallback(
            async (overrideOptions: Partial<FetchOptions> = {}) => {
                setLoading(true);
                setError(null);

                try {
                    /* Envois du fetch */
                    const response = await fetch(`${import.meta.env.VITE_DOMAIN_SERVER}${uri}`, {
                    method: overrideOptions.method || method,
                    headers: {
                        "Content-Type": "application/json",
                        ...headers,
                        ...overrideOptions.headers,
                    },
                    credentials: overrideOptions.credentials || credentials,
                    /* Est ce qu'on a passé des data à envoyer au serveur ? Si oui en envois, si non, est ce qu'on a de la data natif au hook et la méthode n'est différent de GET, si oui on envois si non on envois rien */
                    body: overrideOptions.body !== undefined ? JSON.stringify(overrideOptions.body) : body !== undefined && method !== "GET" ? JSON.stringify(body) : undefined,
                    });


                    /* On récupère la réponse du serveur */ // Remplacer result par data
                    const result = await response.json();

                    if (!response.ok) {
                        throw new Error(result.message || "Une erreur s'est produite");
                    }

                    setData(result.data ?? result); /* On met à jour le state avec la réponse du serveur, SI result.data est null ou undefined car donnée non structuré, on prend résult lui même */
                }
                catch (err) {
                    setError(err instanceof Error ? err.message : "Une erreur s'est produite");
                    setData(null);
                } 
                finally {
                    setLoading(false);
                }
            }, [uri, method, body, headers, credentials]
        );

        /* Si autoFetch est true, on lance le fetch automatiquement */
        useEffect(() => {
            if (autoFetch) {
                fetchData();
            }
        }, [fetchData, autoFetch]);

    return { data, error, loading, refetch: fetchData };
}

export default useFetch;
