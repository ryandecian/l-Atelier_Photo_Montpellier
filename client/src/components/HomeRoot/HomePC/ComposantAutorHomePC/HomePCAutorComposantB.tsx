import style from "./HomePCAutorComposantB.module.css";
import AnneSAUNIER from "../../../../assets/Images/AnneSAUNIER/AnneSAUNIER.jpg";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";

function HomePCAutorComposantB() {
  return (
    <section className={style.HomePCAutorComposantB}>
        <header className={style.ContainerTitle}>
            <h2 className={style.Title}>
                Un peu plus sur moi ?
            </h2>
        </header>

        <article className={style.ContainerProfilCard}>

            <div className={style.CoucheA}>

                <figure className={style.ContainerPortraitAutor}>
                    <img src={AnneSAUNIER} alt="Portrait de la photographe professionnelle Anne SAUNIER" className={style.AutorImg}/>
                    <figcaption className={style.AutorName}>
                        Anne SAUNIER
                    </figcaption>
                </figure>

                <div className={style.ContainerText}>
                    <p className={style.Text}>
                        Ma passion pour la photographie a commencé avec l’argentique, dans une salle de bains de la maison 
                        familiale transformée en labo photo. Après une pause, c’est par l’image immobilière que j’ai renoué 
                        avec l’art du cadrage et de la lumière. Puis, avec le studio, j’ai perfectionné mon travail sur 
                        l’éclairage, notamment grâce au flash. Aujourd’hui, je mets cette expertise au service du portrait 
                        et du reportage de mariage, toujours à la recherche d’authenticité et d’émotion.
                    </p>
                    <p className={style.Text}>
                        Comme une séance de massage, un shooting photo commence souvent avec un peu d’appréhension. On ne 
                        sait pas comment poser, on doute… Mais rapidement, la tension s’efface. Mon rôle ? Vous guider avec 
                        bienveillance pour que ce moment devienne fluide, naturel, et surtout agréable c’est ma première mission. 
                        La deuxième c’est qu’à la vue de vos photos vous faisiez WOUAH ! Pour en savoir encore un peu plus sur 
                        moi rendez vous sur ma page {" "}
                        <span className={style.SpanLink}>
                            <Link to={ListDataRouter[7].path}>
                                QUI SUIS-JE
                            </Link>
                        </span>
                    </p>
                </div>

            </div>

            <p className={style.TextTarget1}>
                📸 **Laissez-vous guider, repartez avec des images qui vous AIMEZ. {" "}
                <span className={style.SpanLink}>
                    <Link to={ListDataRouter[8].path}>
                        Découvez mon Portfolio !
                    </Link>
                </span>
            </p>
        </article>
    </section>
  );
};

export default HomePCAutorComposantB;
