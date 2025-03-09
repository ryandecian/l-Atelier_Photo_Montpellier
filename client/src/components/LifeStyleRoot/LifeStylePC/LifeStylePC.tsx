import style from './LifeStylePC.module.css';
import LifeStyleRootComposantA from '../ComponentsLifeStyleRoot/LifeStyleComposantA/LifeStyleRootComposantA';

function LifeStylePC() {
    return (
        <section className={style.LifeStylePC}>

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

export default LifeStylePC;
