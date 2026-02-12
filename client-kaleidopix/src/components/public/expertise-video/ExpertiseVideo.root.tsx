/* Import des modules CSS */
import style from "../../style.root.module.css";

function ExpertiseVideo_Root() {
    return (
        <section className={`PhotoCorporate_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1_NNNN}>
                    FAQ : tout savoir sur la vidéo corporate à Montpellier
                </h1>
            </header>

            <p className={style.TextP4}>
                Cette page répond aux <strong>questions les plus fréquentes</strong> que se posent les dirigeants, 
                responsables communication et RH avant de se lancer dans une <strong>vidéo corporate ou une vidéo d’entreprise à Montpellier</strong>.
            </p>

            <h2 className={style.TitleH2_00N0}>
                À quoi sert une vidéo corporate pour une entreprise ?
            </h2>

            {/* Image 1, attention, voir le responsive si la cliente veux vraiment une seul image car je ne sais pas ce que cela va donner */}

            <p className={style.TextP4}>
                Une vidéo corporate sert à <strong>présenter une entreprise de manière claire, humaine et crédible</strong>. <br />
                Elle permet de montrer une activité, un savoir-faire, une culture d’entreprise ou une vision, sans 
                discours commercial artificiel.
            </p>

            <p className={style.TextLiP4}>
                Utilisée sur un site internet ou LinkedIn, elle aide à :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    rassurer des prospects avant un premier contact,
                </li>
                <li className={style.TextLiP4}>
                    clarifier une offre ou un positionnement,
                </li>
                <li className={style.TextLiP4}>
                    renforcer la visibilité et la crédibilité de l’entreprise,
                </li>
                <li className={style.TextLiP4}>
                    soutenir le recrutement et la marque employeur.
                </li>
            </ul>

            <h2 className={style.TitleH2_00N0}>
                Quelle est la différence entre une vidéo corporate et une vidéo d’activité ?
            </h2>

            {/* Image 2, attention, voir le responsive si la cliente veux vraiment une seul image car je ne sais pas ce que cela va donner */}

            <p className={style.TextP4}>
                La <strong>vidéo corporate</strong> présente l’entreprise dans sa globalité : vision, valeurs, organisation. <br />
                La <strong>vidéo d’activité ou vidéo métier</strong> se concentre sur le terrain : gestes professionnels, 
                environnement réel, interactions et conditions de travail. <br />
                Pour beaucoup d’entreprises, la vidéo d’activité est plus efficace car elle montre {` `} 
                <strong>ce qui se fait réellement</strong>, sans mise en scène excessive.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Une vidéo corporate est-elle utile pour une petite entreprise ou une PME ?
            </h2>

            <p className={style.TextLiP4}>
                Oui : <br />
                Les petites entreprises et PME ont souvent tout intérêt à utiliser la vidéo pour :
            </p>
            
            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    se différencier localement,
                </li>
                <li className={style.TextLiP4}>
                    humaniser la relation client,
                </li>
                <li className={style.TextLiP4}>
                    rassurer avant un rendez-vous ou un devis.
                </li>
            </ul>

            <p className={style.TextP4}>
                Une vidéo bien ciblée permet de créer de la confiance, même sans gros budget de communication.
            </p>
        </section>
    )
}

export default ExpertiseVideo_Root
