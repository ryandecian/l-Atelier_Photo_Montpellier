import style from './HomePC.module.css';
import { Link } from 'react-router-dom';

function HomePC() {
    return (
        <div className={style.HomePC}>

            <div className={style.ContainerTitle}>
                <h1 className={style.PrimaryTitle}>
                    Photographe professionnelle à Montpellier authentiques
                </h1>
            </div>
            

            <div className={style.ContainerAccueil}>
                <p className={style.Slogan}>Capturez l'émotion du regard</p>
                <p className={style.ButtonDecouvrir}>
                    <button type="button">
                        <Link to="#" >
                            Découvrir mon univers !
                        </Link>
                    </button>
                </p>
            </div>

            {/* Container 1 : Introduction */}
            <div className={style.ContainerIntroduction}>
                <div className={style.IntroTitle}>
                    <h2>
                        INTRODUCTION :
                    </h2>
                </div>
                <div className={style.IntroText1}>
                    <p>
                        Vous cherchez à immortaliser des moments uniques à travers des portraits authentiques,
                        des photos de mariage, des shootings lifestyle ou même en vidéo ?
                    </p>
                </div>
                <div className={style.IntroText2}>
                    <p>
                        En tant que photographe professionnelle à Montpellier, je m'engage à capturer vos moments précieux avec professionnalisme et sensibilité.
                    </p>
                </div>
            </div>

            {/* Container 2 : Mon expertise */}
            <section className={style.ContainerExpertise}>
                <header className={style.ExpertiseTitle}>
                    <h2>
                        MON EXPERTISE :
                    </h2>
                </header>
                <article className={style.ExpertiseText1}>
                    <p>
                        En tant que photographe professionnelle installée à Montpellier et spécialisée en 
                        portraits – qu’ils soient corporate, lifestyle, réalisés en lumière naturelle ou 
                        au flash – je mets tout en œuvre pour saisir la personnalité unique de chacun. La 
                        photographie de portrait professionnel n’est pas seulement une technique, c’est une 
                        véritable passion que je développe afin que chacun et chacune puisse porter un 
                        regard sur lui (elle) positif et valorisant. 
                    </p>
                </article>
                <article className={style.ExpertiseText2}>
                    <p>
                        Ma vision du mariage se décline sous la forme d’un reportage photographique. Plutôt 
                        que de créer de simples poses figées, je privilégie l’instantanéité et la spontanéité 
                        des émotions vécues durant la cérémonie. Je cherche à être au plus près de tous ces 
                        instants afin qu’ils restent gravés, et cette approche me permet de raconter une histoire 
                        visuelle complète, où chaque image capte la complicité, la tendresse et l’authenticité 
                        du grand jour.
                    </p>
                </article>
                <article className={style.ExpertiseText3}>
                    <p>
                        En choisissant mes services, vous optez pour un accompagnement sur mesure, alliant expertise 
                        technique, sensibilité artistique et un engagement passionné pour immortaliser vos moments 
                        les plus précieux. Vos portraits seront l’image à d’un reportage de mariage authentique et 
                        vibrant de vie ! 
                    </p>
                </article>
            </section>

            {/* Container 3 : Présentation des services */}
            <div className={style.ContainerServices}></div>
        </div>
    );
}

export default HomePC;