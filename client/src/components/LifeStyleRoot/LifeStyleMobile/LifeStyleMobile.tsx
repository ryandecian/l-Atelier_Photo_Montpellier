import style from './LifeStyleMobile.module.css';
import LifeStyleRootComposantA from '../ComponentsLifeStyleRoot/LifeStyleComposantA/LifeStyleRootComposantA';

function LifeStyleMobile() {
    return (
        <section className={style.LifeStyleMobile}>

            <header className={style.ContainerTitle}>
                <h1 className={style.Title}>
                    Portrait LifeStyle : fusion de l'instant et de la lumière
                </h1>
            </header>

            {/* Container 1 : Titre et textes */}
            <LifeStyleRootComposantA />
        </section>
    );
}

export default LifeStyleMobile;
