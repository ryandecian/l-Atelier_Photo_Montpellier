import style from "../../../StyleRootComponent.module.css";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";
import PremiumCardImgSudoRoot from "../../../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";

function HomePCAutorComponentF() {

  return (
    <section className={`HomeRootComponentF ${style.ContainerRoot}`}>
        <header className={style.ContainerTitle}>
            <h2 className={style.TitleH2}>
                {`Un peu plus sur moi ?`}
            </h2>
        </header>

        <div className={style.ContainerFloat}>
            <figure className={style.FloatLeftImg_Po}>
                <PremiumCardImgSudoRoot 
                    className={style.ImgOnFigure}
                    src="./images/anne-saunier/lapm-photographe-professionnelle-anne-saunier-grabels-l-atelier-photo-montpellier.jpg" 
                    alt="Portrait de la photographe professionnelle Anne SAUNIER"
                />
                <figcaption className={style.Figcaption}>
                    Anne SAUNIER
                </figcaption>
            </figure>

            <p className={style.TextP4}>
                Ma passion pour la photographie a commencé avec l’argentique, dans une salle de bains de la maison familiale 
                transformée en labo photo. Après une pause, c’est par l’image immobilière que j’ai renoué avec l’art du 
                cadrage et de la lumière. Puis, avec le studio, j’ai perfectionné mon travail sur l’éclairage, notamment 
                grâce au flash. Aujourd’hui, je mets cette expertise au service du portrait et du reportage de mariage, 
                toujours à la recherche d’authenticité et d’émotion.
            </p>

            <p className={style.TextP4}>
                Comme une séance de massage, un shooting photo commence souvent avec un peu d’appréhension. On ne sait pas 
                comment poser, on doute… Mais rapidement, la tension s’efface. Mon rôle ? Vous guider avec bienveillance 
                pour que ce moment devienne fluide, naturel, et surtout agréable c’est ma première mission. La deuxième 
                c’est qu’à la vue de vos photos vous faisiez WOUAH ! Pour en savoir encore un peu plus sur moi rendez vous 
                sur ma page {` `}
                <span className={style.SpanLink}>
                    <Link to={`${ListDataRouter[7].path}#top`}>
                        {`QUI SUIS-JE`}
                    </Link>
                </span>
            </p>
            <p className={style.TextP4}>
                {`📸 **Laissez-vous guider, repartez avec des images qui vous AIMEZ. `}
                <span className={style.SpanLink}>
                    <Link to={`${ListDataRouter[8].path}#top`}>
                        {`Découvez mon Portfolio !`}
                    </Link>
                </span>
            </p>
        </div>
    </section>
  );
};

export default HomePCAutorComponentF;
