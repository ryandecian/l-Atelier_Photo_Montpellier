/* Import des modules CSS */
import style from "../../style.root.module.css";

function PhotoCorporate_Root() {
    return (
        <section className={`PhotoCorporate_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1_NNNN}>
                    {`Portraits Corporate à Montpellier - Valorisez Votre Image Professionnelle`}
                </h1>
            </header>

            <p className={style.TextP4}>
                Votre portrait professionnel est souvent la <strong>première impression</strong> que vous laissez à vos 
                clients, partenaires ou recruteurs. Il reflète votre posture, votre sérieux et votre expertise. <br />
                Un portrait corporate soigné, cohérent avec votre activité et aligné sur votre identité d’entreprise 
                devient un véritable <strong>levier de crédibilité</strong>.
            </p>

            <p className={style.TextP4}>
                En tant que <strong>photographe corporate à Montpellier</strong>, je réalise des portraits professionnels 
                pour dirigeants, collaborateurs, équipes et indépendants souhaitant renforcer leur communication interne 
                et externe.
            </p>

            {/* PhotoCorporate_Photo */}

            <h2 className={style.TitleH2_00N0}>
                Pourquoi choisir un Portrait Corporate Professionnel ?
            </h2>

            <p className={style.TextLiP4}>
                Un portrait professionnel ne se limite pas à une “belle photo”. Il doit :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>transmettre les valeurs</strong> de votre entreprise,
                </li>
                <li className={style.TextLiP4}>
                    inspirer confiance,
                </li>
                <li className={style.TextLiP4}>
                    <strong>être cohérent</strong> sur tous vos supports (site, LinkedIn, signature mail),
                </li>
                <li className={style.TextLiP4}>
                    renforcer votre marque employeur,
                </li>
                <li className={style.TextLiP4}>
                    présenter vos collaborateurs avec une <strong>identité visuelle homogène.</strong>
                </li>
            </ul>

            <p className={style.TextP4}>
                Dans un monde où l’image s’impose dans tous les échanges, <strong>un portrait maîtrisé vous aide à vous 
                démarquer et à asseoir votre positionnement professionnel.</strong>
            </p>
            
            {/* PhotoCorporate_Photo */}

            <h2 className={style.TitleH2_00N0}>
                Mon Approche : Une Image Qui Sert Votre Identité d’Entreprise
            </h2>
            
            <p className={style.TextLiP4}>
                Pour chaque portrait, je prends le temps d’un échange préalable afin de définir :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    le ton (formel, moderne, dynamique, naturel),
                </li>
                <li className={style.TextLiP4}>
                    l'usage principal (LinkedIn, trombinoscope, communication interne),
                </li>
                <li className={style.TextLiP4}>
                    le style esthétique à adopter (studio neutre, environnement métier),
                </li>
                <li className={style.TextLiP4}>
                    les valeurs que vous souhaitez véhiculer.
                </li>
            </ul>

            <p className={style.TextP4}>
                Cette phase de cadrage garantit un portrait réellement aligné avec votre positionnement.
            </p>
            
            <h2 className={style.TitleH2_00N0}>
                Réaliser Votre Portrait Corporate sur site ou dans un studio professionnel ?
            </h2>
        </section>
    );
}

export default PhotoCorporate_Root;
