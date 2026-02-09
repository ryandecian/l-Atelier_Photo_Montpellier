/* Import des modules CSS */
import style from "../../style.root.module.css";

/* Import des composants d'Elements */
import { PremiumCardImgModal_Element } from "../../elements/premium-card-img-modal/PremiumCardImgModal.element";

/* Import des composants React */
import { Link } from "react-router-dom";

/* Import des composants Router */
import router from "../../../router/router";

function QuiSuisJe_Root() {
    return (
        <section className={`QuiSuisJe_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1_NNNN}>
                    À PROPOS - PHOTOGRAPHE & VIDEASTE CORPORATE A MONTPELLIER
                </h1>
            </header>

            <div className={style.ContainerFloat}>
                <PremiumCardImgModal_Element
                    src="/images/image-qui-suis-je/anne-saunier-photographe-videaste-entreprise-corporate-montpellier.jpg"
                    alt="Anne Saunier, photographe et vidéaste entreprise corporate à Montpellier"
                    className={style.FloatLeftImg_Po}
                />

                <p className={style.TextP4}>
                    Je m'appelle Anne Saunier, photographe corporate et vidéaste entreprise à Montpellier. <br />
                    <strong>J’accompagne les organisations</strong> dans la création de portraits professionnels, 
                    reportages photo en entreprise et vidéos corporate destinées à renforcer leur crédibilité et leur 
                    communication.
                </p>

                <h2 className={style.TitleH2_00N0}>
                    Mon Parcours : de la photographie au conseil en image d’entreprise
                </h2>

                <p className={style.TextP4}>
                    Issue d’un parcours de direction, j’ai développé une compréhension fine des enjeux RH, communication 
                    interne et marque employeur. <br />
                    Cette approche me permet de créer des images stratégiques : portraits, reportage photo entreprise 
                    Montpellier, vidéos métier et films institutionnels entreprise à Montpellier, en métropole et même 
                    en dehors de nos frontières.
                </p>

                <h2 className={style.TitleH2_00N0}>
                    Expertise Photo & Vidéo Corporate pour Entreprises à Montpellier
                </h2>

                <p className={style.TextLiP4}>
                    Je réalise :
                </p>

                <ul className={style.ContainerUl}>
                    <li className={style.TextLiP4}>
                        portraits corporate et portrait professionnel à Montpellier
                    </li>
                    <li className={style.TextLiP4}>
                        reportage métier et reportage entreprise
                    </li>
                    <li className={style.TextLiP4}>
                        vidéos corporate
                    </li>
                    <li className={style.TextLiP4}>
                        films institutionnels
                    </li>
                    <li className={style.TextLiP4}>
                        vidéos métier
                    </li>
                    <li className={style.TextLiP4}>
                        contenus pour LinkedIn et communication RH
                    </li>
                </ul>

                <h2 className={style.TitleH2_00N0}>
                    Ma Vision : la cohérence d’image comme levier de performance
                </h2>

                <p className={style.TextP4}>
                    Pour moi, une image doit servir votre objectif : marque employeur, attractivité, cohérence visuelle, 
                    communication RH. <br />
                    Mon travail vise à <strong>créer des visuels utiles</strong>, impactants et adaptés à tous vos supports.
                </p>

                <h2 className={style.TitleH2_00N0}>
                    Mon Studio Photo à deux pas de Montpellier
                </h2>

                <p className={style.TextP4}>
                    Un studio professionnel dédié aux portraits corporate, avec la possibilité d’installer un studio 
                    mobile directement dans votre entreprise pour simplifier l’organisation.
                </p>

                <h2 className={style.TitleH2_00N0}>
                    Mon Engagement : un accompagnement structuré et fiable
                </h2>

                <p className={style.TextP4}>
                    Mon processus est clair : cadrage stratégique, production, post-production, livrables optimisés web 
                    & LinkedIn. <br />
                    Il garantit une expérience fluide pour vos équipes.
                </p>

                <h2 className={style.TitleH2_00N0}>
                    Travaillons Ensemble : Parlons de Votre Projet d’entreprise
                </h2>

                <p className={style.TextP4}>
                    Vous souhaitez réaliser une vidéo corporate à Montpellier, moderniser vos portraits d’entreprise ou 
                    créer un film institutionnel ? <br />
                </p>

                <p className={style.TextP4}>
                    <strong>Envie de créer une vidéo qui valorise réellement votre activité à Montpellier ?</strong>
                    <Link to={router[3].path} className={style.Link}>
                        📩 Contactez-moi - Réponse garantie sous 24h
                    </Link>
                </p>
            </div>
        </section>
    )
}

export default QuiSuisJe_Root;
