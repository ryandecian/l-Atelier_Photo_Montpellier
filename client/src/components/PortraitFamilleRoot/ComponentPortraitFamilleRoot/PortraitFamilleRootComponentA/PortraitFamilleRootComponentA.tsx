import style from "../../../StyleRootComponent.module.css";
import css from "../../../StyleRootComponent.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesPortraitFamilleControllerData from "../../ImagesPortraitFamilleControllerData";

function PortraitFamilleRootComponentA() {
  return (
    <section className={`PortraitFamilleRootComponentA ${style.ContainerRoot}`}>
        <header className={style.ContainerTitle}>
            <h2 className={style.TitleH2}>
                {"Offrez-vous une séance photo en famille, entre amis ou en groupe pour des souvenirs authentiques."}
            </h2>
        </header>

        <article className={style.ContainerText}>
            <h3 className={style.TitleNH3}>
                💞 Ces instants qui ne reviendront pas
            </h3>

            <p className={style.TextP4}>
                Un regard de fierté pendant une remise de diplôme. <br />
                Un baiser volé sur le front d’un enfant baptisé. <br />
                Une robe ou un costume pour le bal de fin d’année, un sourire timide, un papa ému dans un coin.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {"Ces moments-là, ils passent vite, "}
                </span> trop vite. <br />
                Et pourtant, ils marquent toute une vie. <br />
                <span className={style.SpanBold}>
                    {"Alors pourquoi ne pas les garder, "}
                </span> vraiment ?
            </p>

            <p className={style.TextP4}>
                Chez L’Atelier Photo Montpellier, je vous propose de figer ces instants précieux, de les transformer en 
                <span className={style.SpanBold}>
                    {" souvenirs vivants, "}
                </span>
                que vous regarderez ensemble, plus tard.
            </p>

            <Container4ImagesRoot
                img1={ImagesPortraitFamilleControllerData[0].src}
                MetaNameImg1={ImagesPortraitFamilleControllerData[0].alt}
                img2={ImagesPortraitFamilleControllerData[1].src}
                MetaNameImg2={ImagesPortraitFamilleControllerData[1].alt}
                img3={ImagesPortraitFamilleControllerData[2].src}
                MetaNameImg3={ImagesPortraitFamilleControllerData[2].alt}
                img4={ImagesPortraitFamilleControllerData[3].src}
                MetaNameImg4={ImagesPortraitFamilleControllerData[3].alt}
            />
        </article>

        <article className={style.ContainerText}>
            <h3 className={css.TitleNH3}>
                {"🌿 Photographier les étapes de la vie, ensemble"}
            </h3>

            <h4 className={style.TitleNH4}></h4>

            <p className={style.TextP4}>
                Quelques exemples de ces moments clés :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" Baptême : "}
                    </span>
                    dans l’église ou juste après, entre émotion et câlins de famille.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" Remise de diplôme : "}
                    </span>
                    les yeux brillants, la toge, les embrassades de fin de parcours.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" Bal de fin d’année : "}
                    </span>
                    l’élégance d’un soir, les premiers souvenirs d’adulte.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" Anniversaire marquant : "}
                    </span>
                    1 an, 18 ans, 40 ans, 70 ans... chaque âge a son éclat.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {" Déménagement : "}
                    </span>
                    pour marquer le début d’une nouvelle aventure.
                </li>
                <br />
            </ul>
        
                <p className={style.TextP4}>
                    Ces rendez-vous sont autant d’occasions de rassembler plusieurs générations autour d’un même moment. Et de créer un
                    <span className={style.SpanBold}>
                        {" album émotionnel "}
                    </span>
                    que vos enfants ou vos parents ou vos petits-enfants feuilletteront plus tard.
                </p>
        </article>
    </section>
  );
}

export default PortraitFamilleRootComponentA;
