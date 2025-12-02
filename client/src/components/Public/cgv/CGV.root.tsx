import style from "../../StyleRootComponent.module.css";
import CGVComposantA from "./components/CGV_A.component";
import CGVComposantB from "./components/CGV_B.component";
import CGVComposantC from "./components/CGV_C.component";

function CGV_Root() {
    return (
        <section className={`CGV_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Conditions Générales de vente
                </h1>
            </header>

            {/* Container A : Dispositions communes aux particuliers et entreprises */}
            <CGVComposantA />

            {/* Container B : Dispositions spécifiques aux particuliers */}
            <CGVComposantB />

            {/* Container C : Dispositions spécifiques aux entreprises */}
            <CGVComposantC />
        </section>
    );
}

export default CGV_Root;
