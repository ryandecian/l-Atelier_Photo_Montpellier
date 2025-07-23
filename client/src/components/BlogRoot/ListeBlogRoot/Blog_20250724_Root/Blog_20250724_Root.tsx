import style from "../../../StyleRootComponent.module.css";
import css from "./Blog_20250724_Root.module.css";
// import ListDataRouter from "../../../../router/router";
// import { Link } from "react-router-dom";
import useScrollToHash from "../../../../hook/useScrollToHash";

import ImagesBlog_20250724_RootControllerData from "./ImagesBlog_20250724_RootControllerData";
import PremiumCardImgSudoRoot from "../../../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";

function Blog_20250724_Root() {
    useScrollToHash(); // Hook pour gérer le scroll vers les ancres

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
        </section>
    )
}

export default Blog_20250724_Root;
