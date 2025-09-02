import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./UserGestionAlbumRoot.module.css";
import style from "../../../StyleRootComponent.module.css";
import fetchAPI from "../../../../utils/fetchAPI.utils";
import useLockedPage from "../../../../hook/useLockedPage.security.hook";

/* Type d’un album tel que renvoyé par l’API */
type AlbumItem = {
    id_album: number;
    firstname: string;
    lastname: string;
    access_password: string;
    date: number; /* timestamp en millisecondes */
    lien?: string; /* URL/route vers la consultation de l’album */
};

/* Type de la réponse normalisée de fetchAPI */
type FetchAPIResponse = {
    error: string | null;
    data: Record<string, unknown> | null;
};

/* Type guard strict pour valider qu’un “unknown” est bien un AlbumItem */
function isAlbumItem(x: unknown): x is AlbumItem {
    if (typeof x !== "object" || x === null) {
        return false;
    }
    const o = x as Record<string, unknown>;
    const hasId = typeof o.id_album === "number";
    const hasFirst = typeof o.firstname === "string";
    const hasLast = typeof o.lastname === "string";
    const hasPwd = typeof o.access_password === "string";
    const hasDate = typeof o.date === "number";
    const lienOk = o.lien === undefined || typeof o.lien === "string";
    return hasId && hasFirst && hasLast && hasPwd && hasDate && lienOk;
}

/* Format JJ/MM/AAAA */
function formatDate(ts: number): string {
    try {
        return new Date(ts).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        });
    }
    catch {
        return "Date inconnue";
    }
}

function UserGestionAlbumRoot() {
    /* Verrouillage : page réservée aux “user” */
    const userInfo = useLockedPage("user");
    const navigate = useNavigate();

    /* États de la page */
    const [albums, setAlbums] = useState<AlbumItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    /* Récupération des albums de l’utilisateur connecté.
       Important : on ne fetch que lorsque userInfo est disponible.
       Tous les hooks sont déclarés avant tout return JSX. */
    useEffect(() => {
        if (!userInfo) {
            /* Le hook d’auth n’a pas encore fourni les infos : on reste en chargement */
            setLoading(true);
            return;
        }

        let isMounted = true;

        async function load() {
            setLoading(true);
            setError(null);

            try {
                const { error, data }: FetchAPIResponse = await fetchAPI("GET", "/album/my");

                if (!isMounted) return;

                if (error) {
                    setError(error);
                    setAlbums([]);
                    setLoading(false);
                    return;
                }

                /* L’API renvoie { message: string, data: AlbumItem[] } */
                const payload = (data ?? {}) as { message?: string; data?: unknown };
                const list = Array.isArray(payload.data) ? payload.data : [];

                /* Validation stricte + tri du plus récent au plus ancien */
                const parsed: AlbumItem[] = list
                    .filter(isAlbumItem)
                    .sort((a, b) => b.date - a.date);

                setAlbums(parsed);
                setLoading(false);
                return;
            }
            catch {
                if (!isMounted) return;
                setError("Une erreur inconnue s'est produite.");
                setAlbums([]);
                setLoading(false);
                return;
            }
        }

        load();

        return () => {
            isMounted = false;
        };
    }, [userInfo]);

    /* Action “Consulter” : si lien absolu => nouvelle fenêtre, sinon navigation interne.
       Fallback si pas de lien : route interne basée sur l’id. */
    function onConsult(lien?: string, id?: number) {
        if (typeof lien === "string" && lien.trim().length > 0) {
            const url = lien.trim();
            if (/^https?:\/\//i.test(url)) {
                window.open(url, "_blank", "noopener,noreferrer");
                return;
            }
            navigate(url);
            return;
        }
        if (typeof id === "number") {
            navigate(`/album/${id}`);
        }
    }

    /* Rendu JSX : on ne “return” plus avant la déclaration des hooks */
    return (
        <div className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>Mes séances</h1>
            </header>

            {(!userInfo || loading) && <p>Chargement de vos albums...</p>}

            {userInfo && !loading && error && (
                <p>
                    {/* Message plus doux si 404 “Aucun album” */}
                    Erreur : {/aucun album/i.test(error) ? "Aucun album disponible pour le moment." : error}
                </p>
            )}

            {userInfo && !loading && !error && (
                <div className={css.cardsContainer}>
                    {albums.length === 0 ? (
                        <p className={css.EmptyState}>Aucun album disponible pour le moment.</p>
                    ) : (
                        albums.map((alb) => (
                            <div key={alb.id_album} className={css.card}>
                                <div className={css.ContainerDataUser}>
                                    <p className={css.label}>
                                        <span className={style.SpanBold}>ID Album :</span> {alb.id_album}
                                    </p>
                                    <p className={css.label}>
                                        <span className={style.SpanBold}>Prénom :</span> {alb.firstname}
                                    </p>
                                    <p className={css.label}>
                                        <span className={style.SpanBold}>Nom :</span> {alb.lastname}
                                    </p>
                                    <p className={css.label}>
                                        <span className={style.SpanBold}>Mot de passe :</span> {alb.access_password}
                                    </p>
                                    <p className={css.label}>
                                        <span className={style.SpanBold}>Date :</span> {formatDate(alb.date)}
                                    </p>
                                </div>

                                <div className={css.ContainerRoleAction}>
                                    <div className={css.PlaceholderRight} />
                                    <button
                                        className={css.ButtonConsult}
                                        aria-label={`Consulter l’album ${alb.id_album}`}
                                        onClick={() => onConsult(alb.lien, alb.id_album)}
                                    >
                                        Consulter
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default UserGestionAlbumRoot;
