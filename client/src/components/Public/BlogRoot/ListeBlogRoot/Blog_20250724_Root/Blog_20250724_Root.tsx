import style from "../../../../StyleRootComponent.module.css";
import css from "./Blog_20250724_Root.module.css";
import ListDataRouter from "../../../../../router/router";
import { Link } from "react-router-dom";

import ImagesBlog_20250724_RootControllerData from "./ImagesBlog_20250724_RootControllerData";
import PremiumCardImgSudoRoot from "../../../../Elements/premium-card-img-modal/PremiumCardImgModal.element";

function Blog_20250724_Root() {
    return (
        <section className={`Blog_20250724_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Timing idéal pour photos de grossesse à Montpellier - je vous dis tout !`}
                </h1>
            </header>

            <p className={style.TextP4}>
                Il y a quelque chose de suspendu dans le temps quand une femme attend un enfant.
                Ce n’est pas seulement un ventre qui s’arrondit, c’est un corps qui s’adapte, une énergie qui se 
                transforme, une nouvelle vie qui pousse doucement à l’intérieur.
            </p>

            <p className={style.TextP4}>
                Et, un jour, on se demande : <br />
                <span className={style.SpanBold}>
                    {`“Et si je gardais une trace de ce moment-là ?”`}
                </span>
            </p>

            <p className={style.TextP4}>
                Pas seulement une photo. Une sensation. Un souvenir à transmettre. Un fragment de ce que l’on est devenue 
                à travers la maternité.
            </p>

            <h2 className={style.TitleH2}>
                {`Shooting grossesse : pourquoi choisir la période entre 28 et 34 semaines`}
            </h2>

            <div className={css.ContainerImg}>
                <PremiumCardImgSudoRoot
                    src={ImagesBlog_20250724_RootControllerData[0].src}
                    alt={ImagesBlog_20250724_RootControllerData[0].alt}
                    className={css.Img1}
                />

                <PremiumCardImgSudoRoot
                    src={ImagesBlog_20250724_RootControllerData[1].src}
                    alt={ImagesBlog_20250724_RootControllerData[1].alt}
                    className={css.Img2}
                />
            </div>

            <p className={style.TextP4}>
                La question revient souvent. <br />
                <span className={style.SpanBold}>
                    {`Le bon moment se situe entre la 28e et la 34e semaine de grossesse. `}
                </span>
                Ce n’est pas une règle absolue, mais plutôt une observation partagée par les photographes spécialisés et de 
                nombreuses futures mamans.
            </p>

            <h3 className={style.TitleNH3R}>
                {`Pourquoi 28 à 34 semaines offrent le meilleur rendu photo`}
            </h3>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Parce que le 
                    <span className={style.SpanBold}>
                        {` ventre est bien formé, `}
                    </span>
                    rond, visible sous les vêtements.
                </li>
                <li className={style.TextLiP4}>
                    Parce que le 
                    <span className={style.SpanBold}>
                        {` corps reste encore relativement mobile et confortable `}
                    </span>
                    pour poser.
                </li>
                <li className={style.TextLiP4}>
                    Parce que le c’est souvent une période où la future maman commence à réaliser que oui, c’est bientôt.
                </li>
            </ul>

            <p className={style.TextP4}>
                Avant 28 semaines, le ventre peut encore être discret. Après 34 semaines, la fatigue devient plus présente, 
                les mouvements plus restreints, et certaines femmes ressentent un besoin de calme et d’intimité plus profond.
            </p>

            <p className={style.TextP4}>
                Cela dit... <br />
                Il n’y a pas de moment « parfait ». Il y a surtout 
                <span className={style.SpanBold}>
                    {` votre moment. `}
                </span>
                Celui où vous vous sentez prête.
            </p>

            <h2 className={style.TitleH2}>
                {`Photographe grossesse à Montpellier : des souvenirs pleins d’émotion`}
            </h2>

            <p className={style.TextP4}>
                Ce qui frappe, séance après séance, ce sont les récits, les histoires entre reconnexion à soi et mémoire émotionnelle. <br />
                Les doutes sur le regard que l’on porte sur soi. La surprise de se trouver belle. L’émotion de voir son 
                corps sous un autre angle.
            </p>

            <p className={style.TextP4}>
                La grossesse est un chamboulement visuel : on se découvre autrement. <br />
                Et souvent, la 
                <span className={style.SpanBold}>
                    {` photo vient comme un acte de reconnaissance, voire de réconciliation.`}
                </span>
            </p>

            <p className={style.TextP4}>
                Certaines femmes souhaitent immortaliser le 
                <span className={style.SpanBold}>
                    {` lien avec leur partenaire, `}
                </span>
                d’autres préfèrent une séance 
                <span className={style.SpanBold}>
                    {` en solo, `}
                </span>
                presque introspective. D'autres encore incluent leurs enfants, dans une dynamique familiale pleine de 
                tendresse et de complicité.
            </p>

            <h3 className={style.TitleNH3}>
                {`Séance photo grossesse, les atouts pour une mère et son enfant`}
            </h3>

            <p className={style.TextLiP4}>
                Ce n’est pas juste une série de clichés. C’est une expérience.
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {`Se voir vraiment : `}
                    </span>
                    {`pas à travers le prisme du miroir du matin, mais dans un espace où la lumière, les gestes et les 
                    regards sont pensés pour révéler ce que vous vivez.`}
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {`Ralentir : `}
                    </span>
                    {`prendre une pause dans un quotidien qui va vite, se reconnecter à soi.`}
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {`Créer un patrimoine visuel : `}
                    </span>
                    {`pour vous, pour votre enfant, pour plus tard.`}
                </li>
            </ul>

            <p className={style.TextP4}>
                Les portraits de grossesse à Montpellier ou ailleurs traversent le temps. Elles deviennent des repères, des 
                souvenirs de ce qu’était votre corps, votre énergie, vos attentes avant cette grande rencontre.
            </p>

            <h3 className={style.TitleNH3}>
                {`Comment bien préparer sa séance photo grossesse ?`}
            </h3>

            <p className={style.TextP4}>
                La préparation d’une séance grossesse dépend avant tout de votre
                <span className={style.SpanBold}>
                    {` style `}
                </span>
                et de votre 
                <span className={style.SpanBold}>
                    {` niveau de confort.`}
                </span>
            </p>

            <p className={style.TextP4}>
                Certaines préfèrent une ambiance épurée, 
                <span className={style.SpanBold}>
                    {` en studio, `}
                </span>
                avec un jeu de lumière doux. D’autres se tournent 
                <span className={style.SpanBold}>
                    {` en extérieur `}
                </span>
                vers la nature : les herbes hautes, le sable chaud ou la rivière autour de Montpellier. D’autres encore 
                optent pour une séance de photo grossesse 
                <span className={style.SpanBold}>
                    {` à domicile.`}
                </span>
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {`Changer de tenue, `}
                </span>
                opter pour un drapé, un jean, une robe fluide… L’important est de se sentir à l’aise, alignée avec son image.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    Un conseil souvent donné : 
                    {` prévoir des tenues neutres, `}
                </span>
                intemporelles, qui ne volent pas la vedette à l’émotion.
            </p>

            <h2 className={style.TitleH2}>
                {`Immortaliser votre grossesse : et si le moment était venu ?`}
            </h2>

            <p className={style.TextP4}>
                Faire une séance photo de grossesse à Montpellier par un photographe professionnel, ce n’est pas répondre 
                à une mode. <br />
                C’est décider que 
                <span className={style.SpanBold}>
                    {` ce moment mérite d’être vu, gardé, célébré.`}
                </span>
            </p>

            <p className={style.TextP4}>
                Entre la 28e et la 34e semaine, le corps parle, raconte. Il suffit de l’écouter, de lui donner un cadre, 
                une lumière, une pause. <br />
                Et peut-être qu’un jour, dans quelques années, votre enfant regardera ces images avec tendresse. <br />
                Et vous, avec fierté.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanLink}>
                    <Link 
                        to={`${ListDataRouter[18].path}#top`} 
                        title="Voir les prestations grossesse proposées par l'Atelier Photo Montpellier"
                    >
                        {`Envie de créer vos propres souvenirs ? Découvrez mes prestations dédiées à la photo de grossesse.`}
                    </Link>
                </span>
            </p>
        </section>
    )
}

export default Blog_20250724_Root;
