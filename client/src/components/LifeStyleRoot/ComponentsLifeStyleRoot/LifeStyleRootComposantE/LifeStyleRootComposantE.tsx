import style from "./LifeStyleRootComposantE.module.css";
import { LinkExt } from "../../../../router/router";

function LifeStyleRootComposantE() {
    return (
        <section className={style.LifeStyleRootComposantE}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Portrait Famille – Amis (La Smala): Des images qui traversent le temps   
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.Text}>
                    Certaines photos restent sur un téléphone. D’autres trouvent {" "}
                    <span className={style.SpanBold}>
                        {"leur place dans un album,"}
                    </span> 
                    {" "} sur un mur du salon, ou dans un cadre posé sur une étagère. Ce sont celles qui comptent, celles 
                    qu’on envoie à ses proches avec un sourire, celles que les enfants redécouvrent des années plus tard en 
                    se rappelant {" "}
                    <span className={style.SpanBold}>
                        {"“Tu te souviens de ce jour-là ?”."}
                    </span> 
                </p>
                <p className={style.Text}>
                    C’est exactement ce que je veux capturer : des souvenirs qui vivent. Pas des images figées, mais des 
                    éclats de rire, des bras qui s’attrapent, des regards complices. Une vraie séance de famille, 
                    où chacun reste lui-même, sans poser, sans chercher à être parfait. Juste être ensemble, et {" "}
                    <span className={style.SpanBold}>
                        {"garder une trace de cet instant,"}
                    </span> 
                    {" "} pour aujourd’hui et pour plus tard. 
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
                    {" "} <br />
                    👉 Vous voulez des images qui ne dorment pas sur un disque dur, mais s’impriment, s’accrochent, se partagent. <br />
                    👉 Vous cherchez des souvenirs sincères, des photos pleines de vie à glisser dans un album familial. <br />
                    👉 Vous voulez que, dans 10 ans, ces images racontent encore votre histoire. <br />
                </p>
                <p className={style.Text}>
                    Et si on créait ensemble ces souvenirs ? {" "}
                    <span className={style.SpanLink}>
                        <a href={LinkExt.emailAnne} target="_blank" rel="noopener noreferrer">
                            {"Contactez-moi."}
                        </a>
                    </span>
                </p>
            </article>
            
        </section>
    );
}

export default LifeStyleRootComposantE;