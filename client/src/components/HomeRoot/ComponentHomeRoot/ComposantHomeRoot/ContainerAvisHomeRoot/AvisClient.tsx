import { useState } from "react";
import style from "./AvisClient.module.css";

const avisClients = [
    {
        id: 1,
        nom: "Marie Pierre",
        note: 5,
        commentaire: "Grâce aux photos et au travail d’Anne, notre mariage reste un moment gravé. Elle a su capturer des instants de la fête pour les rendre inoubliables. Les photos couleurs et surtout les noires et blancs sont magnifiques. Bonne chance pour tes projets.",
        date: "16 juillet 2022",
    },
    {
        id: 2,
        nom: "Philippe",
        note: 5,
        commentaire: "Anne est une personne sympathique qui sait mettre en valeur les sujets photographiés. Ses photos en noir et blanc sont magnifiques. Un effet naturel et une belle luminosité.",
        date: "16 juillet 2022",
    },
    {
        id: 3,
        nom: "Sarah",
        note: 5,
        commentaire: "Les photos pros sont vraiment différentes des photos persos. Les préparatifs avec Anne étaient faits avec soin pour un super résultat. L’ambiance conviviale nous a mis à l’aise. Je n’ai pas l’habitude de faire la vedette mais avec différents vêtements, différentes poses, des décors variés le résultat est bluffant, plein d’expression et de style différent. J’étais étonnée d’être mise en valeur comme ça et vraiment je recommande. Je recommande à tel point que j’ai fait un autre shooting avec mes fils, et une fois de plus le rendu était super.",
        date: "25 août 2024 & 20 avril 2024",
    },
    {
        id: 4,
        nom: "Christophe",
        note: 5,
        commentaire: "J’ai passé un super moment pendant le shooting, la qualité des photos est top très artistique, nous met à l’aise super facilement. Je recommande vraiment.",
        date: "20 avril 2024",
    },
    {
        id: 5,
        nom: "Karine",
        note: 5,
        commentaire: "Un immense merci à Anne pour son talent et son regard unique. Elle a su capturer chaque instant de notre mariage avec une sensibilité et une élégance incroyable. Chaque photo raconte une histoire, reflète l’émotion du moment et nous permet de revivre cette journée magique encore et encore. Grâce à elle, nous avons de magnifiques souvenirs à partager avec nos proches. Si vous cherchez une photographe passionnée et douée, n’hésitez pas une seconde !",
        date: "21 octobre 2023",
    },
];


function AvisClient() {
    // ✅ Création d'un état individuel pour chaque avis
    const [expandedComments, setExpandedComments] = useState<{ [key: number]: boolean }>({});

    const toggleComment = (id: number) => {
        setExpandedComments((prev) => ({
            ...prev,
            [id]: !prev[id] // Inverse l'état du commentaire spécifique
        }));
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? style.starFilled : style.starEmpty}>★</span>
        ));
    };

    return (
        <section className={style.AvisClient}>
            <header className={style.ContainerTitle}>
                <h2 className={style.title}>
                    Avis Clients
                </h2>
            </header>

            <div className={style.ContainerAvis}>
                {avisClients.map((data) => {
                const isLongComment = data.commentaire.length > 100;
                const isExpanded = expandedComments[data.id] || false;

                    return (
                        <article key={data.id} className={style.CardAvisContainer}>
                            {/* Ligne 1 : Nom du Client */}
                            <p className={style.nom}>{data.nom}</p>

                            {/* Ligne 2 : Container Note + Date */}
                            <div className={style.starsContainer}>
                                {/* Note */}
                                <div className={style.stars}>{renderStars(data.note)}</div>
                                {/* Date */}
                                <p className={style.date}>{data.date}</p>
                            </div>

                            {/* Ligne 3 : Commentaire */}
                            <p className={style.comment}>
                                {isExpanded || !isLongComment ? data.commentaire : `${data.commentaire.substring(0, 100)}... `}
                                {isLongComment && (
                                    <span className={style.toggle} onClick={() => toggleComment(data.id)}>
                                        {isExpanded ? "  Voir moins..." : "Voir plus..."}
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

export default AvisClient;
