import { useState } from "react";
import style from "./GeneratorCardAvisClient.module.css";
import AvisClientControllerDataType from "../../types/AvisClientControllerData.type";
import { convertDateFrToISO_String } from "../../utils/convertDateFrToISO.utils";


// Ajout d'une interface pour les props
interface DataAvisClientProps {
    avisClients: AvisClientControllerDataType[];
}

function GeneratorCardAvisClient(Props: DataAvisClientProps) {
    const { avisClients } = Props;

    const [expandedComments, setExpandedComments] = useState<{ [key: number]: boolean }>({});

    const toggleComment = (id: number) => {
        setExpandedComments((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Tri des avis du plus récent au plus ancien selon la date
    const avisTries = [...avisClients].sort((a, b) => {
        return new Date(convertDateFrToISO_String(b.date)).getTime() - new Date(convertDateFrToISO_String(a.date)).getTime();
    });

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? style.starFilled : style.starEmpty}>★</span>
        ));
    };

    return (
        <section className={style.GeneratorCardAvisClient}>
            <header className={style.ContainerTitle}>
                <h3 className={style.title}>
                    Avis Clients
                </h3>
            </header>

            <div className={style.ContainerAvis}>
                {/* Parcours des avis triés du plus récent au plus ancien */}
                {avisTries.map((data) => {
                    const isLongComment = data.commentaire.length > 100;
                    const isExpanded = expandedComments[data.id] || false;

                    return (
                        <article key={data.id} className={style.CardAvisContainer}>
                            <p className={style.nom}>{data.nom}</p>

                            <div className={style.starsContainer}>
                                <div className={style.stars}>{renderStars(data.note)}</div>
                                <p className={style.date}>{data.date}</p>
                            </div>

                            <p className={style.comment}>
                                {/* Affichage du commentaire tronqué ou complet selon état */}
                                {isExpanded || !isLongComment
                                    ? data.commentaire
                                    : `${data.commentaire.substring(0, 100)}... `}
                                
                                {/* Ajout d’un bouton "Voir plus / Voir moins" si le commentaire est long */}
                                {isLongComment && (
                                    <span className={style.toggle} onClick={() => toggleComment(data.id)}>
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
