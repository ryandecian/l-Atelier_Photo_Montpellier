import style from "../../StyleRootComponent.module.css";
import { CGV_A_Component } from "./components/CGV_A.component";
import { CGV_B_Component } from "./components/CGV_B.component";
import { CGV_C_Component } from "./components/CGV_C.component";

function CGV_Root() {
    return (
        <section className={`CGV_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    Conditions Générales de vente
                </h1>
            </header>

            {/* Container A : Dispositions communes aux particuliers et entreprises */}
            <CGV_A_Component />

            {/* Container B : Dispositions spécifiques aux particuliers */}
            <CGV_B_Component />

            {/* Container C : Dispositions spécifiques aux entreprises */}
            <CGV_C_Component />
        </section>
    );
}

export default CGV_Root;
