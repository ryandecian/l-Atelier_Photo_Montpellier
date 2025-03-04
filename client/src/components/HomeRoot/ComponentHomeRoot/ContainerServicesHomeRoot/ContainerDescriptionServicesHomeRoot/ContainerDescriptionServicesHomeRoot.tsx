import style from "./ContainerDescriptionServicesHomeRoot.module.css";
import { Link } from "react-router-dom";

function ContainerDescriptionServicesHomeRoot() {
    return (
        <div className={style.ContainerDescriptionServices}>
            {/* Description Service 1 */}
            <section className={style.DescriptionServices1}>
                <header className={style.Services1Title}>
                    <h3>
                        Service 1 : Le portrait dans tous ses états
                    </h3>
                </header>

                <article className={style.Service1Text1}>
                    <p>
                        Que vous cherchiez un portrait corporate pour affirmer votre crédibilité, 
                        un portrait lifestyle qui capte la douceur de votre quotidien, ou encore 
                        un moment familial empreint de tendresse, chaque séance est conçue pour 
                        vous mettre en lumière dans toute votre singularité. En tant que photographe 
                        professionnelle je peux travailler en studio ou en extérieur, selon vos envies, 
                        dans une atmosphère calme et chaleureuse.
                    </p>
                </article>
                <article className={style.Service1Text2}>
                    <p>
                        Ce que j’aime particulièrement, c’est le moment où, après une séance pleine d’échange, 
                        vous repartez non seulement avec des clichés qui vous plaisent, mais surtout avec ce 
                        sourire sincère qui en dit long sur l’expérience vécue. Pour moi, chaque portrait est 
                        une célébration de l’authenticité et un précieux souvenir à chérir.
                    </p>
                </article>
            </section>

            {/* Description Service 2 */}
            <section className={style.DescriptionServices2}>
                <header className={style.Services2Title}>
                    <h3>
                        Service 2 : Le mariage ce moment si attendu
                    </h3>
                </header>

                <article className={style.Service2ContainerText}>
                    <div className={style.Service2Text1}>
                        <p>
                            Le jour de votre mariage est un moment unique, et chaque détail mérite d'être capturé 
                            avec soin et émotion. Photographe spécialisée dans le mariage professionnel, basée à 
                            Montpellier, je mets tout en œuvre pour immortaliser les moments les plus authentiques 
                            et les plus précieux de cette journée exceptionnelle. Que ce soit lors des préparatifs, 
                            pendant la cérémonie, lors des séances de couple ou encore pendant la soirée dansante, 
                            je vous accompagne avec une approche discrète et naturelle, en créant des images 
                            (voir des vidéos) qui racontent réellement votre histoire. Mon objectif ? Vous offrir 
                            des souvenirs intemporels et sincères. 
                        </p>
                    </div>
                    <div className={style.Service2Text2}>
                        <p>
                            <Link to="#">
                                Découvrez plus en détail mes prestations et comment je peux vous aider à revivre votre journée dans tous ses moments !
                            </Link>
                        </p>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default ContainerDescriptionServicesHomeRoot;
