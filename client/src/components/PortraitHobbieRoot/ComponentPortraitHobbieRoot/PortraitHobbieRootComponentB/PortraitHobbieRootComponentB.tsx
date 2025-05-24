import style from "../../../StyleRootComponent.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesPortraitHobbieControllerData from "../../ImagesPortraitHobbieControllerData";

function PortraitHobbieRootComponentB() {
  return (
    <section className={`PortraitHobbieRootComponentB ${style.ContainerRoot}`}>
        <header className={style.ContainerTitle}>
            <h2 className={style.TitleH2}>
                {"Parce que chaque Hobbie a son histoire, offrez-vous un portrait fidèle à votre complicité."}
            </h2>
        </header>

        <h3 className={style.TitleH2}>
            {"Pourquoi faire un portrait de votre passion ?"}
        </h3>

        <ul className={style.ContainerUl}>
            <li className={style.TextLiP4}>
                Pour 
                <span className={style.SpanBold}>
                    {" garder une trace "}
                </span>
                d’une période importante de votre vie.
            </li>
            <li className={style.TextLiP4}>
                Pour 
                <span className={style.SpanBold}>
                    {" célébrer vos progrès, "}
                </span>
                vos réussites, ou simplement votre constance.
            </li>
            <li className={style.TextLiP4}>
                Pour 
                <span className={style.SpanBold}>
                    {" vous reconnecter à vous-même "}
                </span>
                à travers ce que vous aimez faire.
            </li>
            <li className={style.TextLiP4}>
                Pour 
                <span className={style.SpanBold}>
                    {" partager "}
                </span>
                cette facette de vous avec vos proches ou sur les réseaux.
            </li>
            <li className={style.TextLiP4}>
                Parce que vous méritez une image de vous… dans votre élément
            </li>
            <br />
        </ul>

        <article className={style.ContainerText}>
            <h3 className={style.TitleNH3}>
                {"Pourquoi choisir l’Atelier Photo Montpellier ?"}
            </h3>

            <p className={style.TextP4}>
                Parce que chez moi, on ne “pose” pas. <br />
                On
                <span className={style.SpanBold}>
                    {" vit la photo, "}
                </span>
                on la construit ensemble, avec ce que vous êtes, ce que vous faites, ce qui vous touche.
            </p>

            <p className={style.TextP4}>
                Je vous accompagne de A à Z :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"On échange "}
                    </span>
                    avant la séance sur votre pratique, votre style, vos envies.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"On réfléchit ensemble "}
                    </span>
                    {"à un lieu ou une mise en scène cohérente (au studio, chez vous, sur le terrain, dans votre atelier…)"}
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"Je vous guide avec bienveillance, "}
                    </span>
                    que vous soyez à l’aise ou pas du tout avec l’objectif.
                </li>
                <li className={style.TextLiP4}>
                    <span className={style.SpanBold}>
                        {"On prend le temps, "}
                    </span>
                    pour que chaque image reflète vraiment votre énergie et votre passion.
                </li>
                <br />
            </ul>
        </article>

        <Container4ImagesRoot
            img1={ImagesPortraitHobbieControllerData[4].src}
            MetaNameImg1={ImagesPortraitHobbieControllerData[4].alt}
            img2={ImagesPortraitHobbieControllerData[5].src}
            MetaNameImg2={ImagesPortraitHobbieControllerData[5].alt}
            img3={ImagesPortraitHobbieControllerData[6].src}
            MetaNameImg3={ImagesPortraitHobbieControllerData[6].alt}
            img4={ImagesPortraitHobbieControllerData[7].src}
            MetaNameImg4={ImagesPortraitHobbieControllerData[7].alt}
        />

        <article className={style.ContainerText}>
            <h3 className={style.TitleH2}>
                Un accompagnement complet sur mesure
            </h3>

            <h4 className={style.TitleNH4}>
                Une séance sur-mesure, sans pression
            </h4>
            <p className={style.TextP4}>
                📍 Au studio à Montpellier ou en lumière naturelle, sur le lieu de votre pratique 
                (terrain de sport, atelier, cuisine, manège, garage, salle de danse… c’est votre univers, et je m’y adapte).
            </p>

            <h4 className={style.TitleNH4}>
                Un lieu rassurant ou un extérieur inspirant
            </h4>
            <p className={style.TextP4}>
                🎯 On avance à votre rythme, en jouant avec les postures, la lumière, les émotions.
            </p>

            <h4 className={style.TitleNH4}>
                Direction naturelle et mise en confiance
            </h4>
            <p className={style.TextP4}>
                💬 Même si vous n’aimez pas l’objectif, je vous guide pas à pas, toujours dans la bienveillance. <br />
                💬 Je peux aussi venir discrètement capter un 
                <span className={style.SpanBold}>
                    {" moment en action "}
                </span>
                {"(entraînement, répétition, prestation), ou bien mettre en scène "}
                <span className={style.SpanBold}>
                    {"une ambiance plus artistique ou symbolique."}
                </span>
            </p>

            <h4 className={style.TitleNH4}>
                Des images qui vous font du bien
            </h4>
            <p className={style.TextP4}>
                📸 Sélection de 6 à 18 photos retouchées avec soin, livrées en galerie privée
            </p>
        </article>

        <article className={style.ContainerText}>
            <h3 className={style.TitleH2}></h3>
        </article>
    </section>
  );
}

export default PortraitHobbieRootComponentB;
