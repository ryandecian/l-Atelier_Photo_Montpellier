import style from "../StyleRootComponent.module.css";
import css from "./QuiSuisJeRoot.module.css";
import { Link } from "react-router-dom";

import PremiumCardImgSudoRoot from "../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";
import useMediaQueriesWidth from "../../hook/mediaQueriesWidth.utils.hook";

import ListDataRouter from "../../router/router";

type textHTMLType = {
    htmlA: JSX.Element;
    htmlB: string;
    htmlC: string;
    htmlD: string;
    htmlE: JSX.Element;
    htmlF: string;
    htmlG: string;
    htmlH: string;
    htmlI: string;
    htmlJ: string;
    htmlK: JSX.Element;
    htmlL: string;
    htmlM: string;
    htmlN: JSX.Element;
}

function QuiSuisJeRoot() {
    const viewportWidth: number = useMediaQueriesWidth();
    const router = ListDataRouter[2].path; // Tarifs

    const textHTML: textHTMLType = {
        htmlA: (
            <figure className={css.ContainerPortraitAutor}>
                <PremiumCardImgSudoRoot src="./images/image-qui-suis-je/lapm-photographe-anne-saunier-l-atelier-photo-montpellier.jpg" alt="Portrait de la photographe professionnelle Anne SAUNIER" className={css.AutorImg} />
                <figcaption className={style.SpanBold}>
                    Anne SAUNIER
                </figcaption>
            </figure>
        ),
        htmlB: "C’est par la photographie immobilière que je suis revenue à mes premières amours. ",
        htmlC: "J'ai progressivement redécouvert la magie de l’image, tout en me familiarisant avec les nouvelles technologies numériques. ",
        htmlD: "Depuis 7 ans, mon engagement en photographie est devenu plus profond, et ",
        htmlE: (
            <span className={style.SpanBold}>
                {"j’ai développé une expertise réelle dans ce domaine. "}
            </span>
        ),
        htmlF: "L’utilisation du post-traitement, devenu incontournable dans la photographie numérique, a été un axe fondamental de mon apprentissage. ",
        /* -------------------------------------------------- */
        htmlG: "Le confinement a été aussi un tournant dans mon parcours, m’offrant l’occasion de perfectionner mes compétences en éclairage, notamment grâce à l'utilisation du flash. ",
        htmlH: "Avec mes modèles familiaux présents à la maison, j’ai expérimenté et peaufiné mes techniques de portrait en lumière artificielle. ",
        htmlI: "J’ai également suivi une formation au studio B612, ce qui m’a permis de comprendre de manière plus approfondie les subtilités du flash et son impact dans la création d’images à la fois dramatiques et naturelles. ",
        /* -------------------------------------------------- */
        htmlJ: "Aujourd'hui, ",
        htmlK: (
            <span className={style.SpanBold}>
                {"je me spécialise dans les portraits, aussi bien en studio qu’en extérieur, et dans les reportages de mariage. "}
            </span>
        ),
        htmlL: `Mon approche se veut personnalisée, créant des projets uniques comme "Amies sur les bancs de l'école 70 ans plus tard" ou "Devenez Peaky Blinders le temps d'un shooting". `,
        htmlM: "Toujours à la recherche de l’authenticité et de l’émotion, je mets tout en œuvre pour offrir une expérience photographique inoubliable. ",
        /* -------------------------------------------------- */
        htmlN: (
            <span className={style.SpanLink}>
                <Link to={router}>
                    {"Découvrez mes prestations et trouvez celle qui vous correspond le mieux !"}
                </Link>
            </span>
        )
    };

    return (
        <section className={`QuiSuisJe ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Mon Parcours de Photographe : De l'Argentique au Numérique, Une Passion Retrouvée
                </h1>
            </header>

            <p className={style.TextP4}>
                Mon aventure photographique a commencé dès mon plus jeune âge avec un appareil argentique et un agrandisseur 
                que je montais et démontais dans la salle de bains de mes parents. J’ai passé de nombreuses heures à 
                maîtriser la chimie des films et à perfectionner mes tirages, une expérience profondément tactile et 
                manuelle. Cependant, avec l’arrivée du numérique, je me suis éloignée de la photographie pendant un certain 
                temps. Cette transition technologique m’a paru trop éloignée de ma pratique originale, 
                <span className={style.SpanBold}>
                    {" pour laquelle chaque photo devait être LA photo."}
                </span>
            </p>

            {/* MediaQuery maison */}
            {viewportWidth <= 550 && (
                <>
                    {textHTML.htmlA}
                    <br />
                    <p className={style.TextP4}>
                        {textHTML.htmlB}
                        {textHTML.htmlC}
                        {textHTML.htmlD}
                        {textHTML.htmlE}
                        {textHTML.htmlF}
                    </p>
                    <p className={style.TextP4}>
                        {textHTML.htmlG}
                        {textHTML.htmlH}
                        {textHTML.htmlI}
                    </p>
                    <p className={style.TextP4}>
                        {textHTML.htmlJ}
                        {textHTML.htmlK}
                        {textHTML.htmlL}
                        {textHTML.htmlM}
                    </p>
                    <p className={style.TextP4}>
                        {textHTML.htmlN}
                    </p>
                </>
            )}

            {/* MediaQuery maison */}
            {viewportWidth > 550 && viewportWidth <= 700 && (
                <>
                    <div className={css.Container}>
                        {textHTML.htmlA}
                        <div className={css.SubContainer}>
                            <p className={css.TextP4}>
                                {textHTML.htmlB}
                                {textHTML.htmlC}
                                {textHTML.htmlD}
                                {textHTML.htmlE}
                                {textHTML.htmlF}
                            </p>
                            {/* MediaQuery maison */}
                            {viewportWidth > 580 && viewportWidth <= 610 && (
                                <p className={css.TextP4}>
                                    {"Le confinnement a été aussi un"}
                                </p>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 610 && viewportWidth <= 640 && (
                                <p className={css.TextP4}>
                                    {"Le confinnement a été aussi un tournant dans mon parcours,"}
                                </p>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 640 && viewportWidth <= 655 && (
                                <p className={css.TextP4}>
                                    {"Le confinnement a été aussi un tournant dans mon parcours, m'offrant l'occasion de perfectionner"}
                                </p>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 655 && viewportWidth <= 662 && (
                                <p className={css.TextP4}>
                                    {"Le confinnement a été aussi un tournant dans mon parcours, m'offrant l'occasion de perfectionner mes compétences en éclairage,"}
                                </p>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 662 && (
                                <p className={css.TextP4}>
                                    {"Le confinnement a été aussi un tournant dans mon parcours, m'offrant l'occasion de perfectionner mes compétences en éclairage, notamment grâce à l'utilisation du flash."}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* MediaQuery maison */}
                    {viewportWidth > 580 && viewportWidth <= 610 && (
                        <p className={style.TextP4}>
                            {"tournant dans mon parcours, m'offrant l'occasion de perfectionner mes compétences en éclairage, notamment grâce à l'utilisation du flash."}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 610 && viewportWidth <= 640 && (
                        <p className={style.TextP4}>
                            {"m'offrant l'occasion de perfectionner mes compétences en éclairage, notamment grâce à l'utilisation du flash."}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 640 && viewportWidth <= 655 && (
                        <p className={style.TextP4}>
                            {"mes compétences en éclairage, notamment grâce à l'utilisation du flash."}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 655 && viewportWidth <= 662 && (
                        <p className={style.TextP4}>
                            {"notamment grâce à l'utilisation du flash."}
                        </p>
                    )}
                    <p className={style.TextP4}>
                        {textHTML.htmlH}
                        {textHTML.htmlI}
                    </p>
                    <p className={style.TextP4}>
                        {textHTML.htmlJ}
                        {textHTML.htmlK}
                        {textHTML.htmlL}
                        {textHTML.htmlM}
                    </p>
                    <p className={style.TextP4}>
                        {textHTML.htmlN}
                    </p>
                </>
            )}

            {/* MediaQuery maison */}
            {viewportWidth > 700 && viewportWidth <= 710 && (
                <>
                    <div className={css.Container}>
                        {textHTML.htmlA}
                        <div className={css.SubContainer}>
                            <p className={css.TextP4}>
                                {textHTML.htmlB}
                                {textHTML.htmlC}
                                {textHTML.htmlD}
                                {textHTML.htmlE}
                                {textHTML.htmlF}
                            </p>
                            <p className={css.TextP4}>
                                {textHTML.htmlG}
                            {/* MediaQuery maison */}
                            {viewportWidth > 700 && viewportWidth <= 708 && (
                                <>
                                    {"Avec mes modeles familiaux présents à la maison, j'ai expérimenté et paufiné mes techniques de portrait en"}
                                </>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 708 && (
                                <>
                                    {"Avec mes modeles familiaux présents à la maison, j'ai expérimenté et paufiné mes techniques de portrait en lumiere artificielle."}
                                </>
                            )}
                            </p>
                        </div>
                    </div>

                    {/* MediaQuery maison */}
                    {viewportWidth > 700 && viewportWidth <= 708 && (
                        <p className={style.TextP4}>
                            {"lumiere artificielle."}
                        </p>
                    )}
                    <p className={style.TextP4}>
                        {textHTML.htmlI}
                    </p>
                    <p className={style.TextP4}>
                        {textHTML.htmlJ}
                        {textHTML.htmlK}
                        {textHTML.htmlL}
                        {textHTML.htmlM}
                    </p>
                    <p className={style.TextP4}>
                        {textHTML.htmlN}
                    </p>
                </>
            )}

            {/* MediaQuery maison */}
            {viewportWidth > 710 && viewportWidth <= 815 && (
                <>
                    <div className={css.Container}>
                        {textHTML.htmlA}
                        <div className={css.SubContainer}>
                            <p className={css.TextP4}>
                                {textHTML.htmlB}
                                {textHTML.htmlC}
                                {textHTML.htmlD}
                                {textHTML.htmlE}
                                {textHTML.htmlF}
                            </p>
                            <p className={css.TextP4}>
                                {textHTML.htmlG}
                                {textHTML.htmlH}
                            {/* MediaQuery maison */}
                            {viewportWidth > 710 && viewportWidth <= 745 && (
                                <>
                                    {"J'ai également suivi une formation au studio B612, ce qui m'a"}
                                </>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 745 && viewportWidth <= 751 && (
                                <>
                                    {"J'ai également suivi une formation au studio B612, ce qui m'a permis de comprendre de"}
                                </>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 751 && viewportWidth <= 770 && (
                                <>
                                    {"J'ai également suivi une formation au studio B612, ce qui m'a permis de comprendre de manière plus"}
                                </>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 770 && viewportWidth <= 774 && (
                                <>
                                    {"J'ai également suivi une formation au studio B612, ce qui m'a permis de comprendre de manière plus profonde les subtilités du flash et de son impacte"}
                                </>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 774 && viewportWidth <= 791 && (
                                <>
                                    {"J'ai également suivi une formation au studio B612, ce qui m'a permis de comprendre de manière plus profonde les subtilités du flash et de son impacte dans la"}
                                </>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 791 && viewportWidth <= 800 && (
                                <>
                                    {"J'ai également suivi une formation au studio B612, ce qui m'a permis de comprendre de manière plus profonde les subtilités du flash et de son impacte dans la création"}
                                </>
                            )}
                            {/* MediaQuery maison */}
                            {viewportWidth > 800 && (
                                <>
                                    {"J'ai également suivi une formation au studio B612, ce qui m'a permis de comprendre de manière plus profonde les subtilités du flash et de son impacte dans la création d'images à la fois dramatiques et naturelles."}
                                </>
                            )}
                            </p>
                        </div>
                    </div>

                    {/* MediaQuery maison */}
                    {viewportWidth > 710 && viewportWidth <= 745 && (
                        <p className={style.TextP4}>
                            {"permis de comprendre de manière plus profonde les subtilités du flash et de son impacte dans la création d'images à la fois dramatiques et naturelles."}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 745 && viewportWidth <= 751 && (
                        <p className={style.TextP4}>
                            {"manière plus profonde les subtilités du flash et de son impacte dans la création d'images à la fois dramatiques et naturelles."}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 751 && viewportWidth <= 770 && (
                        <p className={style.TextP4}>
                            {"profonde les subtilités du flash et de son impacte dans la création d'images à la fois dramatiques et naturelles."}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 770 && viewportWidth <= 774 && (
                        <p className={style.TextP4}>
                            {"dans la création d'images à la fois dramatiques et naturelles."}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 774 && viewportWidth <= 791 && (
                        <p className={style.TextP4}>
                            {"création d'images à la fois dramatiques et naturelles."}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 791 && viewportWidth <= 800 && (
                        <p className={style.TextP4}>
                            {"d'images à la fois dramatiques et naturelles."}
                        </p>
                    )}
                    <p className={style.TextP4}>
                        {textHTML.htmlJ}
                        {textHTML.htmlK}
                        {textHTML.htmlL}
                        {textHTML.htmlM}
                    </p>
                    <p className={style.TextP4}>
                        {textHTML.htmlN}
                    </p>
                </>
            )}

            {/* MediaQuery maison */}
            {viewportWidth > 815 && viewportWidth <= 5000 && (
                <>
                    <div className={css.Container}>
                        {textHTML.htmlA}
                        <div className={css.SubContainer}>
                            <p className={css.TextP4}>
                                {textHTML.htmlB}
                                {textHTML.htmlC}
                                {textHTML.htmlD}
                                {textHTML.htmlE}
                                {textHTML.htmlF}
                            </p>
                            <p className={css.TextP4}>
                                {textHTML.htmlG}
                                {textHTML.htmlH}
                                {textHTML.htmlI}
                            </p>
                            <p className={css.TextP4}>
                                {/* MediaQuery maison */}
                                {viewportWidth > 830 && viewportWidth <= 840 && (
                                    <>
                                        {textHTML.htmlJ}
                                        <span className={style.SpanBold}>
                                            {"je me spécialise dans les portraits, aussi bien"}
                                        </span>
                                    </>
                                )}
                                {/* MediaQuery maison */}
                                {viewportWidth > 840 && viewportWidth <= 887 && (
                                    <>
                                        {textHTML.htmlJ}
                                        <span className={style.SpanBold}>
                                            {"je me spécialise dans les portraits, aussi bien en"}
                                        </span>
                                    </>
                                )}
                                {/* MediaQuery maison */}
                                {viewportWidth > 887 && viewportWidth <= 891 && (
                                    <>
                                        {textHTML.htmlJ}
                                        {textHTML.htmlK}
                                        {"Mon"}
                                    </>
                                )}
                                {/* MediaQuery maison */}
                                {viewportWidth > 891 && viewportWidth <= 926 && (
                                    <>
                                        {textHTML.htmlJ}
                                        {textHTML.htmlK}
                                        {`Mon approche se veut personnalisée, créant des projets uniques "Amies sur les`}
                                    </>
                                )}
                                {/* MediaQuery maison */}
                                {viewportWidth > 926 && viewportWidth <= 932 && (
                                    <>
                                        {textHTML.htmlJ}
                                        {textHTML.htmlK}
                                        {`Mon approche se veut personnalisée, créant des projets uniques "Amies sur les bancs de`}
                                    </>
                                )}
                                {/* MediaQuery maison */}
                                {viewportWidth > 932 && viewportWidth <= 937 && (
                                    <>
                                        {textHTML.htmlJ}
                                        {textHTML.htmlK}
                                        {`Mon approche se veut personnalisée, créant des projets uniques "Amies sur les bancs de l'école 70 ans plus tard" ou "Devenez Peaky Blinders le temps d'un `}
                                    </>
                                )}
                                {/* MediaQuery maison */}
                                {viewportWidth > 937 && viewportWidth <= 995 && (
                                    <>
                                        {textHTML.htmlJ}
                                        {textHTML.htmlK}
                                        {textHTML.htmlL}
                                    </>
                                )}
                                {/* MediaQuery maison */}
                                {viewportWidth > 995 && viewportWidth <= 1010 && (
                                    <>
                                        {textHTML.htmlJ}
                                        {textHTML.htmlK}
                                        {textHTML.htmlL}
                                        {"Toujours, à la recherche de l'authenticité et de l'émotion, je mets tout en œuvre pour offrir une"}
                                    </>
                                )}
                                {/* MediaQuery maison */}
                                {viewportWidth > 1010 && viewportWidth <= 1020 && (
                                    <>
                                        {textHTML.htmlJ}
                                        {textHTML.htmlK}
                                        {textHTML.htmlL}
                                        {"Toujours, à la recherche de l'authenticité et de l'émotion, je mets tout en œuvre pour offrir une expérience"}
                                    </>
                                )}
                                {/* MediaQuery maison */}
                                {viewportWidth > 1020 && viewportWidth <= 1027 && (
                                    <>
                                        {textHTML.htmlJ}
                                        {textHTML.htmlK}
                                        {textHTML.htmlL}
                                        {"Toujours, à la recherche de l'authenticité et de l'émotion, je mets tout en œuvre pour offrir une expérience photographique"}
                                    </>
                                )}
                                {/* MediaQuery maison */}
                                {viewportWidth > 1027 && viewportWidth <= 5000 && (
                                    <>
                                        {textHTML.htmlJ}
                                        {textHTML.htmlK}
                                        {textHTML.htmlL}
                                        {textHTML.htmlM}
                                    </>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* MediaQuery maison */}
                    {viewportWidth > 830 && viewportWidth <= 840 && (
                        <p className={style.TextP4}>
                            <span className={style.SpanBold}>
                                {"en studio qu’en extérieur, et dans les reportages de mariage. "}
                            </span>
                            {textHTML.htmlL}
                            {textHTML.htmlM}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 840 && viewportWidth <= 887 && (
                        <p className={style.TextP4}>
                            <span className={style.SpanBold}>
                                {"studio qu’en extérieur, et dans les reportages de mariage. "}
                            </span>
                            {textHTML.htmlL}
                            {textHTML.htmlM}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 887 && viewportWidth <= 891 && (
                        <p className={style.TextP4}>
                            {`approche se veut personnalisée, créant des projets uniques "Amies sur les bancs de l'école 70 ans plus tard" ou "Devenez Peaky Blinders le temps d'un shooting". `}
                            {textHTML.htmlM}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 891 && viewportWidth <= 926 && (
                        <p className={style.TextP4}>
                            {`bancs de l'école 70 ans plus tard" ou "Devenez Peaky Blinders le temps d'un shooting". `}
                            {textHTML.htmlM}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 926 && viewportWidth <= 932 && (
                        <p className={style.TextP4}>
                            {`l'école 70 ans plus tard" ou "Devenez Peaky Blinders le temps d'un shooting". `}
                            {textHTML.htmlM}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 932 && viewportWidth <= 937 && (
                        <p className={style.TextP4}>
                            {`shooting". `}
                            {textHTML.htmlM}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 937 && viewportWidth <= 995 && (
                        <p className={style.TextP4}>
                            {`Toujour à la recherche de l'authenticité et de l'émotion, je mets tout en œuvre pour offrir une expérience photographique inoubliable. `}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 995 && viewportWidth <= 1010 && (
                        <p className={style.TextP4}>
                            {`expérience photographique inoubliable. `}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 1010 && viewportWidth <= 1020 && (
                        <p className={style.TextP4}>
                            {`photographique inoubliable. `}
                        </p>
                    )}
                    {/* MediaQuery maison */}
                    {viewportWidth > 1020 && viewportWidth <= 1027 && (
                        <p className={style.TextP4}>
                            {`inoubliable. `}
                        </p>
                    )}
                    <p className={style.TextP4}>
                        {textHTML.htmlN}
                    </p>
                </>
            )}
        </section>
    )
}

export default QuiSuisJeRoot;
