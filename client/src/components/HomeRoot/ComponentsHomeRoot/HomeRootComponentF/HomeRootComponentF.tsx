import style from "../../../StyleRootComponent.module.css";
import css from "./HomeRootComponentF.module.css"
import AnneSAUNIER from "../../../../assets/Images/AnneSAUNIER/AnneSAUNIER.jpg";
import { Link } from "react-router-dom";
import ListDataRouter from "../../../../router/router";
import { useState, useEffect } from "react";

type textHTMLType = {
    htmlA: string,
    htmlB: string,
    htmlC: string,
    htmlD: string,
    htmlE: string,
    htmlF: string,
    htmlG: string,
    htmlH: string,
    htmlI: string,
    htmlJ: JSX.Element,
    htmlK: JSX.Element,
    htmlL: string,
    htmlM: JSX.Element,
}

function HomePCAutorComponentF() {
    const textHTML: textHTMLType = {
        htmlA: `Ma passion pour la photographie a commencé avec l’argentique, dans une salle de bains de la maison 
                familiale transformée en labo photo. `,
        htmlB: `Après une pause, c’est par l’image immobilière que j’ai renoué avec l’art du cadrage et de la lumière. `,
        htmlC: `Puis, avec le studio, j’ai perfectionné mon travail sur l’éclairage, notamment grâce au flash. `,
        htmlD: `Aujourd’hui, je mets cette expertise au service du portrait et du reportage de mariage, toujours à la recherche d’authenticité et 
                d’émotion. `,
        htmlE: `Comme une séance de massage, un shooting photo commence souvent avec un peu d’appréhension. `,
        htmlF: `On ne sait pas comment poser, on doute… Mais rapidement, la tension s’efface. `,
        htmlG: `Mon rôle ? Vous guider avec bienveillance pour que ce moment devienne fluide, naturel, et surtout agréable c’est ma première mission. `,
        htmlH: `La deuxième c’est qu’à la vue de vos photos vous faisiez WOUAH ! `,
        htmlI: `Pour en savoir encore un peu plus sur moi rendez vous sur ma page `,
        htmlJ: (
            <span className={style.SpanLink}>
                <Link to={ListDataRouter[7].path}>
                    QUI SUIS-JE
                </Link>
            </span>
        ),
        htmlK: (
            <figure className={css.ContainerPortraitAutor}>
                    <img src={AnneSAUNIER} alt="Portrait de la photographe professionnelle Anne SAUNIER" className={css.AutorImg}/>
                    <figcaption className={style.SpanBold}>
                        Anne SAUNIER
                    </figcaption>
                </figure>
        ),
        htmlL: "📸 **Laissez-vous guider, repartez avec des images qui vous AIMEZ. ",
        htmlM: (
            <span className={style.SpanLink}>
                <Link to={ListDataRouter[8].path}>
                    Découvez mon Portfolio !
                </Link>
            </span>
        ),
    }

    const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => {
          setViewportWidth(window.innerWidth);
        };
    
        // Ajout de l'écouteur d'événements pour la redimensionnement de la fenêtre
        window.addEventListener("resize", updateWidth);
    
        // Nettoyage lors du démontage du composant
        return () => {
          window.removeEventListener("resize", updateWidth);
        };
    }, []);


  return (
    <section className={`HomeRootComponentF ${style.ContainerRoot}`}>
        <header className={style.ContainerTitle}>
            <h2 className={style.TitleH2}>
                Un peu plus sur moi ?
            </h2>
        </header>

        <article className={css.ContainerProfilCard}>

            {/* MediaQuery maison */}
            {viewportWidth <= 550 && (
                <>
                    {textHTML.htmlK}
                    <div className={style.ContainerText}>
                        <p className={style.TextP4}>
                            {textHTML.htmlA}
                            {textHTML.htmlB}
                            {textHTML.htmlC}
                            {textHTML.htmlD}
                        </p>
                        <p className={style.TextP4}>
                            {textHTML.htmlE}
                            {textHTML.htmlF}
                            {textHTML.htmlG}
                            {textHTML.htmlH}
                            {textHTML.htmlI}
                            {textHTML.htmlJ}
                        </p>
                        <p className={`${style.TextP4} ${style.TextP4Target}`}>
                            {textHTML.htmlL}
                            {textHTML.htmlM}
                        </p>
                    </div>
                </>
            )}


            {/* MediaQuery maison */}
            {viewportWidth > 550 && viewportWidth <= 700 && (
                <>
                    <div className={style.ContainerRoot}>
                        {textHTML.htmlK}
                        <div className={style.ContainerText}>
                            <p className={style.TextP4}>
                                {textHTML.htmlA}
                                {textHTML.htmlB}
                                {textHTML.htmlC}
                                {textHTML.htmlD}
                            </p>
                        </div>
                    </div>
                    <p className={css.TextTarget1}>
                        {textHTML.htmlE}
                        {textHTML.htmlF}
                        {textHTML.htmlG}
                        {textHTML.htmlH}
                        {textHTML.htmlI}
                        {textHTML.htmlJ}
                    </p>
                    <p className={css.TextTarget2}>
                        {textHTML.htmlL}
                        {textHTML.htmlM}
                    </p>
                </>
            )}


            {/* MediaQuery maison */}
            {viewportWidth > 700 && viewportWidth <= 800 && (
                <>
                    <div className={css.ContainerRoot}>
                        {textHTML.htmlK}
                        <div className={style.ContainerText}>
                            <p className={style.TextP4}>
                                {textHTML.htmlA}
                                {textHTML.htmlB}
                                {textHTML.htmlC}
                                {textHTML.htmlD}
                            </p>
                            <p className={style.TextP4}>
                                {textHTML.htmlE}
                                {textHTML.htmlF}
                            </p>
                        </div>
                    </div>
                    <p className={css.TextTarget1}>
                        {textHTML.htmlG}
                        {textHTML.htmlH}
                        {textHTML.htmlI}
                        {textHTML.htmlJ}
                    </p>
                    <p className={css.TextTarget2}>
                        {textHTML.htmlL}
                        {textHTML.htmlM}
                    </p>
                </>
            )}


            {/* MediaQuery maison */}
            {viewportWidth > 800 && viewportWidth <= 1000 && (
                <>
                    <div className={css.ContainerRoot}>
                        {textHTML.htmlK}
                        <div className={style.ContainerText}>
                            <p className={style.TextP4}>
                                {textHTML.htmlA}
                                {textHTML.htmlB}
                                {textHTML.htmlC}
                                {textHTML.htmlD}
                            </p>
                            <p className={style.TextP4}>
                                {textHTML.htmlE}
                                {textHTML.htmlF}
                                {textHTML.htmlG}
                                {textHTML.htmlH}
                                {textHTML.htmlI}
                                {textHTML.htmlJ}
                            </p>
                        </div>
                    </div>
                    <p className={css.TextTarget1}>
                        {textHTML.htmlL}
                        {textHTML.htmlM}
                    </p>
                </>
            )}


            {/* MediaQuery maison */}
            {viewportWidth > 1000 && (
                <>
                    <div className={css.ContainerRoot}>
                        {textHTML.htmlK}
                        <div className={style.ContainerText}>
                            <p className={style.TextP4}>
                                {textHTML.htmlA}
                                {textHTML.htmlB}
                                {textHTML.htmlC}
                                {textHTML.htmlD}
                            </p>
                            <p className={style.TextP4}>
                                {textHTML.htmlE}
                                {textHTML.htmlF}
                                {textHTML.htmlG}
                                {textHTML.htmlH}
                                {textHTML.htmlI}
                                {textHTML.htmlJ}
                            </p>
                            <p className={style.TextP4}>
                                {textHTML.htmlL}
                                {textHTML.htmlM}
                            </p>
                        </div>
                    </div>
                </>
            )}
            
        </article>
    </section>
  );
};

export default HomePCAutorComponentF;
