import style from "./HomeRootComposantC.module.css"
import ContainerImgHomeRoot from "../ComposantHomeRoot/ContainerImgHomeRoot";
import { Link } from "react-router-dom";

/* Import des images*/
import img5 from "../../../../assets/Images/ImageHomePage/Homeimg5.jpg";
import img6 from "../../../../assets/Images/ImageHomePage/Homeimg6.jpg";
import img7 from "../../../../assets/Images/ImageHomePage/Homeimg7.jpg";
import img8 from "../../../../assets/Images/ImageHomePage/Homeimg8.jpg";

function HomeRootComposantC() {
    const data = {
        img5: img5,
        MetaNameimg5: "Les mariés vers la mairie",
        img6: img6,
        MetaNameimg6: "Portrait Mariage a là Tour Magne",
        img7: img7,
        MetaNameimg7: "Photo de mariage avec enfant",
        img8: img8,
        MetaNameimg8: "Les mariés en Selfie à Palavas",
    }
    return (
        <section className={style.HomeRootComposantB}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Chaque portrait a son histoire à raconter
                </h2>
            </header>

            <ContainerImgHomeRoot
                img1={data.img5}
                MetaNameImg1={data.MetaNameimg5}
                img2={data.img6}
                MetaNameImg2={data.MetaNameimg6}
                img3={data.img7}
                MetaNameImg3={data.MetaNameimg7}
                img4={data.img8}
                MetaNameImg4={data.MetaNameimg8}
            />

            <article className={style.ContainerText}>
                <p className={`${style.Text} ${style.TargetText1}`}>
                    C’est pourquoi en tant que photographe professionnelle installée à Montpellier 
                    je cherche à capturer ces histoires. Pour son entreprise, pour ses réseaux 
                    sociaux, pour une connivence…je cherche à capturer ce qui fait votre force, 
                    votre énergie, votre rayonnement.
                </p>
            </article>
            <article className={style.ContainerText}>
                <p className={style.Text}>
                    Que vous cherchiez un portrait corporate pour affirmer votre crédibilité, un 
                    portrait lifestyle qui capte la douceur de votre quotidien, ou encore un moment 
                    familial empreint de complicité, chaque séance est conçue pour vous mettre en 
                    lumière dans toute votre singularité. En tant que photographe professionnelle 
                    je peux travailler en studio ou en extérieur, selon vos envies, dans une 
                    atmosphère calme et chaleureuse.
                </p>
            </article>
            <article className={style.ContainerText}>
                <p className={style.Text}>
                    Ce que j’aime particulièrement, c’est le moment où, après une séance pleine 
                    d’échange, vous repartez non seulement avec des clichés qui vous plaisent, 
                    mais surtout avec ce sourire sincère qui en dit long sur l’expérience vécue. 
                    Pour moi, chaque portrait est une célébration de l’authenticité et un précieux 
                    souvenir à chérir.
                </p>
            </article>
            <article className={style.ContainerText}>
                    <p className={style.Text}>
                        Commencez à planifier dès maintenant votre séance que ce soit pour un portrait en {" "}
                        <span className={style.Span}>
                            <Link to="portrait-lifestyle">
                                {"solo"}
                            </Link>
                        </span>
                        , en {" "}
                        <span className={style.Span}>
                            <Link to="portrait">
                                {"couple"}
                            </Link>
                        </span>
                        , en famille, entre amis ou pour une entreprise avec des photos {" "}
                        <span className={style.Span}>
                            <Link to="#">
                                {"corporate"}
                            </Link>
                        </span>
                        {" !"}
                    </p>
                </article>

        </section>
    );
}

export default HomeRootComposantC;