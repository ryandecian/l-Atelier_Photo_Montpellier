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

            <h2 className={style.TitleH2}>
                {`Pourquoi réaliser un portrait lifestyle ?`}
            </h2>

            <p className={style.TextP4}>
                Dans un monde où l’image occupe une place centrale, un portrait lifestyle va bien au-delà d’une simple photo : 
                il raconte une histoire, capture une émotion et révèle votre personnalité dans un cadre naturel qui vous ressemble.
            </p>

            <p className={style.TextP4}>
                Un portrait lifestyle, c’est avant tout une expérience. <br />
                En tant que photographe portraitiste à Montpellier, j’observe chaque jour à quel point ces séances permettent 
                à mes clients de se découvrir sous un jour nouveau et de se sentir fiers d’eux-mêmes.
            </p>

            <Container4ImagesPortraitRoot
                img1={ImagesBlog_20250704_RootControllerData[0].src}
                MetaNameImg1={ImagesBlog_20250704_RootControllerData[0].alt}
                img2={ImagesBlog_20250704_RootControllerData[1].src}
                MetaNameImg2={ImagesBlog_20250704_RootControllerData[1].alt}
                img3={ImagesBlog_20250704_RootControllerData[2].src}
                MetaNameImg3={ImagesBlog_20250704_RootControllerData[2].alt}
                img4={ImagesBlog_20250704_RootControllerData[3].src}
                MetaNameImg4={ImagesBlog_20250704_RootControllerData[3].alt}
            />

            g
        </section>
    )
}

export default Blog_20250704_Root;

// Photographie de Portrait LifeStyle : 
