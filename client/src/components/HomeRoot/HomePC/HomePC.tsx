import style from './HomePC.module.css';

/* Import des composants */
import ContainerAccueilHomeRoot from '../ComponentHomeRoot/ContainerTitleHomeRoot/ContainerAccueilHomeRoot';
import HomeRootComposantA from '../ComponentHomeRoot/HomeRootComposantA/HomeRootComposantA';
import HomeRootComposantB from '../ComponentHomeRoot/HomeRootComposantB/HomeRootComposantB';
import HomeRootComposantC from '../ComponentHomeRoot/HomeRootComposantC/HomeRootComposantC';
import HomeRootComposantD from '../ComponentHomeRoot/HomeRootComposantD/HomeRootComposantD';
import HomePCAutorComposantA from './ComposantAutorHomePC/HomePCAutorComposantA';
import HomePCAutorComposantB from './ComposantAutorHomePC/HomePCAutorComposantB';

function HomePC() {
    return (
        <div className={style.HomePC}>
            {/* Container 1 : Accueil */}
            <ContainerAccueilHomeRoot />

            {/* Container 2 : Introduction */}
            <HomeRootComposantA />

            {/* Container 3 : Portrait */}
            <HomeRootComposantB />

            {/* Container 4 : Mariage */}
            <HomeRootComposantC />

            {/* Container 5 : Avis */}
            <HomeRootComposantD />
            
            {/* Container 6 : Autor */}
            <HomePCAutorComposantA />
            <HomePCAutorComposantB />
        </div>
    );
}

export default HomePC;
