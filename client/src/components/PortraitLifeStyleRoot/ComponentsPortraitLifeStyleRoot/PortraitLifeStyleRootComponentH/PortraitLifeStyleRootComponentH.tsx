import style from "../../../StyleRootComponent.module.css";
import externalLinks from "../../../../constants/externalLinks";

function PortraitLifeStyleRootComposantH() {
    return (
        <section className={`PortraitLifeStyleRootComponentH ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2px2}>
                    Passions Lives : Mettez en scène ce qui vous passionne 
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    Que ce soit un sport, un art, un animal ou un univers qui vous inspire, 
                    <span className={style.SpanBold}>
                        {" vos passions méritent d’être mises en lumière. "}
                    </span>
                    Que vous soyez en pleine action, plongé dans un univers qui vous fascine, ou dans 
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
                    ✔️ Vous voulez des photos dynamiques et naturelles, 
                    <span className={style.SpanBold}>
                        {" en plein cœur de votre passion."}
                    </span> <br />
                    ✔️ Vous souhaitez 
                    <span className={style.SpanBold}>
                        {" recréer une ambiance, "}
                    </span> une époque, ou un univers qui vous inspire. <br />
                    ✔️ Vous êtes sportif, artiste, passionné d’histoire, de cinéma ou de culture geek.
                </p>

                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"📩 Envie de donner vie à votre passion en images ?"}
                    </span> 
                    {" "}
                    <span className={style.SpanLink}>
                        <a href={externalLinks.emailAnne} target="_blank" rel="noopener noreferrer">
                            {"Contactez-moi pour une séance sur-mesure."}
                        </a>
                    </span>
                </p>
            </article>
            
        </section>
    );
}

export default PortraitLifeStyleRootComposantH;
