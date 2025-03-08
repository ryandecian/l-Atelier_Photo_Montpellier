import style from './HomeMobile.module.css';

/* Import des composants */
import ContainerAccueilHomeRoot from '../ComponentHomeRoot/ContainerTitleHomeRoot/ContainerAccueilHomeRoot';

import HomeRootComposantA from '../ComponentHomeRoot/HomeRootComposantA/HomeRootComposantA';
import HomeRootContainerB from '../ComponentHomeRoot/HomeRootComposantB/HomeRootComposantB';
import HomeRootComposantC from '../ComponentHomeRoot/HomeRootComposantC/HomeRootComposantC';
import HomeRootComposantD from '../ComponentHomeRoot/HomeRootComposantD/HomeRootComposantD';

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

            {/* Container 4 : Avis */}
            <HomeRootComposantD />
        </div>
    );
}

export default HomeMobile;