import style from "../StyleRootComponent.module.css";
import CGVComposantA from "./ComponentsCGVRoot/CGVComponentA/CGVComponentA";
import CGVComposantB from "./ComponentsCGVRoot/CGVComponentB/CGVComponentB";
import CGVComposantC from "./ComponentsCGVRoot/CGVComponentC/CGVComponentC";

function CGVRoot() {
    return (
        <section className={`CGVRoot ${style.ContainerRootRacine}`}>
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

export default CGVRoot;
