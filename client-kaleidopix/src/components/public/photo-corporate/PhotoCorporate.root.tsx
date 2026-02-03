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

            <h3 className={style.TitleH3}>
                📌 Sur site : pratique et cohérent
            </h3>

            <p className={style.TextP4}>
                Je me déplace dans votre entreprise y compris dans l’Ecusson avec un <strong>studio mobile</strong> pour réaliser 
                les portraits directement dans vos locaux.
            </p>

            <p className={style.TextLiP4}>
                Cela permet de :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    limiter le temps mobilisé dans vos équipes,
                </li>
                <li className={style.TextLiP4}>
                    offrir un fond et une lumière contrôlés,
                </li>
                <li className={style.TextLiP4}>
                    produire une série homogène pour tout votre personnel,
                </li>
                <li className={style.TextLiP4}>
                    intégrer éventuellement votre environnement professionnel.
                </li>
            </ul>

            <h3 className={style.TitleH3}>
                📌 En studio : lumière maîtrisée & rendu premium
            </h3>

            <p className={style.TextP4}>
                Dans mon studio, j’ajuste éclairages, ambiance et arrière-plan pour un portrait sobre, élégant et intemporel. <br />
                Parfait pour créer une identité visuelle cohérente pour vos dirigeants et collaborateurs.
            </p>

            {/* Video */}
                        
            <h2 className={style.TitleH2_00N0}>
                Un Processus de Production Clair et Adapté aux Entreprises
            </h2>

            <p className={style.TextP4}>
                Je mets en place un <strong>processus fluide et structuré</strong>, idéal pour les équipes :
            </p>

            <p className={style.TextP4}>
                <strong>Étape 1 — Préparation & repérage</strong> <br />
                Analyse de vos besoins, définition du rendu souhaité, choix du style visuel.
            </p>

            <p className={style.TextP4}>
                <strong>Étape 2 — Organisation & planning</strong> <br />
                Création d’un planning précis pour éviter les temps d’attente. <br />
                Chaque collaborateur dispose d’un créneau dédié.
            </p>

            <p className={style.TextP4}>
                <strong>Étape 3 — Shooting & direction</strong> <br />
                Je guide chaque personne avec bienveillance : posture, regard, attitude. <br />
                Même les plus réticents à l’objectif se sentent rapidement en confiance.
            </p>

            <p className={style.TextP4}>
                <strong>Étape 4 — Retouches & livraison</strong> <br />
                Retouches professionnelles, export optimisé pour LinkedIn, site web, presse et communication interne.
            </p>
                        
            <h2 className={style.TitleH2_00N0}>
                Une Signature Visuelle Forte : Le Premier Regard sur Votre Organisation
            </h2>
        </section>
    );
}

export default PhotoCorporate_Root;
