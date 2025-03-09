import style from "./HomeRootComposantC.module.css"
import ContainerImgHomeRoot from "../ComposantHomeRoot/ContainerImgHomeRoot/ContainerImgHomeRoot";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";

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
        MetaNameimg7: "Photo de mariage Sun Glass",
        img8: img8,
        MetaNameimg8: "Pride et mariage",
    }
    return (
        <section className={style.HomeRootComposantC}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Votre mariage, ce moment tant attendu !
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
                    Il y a des jours où le temps semble suspendu, où chaque battement de cœur résonne fort et où chaque 
                    minute passe à la vitesse d’une seconde. {" "}
                    <span className={style.SpanBold}>
                        {"Votre mariage est bien plus qu’un événement."}
                    </span>
                   {" "} C’est une promesse murmurée entre vous deux et une acclamation partagée avec ceux que vous aimez. 
                   En tant que photographe de mariage à Montpellier, je ne me contente pas de prendre des photos. {" "}
                   <span className={style.SpanBold}>
                        {"Je capture l’essence même de votre union."}
                    </span>
                </p>
            </article>
            <article className={style.ContainerText}>
                <p className={`${style.Text} ${style.TargetText1}`}>
                    Discrète mais toujours présente, je me fonds parmi vos invités pour saisir les éclats de rire, les 
                    étreintes sincères, les petites attentions qui font toute la différence. Je travaille comme un témoin 
                    invisible, figeant {" "}
                    <span className={style.SpanBold}>
                        {"l’instant sans jamais le forcer."}
                    </span>
                    {" "} Et après la fête, lorsque tout semble redevenu silencieux, il restera ces images, ce déroulé de 
                    cette énorme journée, ces clichés que vous redécouvrirez au fil des années, que vous partagerez avec 
                    vos proches, que vous transmettrez peut-être un jour.  
                </p>
            </article>
            <article className={style.ContainerText}>
                    <p className={style.Text}>
                        Découvrez plus en détail {" "}
                        <span className={style.SpanLink}>
                            <Link to={ListDataRouter[13].path}>
                                {"mes prestations de mariage !"}
                            </Link>
                        </span>
                    </p>
                </article>

        </section>
    );
}

export default HomeRootComposantC;
