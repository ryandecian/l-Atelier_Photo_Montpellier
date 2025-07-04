import style from "../../../StyleRootComponent.module.css";
import ListDataRouter from "../../../../router/router";
import { Link } from "react-router-dom";
import useScrollToHash from "../../../../hook/useScrollToHash";

import Container4ImagesPortraitRoot from "../../../ContainerImageRoot/Container4ImagesPortraitRoot/Container4ImagesPortraitRoot";
import ImagesBlog_20250704_RootControllerData from "./ImagesBlog_20250704_RootControllerData";

function Blog_20250704_Root() {
    useScrollToHash(); // Hook pour gérer le scroll vers les ancres

    return (
        <section id="blog_20250704" className={`Blog_20250704_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Photographie de Portrait LifeStyle : découvrez une version valorisante de vous-même`}
                </h1>
            </header>

            <p className={style.TextP4}>
                Découvrez pourquoi un portrait lifestyle soigné peut transformer votre image, renforcer votre estime de 
                vous-même et offrir des souvenirs inoubliables à partager avec votre famille ou sur vos réseaux sociaux.
            </p>

            <h2 className={style.TitleH2}></h2>
        </section>
    )
}

export default Blog_20250704_Root;

// Photographie de Portrait LifeStyle : 
