import style from './HomeMobile.module.css';

/* Import des composants */
import ContainerAccueilHomeRoot from '../ComponentsHomeRoot/ContainerTitleHomeRoot/ContainerAccueilHomeRoot';

import HomeRootComposantA from '../ComponentsHomeRoot/HomeRootComposantA/HomeRootComposantA';
import HomeRootContainerB from '../ComponentsHomeRoot/HomeRootComposantB/HomeRootComposantB';
import HomeRootComposantC from '../ComponentsHomeRoot/HomeRootComposantC/HomeRootComposantC';
import HomeRootComposantD from '../ComponentsHomeRoot/HomeRootComposantD/HomeRootComposantD';
import HomeMobileAutorComposantA from './ComposantAutorHomeMobile/HomeMobileAutorComposantA';
import HomeMobileAutorComposantB from './ComposantAutorHomeMobile/HomeMobileAutorComposantB';
import HomeMobileAutorComposantC from './ComposantAutorHomeMobile/HomeMobileAutorComposantC';

function HomeMobile() {
    return (
        <div className={style.HomeMobile}>
            {/* Container 1 : Accueil */}
            <ContainerAccueilHomeRoot />

            {/* Container 2 : Introduction */}
            <HomeRootComposantA />

            {/* Container 3 : Portrait */}
            <HomeRootContainerB />

            {/* Container 4 : Mariage */}
            <HomeRootComposantC />

            {/* Container 5 : Avis */}
            <HomeRootComposantD />

            {/* Container 6 : Autor */}
            <HomeMobileAutorComposantA />
            <HomeMobileAutorComposantB />
            <HomeMobileAutorComposantC />
        </div>
    );
}

export default HomeMobile;