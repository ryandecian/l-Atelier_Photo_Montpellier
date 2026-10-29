
/* Import des modules CSS */
import css from "./generatorCardAvisClient.module.css";

/* Import des composants React */
import { useState } from "react";

/* Import des Types */
import type { DatasAvisClient_Type } from "../../../types/seo/avisClientSEO.type";

/* Import des Utils */
import { convertDateFrToISO_String_Utils } from "../../../utils/seo/convertDateFrToISO.utils";

function GeneratorCardAvisClient_Element({ tabDataAvisClients }: DatasAvisClient_Type) {
    const [expandedComments, setExpandedComments] = useState<{ [key: number]: boolean }>({});

    /* Option de déroulement des commentaires */
    const toggleComment = (id: number) => {
        setExpandedComments((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Fonction utilitaire pour convertir une date en format FR (DD/MM/YYYY) vers ISO (YYYY-MM-DD)
    const convertDateFrToISO = convertDateFrToISO_String_Utils;

    // Tri des avis du plus récent au plus ancien selon la date
    const avisTries = [...tabDataAvisClients].sort((a, b) => {
        return new Date(convertDateFrToISO(b.date)).getTime() - new Date(convertDateFrToISO(a.date)).getTime();
    });

    /* Fonction pour afficher les étoiles en fonction de la note */
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? css.starFilled : css.starEmpty}>★</span>
        ));
    };

    return (
        <section className={`GeneratorCardAvisClient_Element ${css.GeneratorCardAvisClient}`}>
            <header className={css.ContainerTitle}>
                <h3 className={css.title}>
                    Avis Clients
                </h3>
            </header>

            <div className={css.ContainerAvis}>
                {/* Parcours des avis triés du plus récent au plus ancien */}
                {avisTries.map((data) => {

                    /* Récupération des différents paragraphes */
                    const commentaires = [
                        data.commentaire,
                        data.commentaire2,
                        data.commentaire3,
                        data.commentaire4,
                        data.commentaire5,
                        data.commentaire6,
                        data.commentaire7,
                        data.commentaire8,
                        data.commentaire9
                    ].filter((commentaire): commentaire is string =>
                        typeof commentaire === "string" && commentaire.trim().length > 0
                    );

                    /* Calcul de la longueur totale du commentaire */
                    const commentaireComplet = [
                        data.titre,
                        ...commentaires
                    ].filter(Boolean).join("\n");

                    const isLongComment = commentaireComplet.length > 100;
                    const isExpanded = expandedComments[data.id] || false;

                    /* Affichage du commentaire complet ou tronqué */
                    const texteAffiche = isExpanded || !isLongComment
                        ? commentaireComplet
                        : commentaireComplet.substring(0, 100) + "...";

                    return (
                        <article key={data.id} className={css.CardAvisContainer}>
                            <p className={css.nom}>{data.nom}</p>

                            <div className={css.starsContainer}>
                                <div className={css.stars}>{renderStars(data.note)}</div>
                                <p className={css.date}>{data.date}</p>
                            </div>

                            <p className={css.comment}>
                                {/* Affichage du titre et des paragraphes */}
                                {isExpanded || !isLongComment ? (
                                    <>
                                        {data.titre && (
                                            <>
                                                <strong>{data.titre}</strong>
                                                <br />
                                                <br />
                                            </>
                                        )}

                                        {commentaires.map((commentaire, index) => (
                                            <span key={index}>
                                                {index > 0 && (
                                                    <>
                                                        <br />
                                                        <br />
                                                    </>
                                                )}
                                                {commentaire}
                                            </span>
                                        ))}
                                    </>
                                ) : (
                                    texteAffiche.split("\n").map((ligne, index) => (
                                        <span key={index}>
                                            {index > 0 && (
                                                <>
                                                    <br />
                                                    <br />
                                                </>
                                            )}
                                            {data.titre && index === 0
                                                ? <strong>{ligne}</strong>
                                                : ligne}
                                        </span>
                                    ))
                                )}

                                {/* Bouton Voir plus / Voir moins */}
                                {isLongComment && (
                                    <>
                                        <br />
                                        <span
                                            className={css.toggle}
                                            onClick={() => toggleComment(data.id)}
                                        >
                                            {isExpanded ? "Voir moins..." : "Voir plus..."}
                                        </span>
                                    </>
                                )}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export { GeneratorCardAvisClient_Element };
