import style from "../../../StyleRootComponent.module.css";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";

function PortraitDuoRootComponentC() {
  return (
    <article className={`PortraitDuoRootComponentC ${style.ContainerRoot}`}>
        <header className={style.ContainerTitle}>
            <h2 className={style.TitleH2}>
                {"Un accompagnement complet et bienveillant, pensé pour les duos"}
            </h2>
        </header>

        <h3 className={style.TitleNH4}>
            {"Une séance sur-mesure, sans pression"}
        </h3>
        <p className={style.TextP4}>
            📍 En studio à Montpellier ou en pleine nature et en lumière naturelle, selon vos envies.
        </p>

        <h3 className={style.TitleNH4}>
            {"Un accompagnement sur-mesure"}
        </h3>
        <p className={style.TextP4}>
            🎯 Conseils de tenues, ambiance musicale si besoin, échanges fluides pour guider sans figer.
        </p>

        <h3 className={style.TitleNH4}>
            {"Une expérience hors du temps"}
        </h3>
        <p className={style.TextP4}>
            💬 Rythme calme, pauses si besoin, jeux de regards, rires ou silences bienvenus.
        </p>

        <h3 className={style.TitleNH4}>
            {"Des images sensibles et naturelles"}
        </h3>
        <p className={style.TextP4}>
            🖼️ 10 à 20 images livrées via galerie privée, avec des retouches douces et cohérentes.
        </p>

        <h2 className={style.TitleH2}>
            {"Et si vous vous offriez un instant rien qu’à vous – On en parle ensemble ?"}
        </h2>

        <p className={style.TextP4}>
            Un portrait, c’est bien plus qu’une image. C’est un moment pour se (re)découvrir, se révéler, s’honorer. <br />
            Que ce soit pour marquer un cap, célébrer une étape ou simplement se faire plaisir… <br />
            <span className={style.SpanLink}>
                <Link to={ListDataRouter[3].path}>
                    Parlons de ce que vous aimeriez capturer, pour que votre lumière vous ressemble.
                </Link>
            </span>
        </p>
    </article>
  );
}

export default PortraitDuoRootComponentC;
