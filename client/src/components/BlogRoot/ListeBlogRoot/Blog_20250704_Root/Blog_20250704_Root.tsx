import style from "../../../StyleRootComponent.module.css";
import ListDataRouter from "../../../../router/router";
import { Link } from "react-router-dom";
import useScrollToHash from "../../../../hook/useScrollToHash";

import Container4ImagesPortraitRoot from "../../../ContainerImageRoot/Container4ImagesPortraitRoot/Container4ImagesPortraitRoot";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
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

            <h2 className={style.TitleH2}>
                {`Comment un portrait lifestyle nourrit l’estime de soi`}
            </h2>

            <p className={style.TextP4}>
                Une fois la glace rompue, la séance se transforme en moment complice et ludique. <br />
                C’est souvent à ce moment précis que les plus belles photos naissent : <br />
                {`📸 des sourires sincères, des regards confiants, un naturel retrouvé.`}
            </p>

            <p className={style.TextP4}>
                Un portrait lifestyle bien réalisé permet de : <br />
            </p>
            
            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Vous voir sous un angle valorisant que vous ne soupçonniez pas
                </li>
                <li className={style.TextLiP4}>
                    Renforcer votre confiance en vous grâce à des images où vous vous trouvez beau/belle
                </li>
                <li className={style.TextLiP4}>
                    Partager des photos authentiques et lumineuses avec vos proches
                </li>
                <li className={style.TextLiP4}>
                    Communiquer une image engageante et positive sur vos réseaux sociaux
                </li>
                <br />
            </ul>

            <Container4ImagesRoot
                img1={ImagesBlog_20250704_RootControllerData[4].src}
                MetaNameImg1={ImagesBlog_20250704_RootControllerData[4].alt}
                img2={ImagesBlog_20250704_RootControllerData[5].src}
                MetaNameImg2={ImagesBlog_20250704_RootControllerData[5].alt}
                img3={ImagesBlog_20250704_RootControllerData[6].src}
                MetaNameImg3={ImagesBlog_20250704_RootControllerData[6].alt}
                img4={ImagesBlog_20250704_RootControllerData[7].src}
                MetaNameImg4={ImagesBlog_20250704_RootControllerData[7].alt}
            />

            <h2 className={style.TitleH2}>
                {`Les ingrédients d’un portrait lifestyle réussi`}
            </h2>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {`1️⃣ Spontanéité`}
                </span>
            </p>
            <p className={style.TextP4}>
                L’objectif est de capturer des instants vrais, loin des poses figées.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {`2️⃣ Confort`}
                </span>
            </p>
            <p className={style.TextP4}>
                Choisir un décor qui vous met à l’aise : un coin de nature, une ruelle colorée, votre lieu préféré... 
                Le cadre est essentiel pour que vous vous sentiez bien.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {`3️⃣ Émotion`}
                </span>
            </p>
            <p className={style.TextP4}>
                Un portrait lifestyle réussi, c’est un portrait qui transmet quelque chose. Joie, tendresse, fierté... 
                Ces émotions rendent la photo unique.
            </p>

            <p className={style.TextP4}>
                <span className={style.SpanBold}>
                    {`4️⃣ Accompagnement bienveillant`}
                </span>
            </p>
            <p className={style.TextP4}>
                Un photographe professionnel sait vous guider pas à pas pour vous aider à relâcher la pression et à profiter 
                pleinement de l’expérience.
            </p>

            <Container4ImagesRoot
                img1={ImagesBlog_20250704_RootControllerData[8].src}
                MetaNameImg1={ImagesBlog_20250704_RootControllerData[8].alt}
                img2={ImagesBlog_20250704_RootControllerData[9].src}
                MetaNameImg2={ImagesBlog_20250704_RootControllerData[9].alt}
                img3={ImagesBlog_20250704_RootControllerData[10].src}
                MetaNameImg3={ImagesBlog_20250704_RootControllerData[10].alt}
                img4={ImagesBlog_20250704_RootControllerData[11].src}
                MetaNameImg4={ImagesBlog_20250704_RootControllerData[11].alt}
            />

            <h2 className={style.TitleH2}>
                {`Portrait lifestyle VS photo posée : quelles différences ?`}
            </h2>
            
            <p className={style.TextP4}>
                Une photo classique peut être belle, mais elle manque souvent de vie et de naturel. <br />
                👉 Un portrait lifestyle, c’est :
            </p>
            
            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    Un moment partagé qui crée un souvenir
                </li>
                <li className={style.TextLiP4}>
                    Une image qui raconte votre histoire
                </li>
                <li className={style.TextLiP4}>
                    Un résultat où vous êtes vous-même, sublimé sans artifice
                </li>
                <li className={style.TextLiP4}>
                    Des photos intemporelles que vous aurez envie de transmettre à vos enfants et petits-enfants
                </li>
                <br />
            </ul>

        </section>
    )
}

export default Blog_20250704_Root;

// Photographie de Portrait LifeStyle : 
