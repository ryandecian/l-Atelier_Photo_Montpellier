import style from "../../../StyleRootComponent.module.css";
import { Check } from "lucide-react";

function LifeStyleRootComponentF() {
    return (
        <section className={`LifeStyleRootComponentF ${style.ContainerRoot}`}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2px2}>
                    1er Cris (Nouveaux-nés) : Une séance tout en délicatesse, à son rythme
                </h2>
            </header>

            <article className={style.ContainerText}>
                <p className={style.TextP4}>
                    Un nouveau-né vit à {" "}
                    <span className={style.SpanBold}>
                        {"son propre tempo :"}
                    </span>
                    {" "} il s’endort, s’étire, cherche la chaleur de vos bras… Ici, pas de précipitation. Je prends le 
                    temps, entre pauses câlins et moments de calme, pour capturer des images naturelles et authentiques.
                </p>
                <p className={style.TextP4}>
                    <span className={style.SpanBold}>
                        {"🌿 Un environnement apaisant :"}
                    </span>
                    {" "} à domicile, pour une atmosphère intime et rassurante, ou en studio dans un décor spécialement 
                    conçu pour le bien être de votre boutchou. <br />
                    <span className={style.SpanBold}>
                        {"🕰️ Une séance adaptée à bébé :"}
                    </span>
                    {" "} je m’adapte à ses besoins, à son rythme, sans jamais le forcer. <br />
                    <span className={style.SpanBold}>
                        {"🤱 Avec ou sans les parents :"}
                    </span>
                    {" "} des portraits de bébé seul, dans vos bras, avec ses frères et sœurs… chaque détail compte. <br />
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
                        Les jeunes parents qui veulent des souvenirs tendres et naturels.
                    </span>
                    <span className={style.SpanLucide}>
                        <Check className={style.CheckLucide} /> &nbsp;
                        Une séance à faire dans les 15 premiers jours de vie.
                    </span>
                </p>
            </article>
            
        </section>
    );
}

export default LifeStyleRootComponentF;
