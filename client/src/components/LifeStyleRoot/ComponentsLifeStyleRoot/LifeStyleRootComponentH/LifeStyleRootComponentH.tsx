import style from "../../../StyleRootComponent.module.css";
import { Check } from "lucide-react";
import { LinkExt } from "../../../../router/router";

function LifeStyleRootComposantH() {
    return (
        <section className={`LifeStyleRootComponentH ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2px2}>
                    Passions Lives : Mettez en scène ce qui vous passionne 
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    Que ce soit un sport, un art, un animal ou un univers qui vous inspire, vos passions méritent d’être 
                    mises en lumière. Que vous soyez en pleine action, plongé dans un univers qui vous fascine, ou dans 
                    un moment plus posé, cette séance est pensée pour capturer ce qui vous anime, avec un rendu qui vous 
                    ressemble.
                </p>
                <p className={style.TextP4}>
                    <span className={style.SpanBoldSpace}>
                        {"📷 Un shooting sur-mesure, fidèle à votre univers"}
                    </span> 
                </p>
                <p className={style.TextP4}>
                    Loin des portraits classiques, cette séance s’adapte à votre style et à ce qui vous motive :
                </p>
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"🏃 En action :"}
                    </span> 
                    {" "} sur le terrain, en répétition, en plein effort ou en pleine concentration. <br />
                    <span className={style.SpanBold}>
                        {"🎭 Inspiré d’un univers :"}
                    </span> 
                    {" "} ambiance cinéma, époque, références à une série ou un film culte, reconstitution historique. <br />
                    <span className={style.SpanBold}>
                        {"🐎 Avec vos compagnons :"}
                    </span> 
                    {" "} chevaux, chiens, instruments, accessoires… tout ce qui fait partie de votre passion. <br />
                </p>
                <p className={style.TextP4}>
                    Que vous souhaitiez un rendu brut et réaliste ou une mise en scène travaillée, tout est pensé pour 
                    refléter votre vision.
                </p>
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"Pour qui ?"}
                    </span> 
                </p>
                <p className={style.TextP4}>
                    {"Cette séance est faite pour vous si :"}
                    <br />
                    <span className={style.SpanLucide}>
                        <Check className={style.CheckLucide} /> &nbsp;
                        Vous voulez des photos dynamiques et naturelles, en plein cœur de votre passion.
                    </span>
                    <span className={style.SpanLucide}>
                        <Check className={style.CheckLucide} /> &nbsp;
                        Vous souhaitez recréer une ambiance, une époque, ou un univers qui vous inspire.
                    </span>
                    <span className={style.SpanLucide}>
                        <Check className={style.CheckLucide} /> &nbsp;
                        Vous êtes sportif, artiste, passionné d’histoire, de cinéma ou de culture geek.
                    </span>
                </p>
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"📩 Envie de donner vie à votre passion en images ?"}
                    </span> 
                    {" "}
                    <span className={style.SpanLink}>
                        <a href={LinkExt.emailAnne} target="_blank" rel="noopener noreferrer">
                            {"Contactez-moi pour une séance sur-mesure."}
                        </a>
                    </span>
                </p>
            </article>
            
        </section>
    );
}

export default LifeStyleRootComposantH;
