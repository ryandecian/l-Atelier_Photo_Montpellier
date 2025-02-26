import style from './HomePC.module.css';

function HomePC() {
    return (
        <div className={style.HomePC}>

            <h1 className={style.PrimaryTitle}>
                Photographe professionnelle à Montpellier authentiques.
            </h1>

            <div className={style.ImgAccueil}>
                <p>Capturez l'émotion du regard</p>
            </div>
        </div>
    );
}

export default HomePC;