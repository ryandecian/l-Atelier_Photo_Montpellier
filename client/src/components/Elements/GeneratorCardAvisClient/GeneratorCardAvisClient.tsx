/* Import des modules CSS */
import css from "./generatorCardAvisClient.module.css";

import { useState } from "react";
import { AvisClientSEO_Type } from "../../../types/seo/avisClientSEO.type";
import { convertDateFrToISO_String_Utils } from "../../../utils/seo/convertDateFrToISO.utils";


// Ajout d'une interface pour les props
interface DataAvisClientProps {
    avisClients: AvisClientSEO_Type[];
}

function GeneratorCardAvisClient(Props: DataAvisClientProps) {
    const { avisClients } = Props;

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
    const avisTries = [...avisClients].sort((a, b) => {
        return new Date(convertDateFrToISO(b.date)).getTime() - new Date(convertDateFrToISO(a.date)).getTime();
    });

    /* Fonction pour afficher les étoiles en fonction de la note */
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? css.starFilled : css.starEmpty}>★</span>
        ));
    };

    return (
        <section className={css.GeneratorCardAvisClient}>
            <header className={css.ContainerTitle}>
                <h3 className={css.title}>
                    Avis Clients
                </h3>
            </header>

            <div className={css.ContainerAvis}>
                {/* Parcours des avis triés du plus récent au plus ancien */}
                {avisTries.map((data) => {
                    const isLongComment = data.commentaire.length > 100;
                    const isExpanded = expandedComments[data.id] || false;

                    return (
                        <article key={data.id} className={css.CardAvisContainer}>
                            <p className={css.nom}>{data.nom}</p>

                            <div className={css.starsContainer}>
                                <div className={css.stars}>{renderStars(data.note)}</div>
                                <p className={css.date}>{data.date}</p>
                            </div>

                            <p className={css.comment}>
                                {/* Affichage du commentaire tronqué ou complet selon état */}
                                {isExpanded || !isLongComment
                                    ? data.commentaire
                                    : `${data.commentaire.substring(0, 100)}... `}
                                
                                {/* Ajout d’un bouton "Voir plus / Voir moins" si le commentaire est long */}
                                {isLongComment && (
                                    <span className={css.toggle} onClick={() => toggleComment(data.id)}>
                                        {isExpanded ? " Voir moins..." : "Voir plus..."}
                                    </span>
                                )}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default GeneratorCardAvisClient;
