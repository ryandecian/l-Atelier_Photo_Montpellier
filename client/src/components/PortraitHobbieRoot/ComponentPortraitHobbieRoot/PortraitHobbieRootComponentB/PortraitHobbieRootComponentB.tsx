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
    </section>
  );
}

export default PortraitHobbieRootComponentB;
