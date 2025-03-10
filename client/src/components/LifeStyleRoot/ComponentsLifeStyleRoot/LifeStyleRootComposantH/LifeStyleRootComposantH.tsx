import style from "./LifeStyleRootComposantH.module.css";
import { LinkExt } from "../../../../router/router";

function LifeStyleRootComposantH() {
    return (
        <section className={style.LifeStyleRootComposantH}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Passions Lives : Mettez en scène ce qui vous passionne 
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.Text}>
                    Que ce soit un sport, un art, un animal ou un univers qui vous inspire, vos passions méritent d’être 
                    mises en lumière. Que vous soyez en pleine action, plongé dans un univers qui vous fascine, ou dans 
                    un moment plus posé, cette séance est pensée pour capturer ce qui vous anime, avec un rendu qui vous 
                    ressemble.
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBoldSpace}>
                        {"📷 Un shooting sur-mesure, fidèle à votre univers"}
                    </span> 
                </p>
                <p className={style.Text}>
                    Loin des portraits classiques, cette séance s’adapte à votre style et à ce qui vous motive :
                </p>
                <p className={style.Text}>
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
                <p className={style.Text}>
                    Que vous souhaitiez un rendu brut et réaliste ou une mise en scène travaillée, tout est pensé pour 
                    refléter votre vision.
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBoldSpace}>
                        {"💡 Pour qui ?"}
                    </span> 
                </p>
                <p className={style.Text}>
                    <span className={style.SpanBold}>
                        {"Cette séance est faite pour vous si :"}
                    </span> 
                    <br />
                    👉 Vous voulez des photos dynamiques et naturelles, en plein cœur de votre passion. <br />
                    👉 Vous souhaitez recréer une ambiance, une époque, ou un univers qui vous inspire. <br />
                    👉 Vous êtes sportif, artiste, passionné d’histoire, de cinéma ou de culture geek. <br />
                </p>
                <p className={style.Text}>
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
