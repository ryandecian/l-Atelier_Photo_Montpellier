import style from "../../../StyleRootComponent.module.css";
// import ListDataRouter from "../../../../router/router";
// import { Link } from "react-router-dom";
import useScrollToHash from "../../../../hook/useScrollToHash";

// import ImagesBlog_20250724_RootControllerData from "./ImagesBlog_20250724_RootControllerData";
// import PremiumCardImgSudoRoot from "../../../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";

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
                Découvrez pourquoi un portrait lifestyle soigné peut transformer votre image, renforcer votre estime de 
                vous-même et offrir des souvenirs inoubliables à partager avec votre famille ou sur vos réseaux sociaux.
            </p>
        </section>
    )
}

export default Blog_20250724_Root;
