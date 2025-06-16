import style from "../../../StyleRootComponent.module.css";
// import ListDataRouter from "../../../../router/router";
// import { Link } from "react-router-dom";

import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesBlog_20250601_RootControllerData from "./ImagesBlog_20250601_RootControllerData";

function Blog_20250601_Root() {
    return (
        <section id="blog_20250601" className={`Blog_20250601_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Photographie de Mariage en Style Reportage : L’Art de Capturer l’Authentique`}
                </h1>
            </header>

            <p className={style.TextP4}>
                Le jour de votre mariage est unique. Il passe à toute vitesse, entre les préparatifs, les émotions, les 
                retrouvailles et les fous rires. Pour garder un souvenir véritable de cette journée, de plus en plus de 
                couples font le choix d’un photographe de mariage en style reportage. Mais qu’est-ce que cela signifie 
                vraiment ? Quels sont les avantages concrets de cette approche, et pourquoi pourrait-elle être faite pour 
                vous ?
            </p>

            <p className={style.TextP4}>
                Dans cet article, je vous explique tout sur ce style naturel et sincère, à travers mon regard de 
                photographe professionnelle à Montpellier.
            </p>

            {/* ----------- ---------- ---------- ---------- ---------- */}

            <h2 className={style.TitleH2}>
                {`Qu'est-ce que la photographie de mariage en style reportage ?`}
            </h2>

            <Container4ImagesRoot
                img1={ImagesBlog_20250601_RootControllerData[0].src}
                MetaNameImg1={ImagesBlog_20250601_RootControllerData[0].alt}
                img2={ImagesBlog_20250601_RootControllerData[1].src}
                MetaNameImg2={ImagesBlog_20250601_RootControllerData[1].alt}
                img3={ImagesBlog_20250601_RootControllerData[2].src}
                MetaNameImg3={ImagesBlog_20250601_RootControllerData[2].alt}
                img4={ImagesBlog_20250601_RootControllerData[3].src}
                MetaNameImg4={ImagesBlog_20250601_RootControllerData[3].alt}
            />
        </section>
    );
}

export default Blog_20250601_Root;
