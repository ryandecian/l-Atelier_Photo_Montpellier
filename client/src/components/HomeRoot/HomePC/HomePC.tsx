import style from './HomePC.module.css';

/* Import des composants */
import ContainerAccueilHomeRoot from '../ComponentsHomeRoot/ContainerTitleHomeRoot/ContainerAccueilHomeRoot';
import HomeRootComposantA from '../ComponentsHomeRoot/HomeRootComposantA/HomeRootComposantA';
import HomeRootComposantB from '../ComponentsHomeRoot/HomeRootComposantB/HomeRootComposantB';
import HomeRootComposantC from '../ComponentsHomeRoot/HomeRootComposantC/HomeRootComposantC';
import HomeRootComposantD from '../ComponentsHomeRoot/HomeRootComposantD/HomeRootComposantD';
import HomePCAutorComposantA from './ComposantAutorHomePC/HomePCAutorComposantA';
import HomePCAutorComposantB from './ComposantAutorHomePC/HomePCAutorComposantB';

function HomePC() {
    return (
        <section className={style.HomePC}>
            {/* Container 1 : Accueil */}
            <ContainerAccueilHomeRoot />

            {/* Container 2 : Introduction */}
            <HomeRootComposantA />

            {/* Container 3 : Portrait */}
            <HomeRootComposantB />

            {/* Container 4 : Mariage */}
            <HomeRootComposantC />

            {/* Container 5 : Avis Client */}
            <HomeRootComposantD />
            
            {/* Container 6 : Autor */}
            <HomePCAutorComposantA />
            <HomePCAutorComposantB />
        </section>
    );
}

export default HomePC;
