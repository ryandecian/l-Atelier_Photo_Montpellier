import { Suspense, lazy } from "react";
import style from "../StyleRootComponent.module.css";

const HomeRootComponentA = lazy(() => import("./ComponentsHomeRoot/HomeRootComponentA/HomeRootComponentA"));
const HomeRootComponentB = lazy(() => import("./ComponentsHomeRoot/HomeRootComponentB/HomeRootComponentB"));
const HomeRootComponentC = lazy(() => import("./ComponentsHomeRoot/HomeRootComponentC/HomeRootComponentC"));
const HomeRootComponentD = lazy(() => import("./ComponentsHomeRoot/HomeRootComponentD/HomeRootComponentD"));
const HomeRootComponentE = lazy(() => import("./ComponentsHomeRoot/HomeRootComponentE/HomeRootComponentE"));
const HomeRootComponentF = lazy(() => import("./ComponentsHomeRoot/HomeRootComponentF/HomeRootComponentF"));

function HomeRoot() {
    
    return (
        <section className={`HomeRoot ${style.ContainerRootRacine}`}>
            <Suspense fallback={null}>
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
            </Suspense>
        </section>
    );
}

export default HomeRoot;
