import { Link } from "react-router-dom";
import style from "../../../StyleRootComponent.module.css";
import ListDataRouter from "../../../../router/router";

function GrossesseRootComponenetC() {
    return (
        <article className={`GrossesseRootComponentC ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    {"Un service clé en main : douceur, organisation et qualité"}
                </h2>
            </header>

            <h3 className={style.TitleNH4}>
                {"Séance pensée pour vous mettre à l’aise"}
            </h3>

            <p className={style.TextP4}>
                Guidage tout en subtilité, conseils pour les postures naturelles, attention à chaque détail.
            </p>

            <h3 className={style.TitleNH4}>
                {"Studio cocooning à Montpellier ou déplacement à domicile"}
            </h3>

            <p className={style.TextP4}>
                Je recrée un environnement rassurant, lumineux, avec tout le confort nécessaire pour bébé et parents.
            </p>

            <h3 className={style.TitleNH4}>
                {"Retouches légères et naturelles"}
            </h3>

            <p className={style.TextP4}>
                Votre grain de peau reste réel, vos traits sont respectés. Les retouches servent la douceur, pas la perfection artificielle.
            </p>

            <h3 className={style.TitleNH4}>
                {"Livraison rapide & formats adaptés"}
            </h3>

            <p className={style.TextP4}>
                Galerie privée, fichiers optimisés pour le tirage papier, l’album photo ou le partage en ligne.
            </p>

            <h2 className={style.TitleH2}>
                {"Votre histoire mérite d’être racontée avec délicatesse – On en parle ensemble ?"}
            </h2>

           <p className={style.TextP4}>
                Une grossesse, un nouveau-né… ces instants sont de véritables trésors. Chaque moment compte, surtout ceux-là. <br />  
                Confiez-moi le soin de les rendre éternels. <br />
                <span className={style.SpanLink}>
                    <Link to={ListDataRouter[3].path}>
                        Avant qu’ils ne deviennent de simples souvenirs, parlons-en ensemble !
                    </Link>
                </span>
            </p>
        </article>
    )
}

export default GrossesseRootComponenetC;
