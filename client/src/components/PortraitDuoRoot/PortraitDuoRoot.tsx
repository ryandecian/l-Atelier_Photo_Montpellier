import style from "../StyleRootComponent.module.css";
import PortraitDuoRootComponentA from "./ComponentPortraitDuoRoot/PortraitDuoRootComponentA/PortraitDuoRootComponentA";

function PortraitDuoRoot() {
    return (
        <section className={`PortraitDuoRoot ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {"Portrait duo et couple : immortalisez votre complicité avec authenticité"}
                </h1>
            </header>

            {/* Container A */}
            <PortraitDuoRootComponentA />

            {/* Container B */}

            {/* Container C : Avis Clients */}
        </section>
    )
}

export default PortraitDuoRoot;
