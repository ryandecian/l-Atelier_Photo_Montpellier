/* Import des modules CSS */
import style from "../../style.root.module.css";

function Home_Root() {
    return (
        <section className={`Home_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Images Photo & Vidéo pour Entreprises à Montpellier
                </h1>
            </header>
            
            <p className={style.TextP4}>
                Positionnez votre entreprise comme référence grâce à des <strong> contenus visuels professionnels.</strong> <br />
            </p>
            
            <p className={style.TextP4}>
                Photo Vidéo Montpellier conçoit pour vous des reportages immersifs, films institutionnels, vidéos métiers 
                et portraits corporate destinés à <strong> renforcer votre communication interne et externe.</strong>
            </p>

            <h2 className={style.TitleH2_00N0}>
                Photographie Corporate pour les entreprises dans l’Hérault
            </h2>
            
            <p className={style.TextP4}>
                Donner à voir pour comprendre : l’image fixe est la première impression que vos clients se font de votre entreprise. <br />
                En tant que <strong> photographe d’entreprise à Montpellier</strong>, je réalise des portraits professionnels 
                et des reportages adaptés à l’ensemble de vos supports : site web, réseaux sociaux, presse.
            </p>
            
            <p className={style.TextP4}>
                Je vous offre une <strong> flexibilité totale</strong> : vos portraits corporate peuvent être faits {` `}
                <strong>dans mon studio</strong> à Montpellier ou <strong> directement dans vos locaux</strong> grâce à un 
                studio photo éphémère installé sur place.
            </p>
            
            <p className={style.TextP4}>
                Cette approche me permet également de créer un portrait professionnel à Montpellier {` `}
                <strong> cohérent avec votre identité d’entreprise.</strong>
            </p>

            <h3 className={style.TitleH3}>
                Prestations photo
            </h3>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <strong>Portraits Corporate : dirigeants, équipes, trombinoscope.</strong> 
                </li>
                <li className={style.TextLiP4}>
                    Reportage d’Activité : équipes en action, gestes métier, <strong>reportage photo entreprise Montpellier.</strong>
                </li>
                <li className={style.TextLiP4}>
                    Photos de Locaux : bureaux, ateliers, espaces clients.
                </li>
                <li className={style.TextLiP4}>
                    Reportage Événementiel : séminaires, inaugurations, événements internes, team building, soirées d’entreprise.
                </li>
            </ul>
        </section>
    )
}

export default Home_Root;
