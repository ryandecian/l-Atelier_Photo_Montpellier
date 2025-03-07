import style from "./HomeRootComposantB.module.css"
import ContainerImgHomeRoot from "../ComposantHomeRoot/ContainerImgHomeRoot/ContainerImgHomeRoot";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";

/* Import des images*/
import img1 from "../../../../assets/Images/ImageHomePage/HomeImg1.jpg";
import img2 from "../../../../assets/Images/ImageHomePage/HomeImg2.jpg";
import img3 from "../../../../assets/Images/ImageHomePage/HomeImg3.jpg";
import img4 from "../../../../assets/Images/ImageHomePage/HomeImg4.jpg";

function HomeRootComposantB() {
    const data1 = {
        img1: img1,
        MetaNameImg1: "Portrait Studio Corporate",
        img2: img2,
        MetaNameImg2: "Portrait Père et fils LifeStyle",
        img3: img3,
        MetaNameImg3: "Portrait jeune femme lumière naturelle",
        img4: img4,
        MetaNameImg4: "Shooting couple studio"
    }
    return (
        <section className={style.HomeRootComposantB}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Chaque portrait a son histoire à raconter
                </h2>
            </header>

            <ContainerImgHomeRoot
                img1={data1.img1}
                MetaNameImg1={data1.MetaNameImg1}
                img2={data1.img2}
                MetaNameImg2={data1.MetaNameImg2}
                img3={data1.img3}
                MetaNameImg3={data1.MetaNameImg3}
                img4={data1.img4}
                MetaNameImg4={data1.MetaNameImg4}
            />

            <article className={style.ContainerText}>
                <p className={`${style.Text} ${style.TargetText1}`}>
                    Et je cherche à capturer ces histoires. Pour son entreprise, pour ses réseaux 
                    sociaux, pour une connivence…je cherche à trouver la photo de portrait qui fait 
                    votre force, votre énergie, {" "}
                    <span className={style.SpanBold}>
                        {"votre rayonnement."}
                    </span>
                </p>
            </article>
            <article className={style.ContainerText}>
                <p className={style.Text}>
                    Que vous cherchiez un {" "}
                    <span className={style.SpanBold}>
                        {"portrait corporate"}
                    </span>
                    {" "} pour affirmer votre crédibilité, un {" "}
                    <span className={style.SpanBold}>
                        {"portrait lifestyle"}
                    </span>
                    {" "} qui capte l’ambiance d’un moment, ou encore un moment familial empreint 
                    de complicité, chaque séance est conçue pour vous mettre en lumière dans toute 
                    votre singularité. En tant que photographe professionnelle {" "} 
                    <span className={style.SpanBold}>
                        {"je peux travailler en studio ou en extérieur"}
                    </span>
                    , selon vos envies, dans une atmosphère calme et chaleureuse.
                </p>
            </article>
            <article className={style.ContainerText}>
                <p className={style.Text}>
                    Et pour moi la réussite d’un shooting tient à ce que vous repartiez non seulement 
                    après avoir passé un bon moment, mais surtout avec des photos qui vous plaisent, 
                    que vous avez envie de partager sur vos réseaux, et vous puissiez vous dire {" "}
                    <span className={style.SpanLine}>
                        {"ah oui je m’aime bien dessus !"}
                    </span>
                    {" "} Commencez à planifier dès maintenant {" "}
                    <span className={style.SpanLink}>
                            <Link to={ListDataRouter[12].path}>
                                {"votre séance"}
                            </Link>
                    </span>
                    {" !"}
                </p>
            </article>
        </section>
    );
}

export default HomeRootComposantB;
