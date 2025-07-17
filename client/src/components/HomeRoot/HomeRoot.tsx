import style from "../StyleRootComponent.module.css";
import HomeRootComponentA from "./ComponentsHomeRoot/HomeRootComponentA/HomeRootComponentA";
import HomeRootComponentB from "./ComponentsHomeRoot/HomeRootComponentB/HomeRootComponentB";
import HomeRootComponentC from "./ComponentsHomeRoot/HomeRootComponentC/HomeRootComponentC";
import HomeRootComponentD from "./ComponentsHomeRoot/HomeRootComponentD/HomeRootComponentD";
import HomeRootComponentE from "./ComponentsHomeRoot/HomeRootComponentE/HomeRootComponentE";
import HomeRootComponentF from "./ComponentsHomeRoot/HomeRootComponentF/HomeRootComponentF";

function HomeRoot() {
    return (
        <section className={`HomeRoot ${style.ContainerRootRacine}`}>
            {/* Container A : Accueil */}
            <HomeRootComponentA />

            {/* Container B : Introduction */}
            <HomeRootComponentB />

            {/* Container C : Portrait */}
            <HomeRootComponentC />
            
            {/* Container D : Mariage */}
            <HomeRootComponentD />

            {/* Container E : Avis Client */}
            <HomeRootComponentE />

            {/* Container F : Autor */}
            <HomeRootComponentF />

        </section>
    );
}

export default HomeRoot;
