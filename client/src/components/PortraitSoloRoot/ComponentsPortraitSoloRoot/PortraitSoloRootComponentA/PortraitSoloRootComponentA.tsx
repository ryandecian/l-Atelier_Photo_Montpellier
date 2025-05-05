import style from "../../../StyleRootComponent.module.css";
import Container4ImagesRoot from "../../../ContainerImageRoot/Container4ImagesRoot/Container4ImagesRoot";
import ImagesPortraitSoloControllerData from "../../ImagesPortraitSoloControllerData";

function PortraitSoloRootComponentA() {
    return (
        <section className={style.ContainerRoot}>
            <header className={style.ContainerTitle}>
                <h2 className={style.TitleH2}>
                    Un Portrait Feel Good, ce n'est pas qu'un beau cliché !
                </h2>
            </header>
            
            <p className={style.TextP4}>
                C'est un moment pour soi. <br />
                Un espace-temps rare où l’on se pose, on respire, on ose être soi-même… devant l’objectif, mais aussi en dedans.
            </p>

            <p className={style.TextP4}>
                Un portrait solo feel good, c’est 
                <span className={style.SpanBold}>
                    {" s’autoriser à se voir autrement : "}
                </span>
                avec bienveillance, authenticité, douceur. <br />
                Ce n’est pas réservé aux mannequins. Ce n’est pas une question de photogénie. <br />
                C’est pour vous, qui avez envie de vous reconnecter à votre image, de 
                <span className={style.SpanBold}>
                    {" reprendre confiance, "}
                </span>
                ou simplement de 
                <span className={style.SpanBold}>
                    {" vous faire un cadeau sincère."}
                </span>
            </p>

            <Container4ImagesRoot 
                img1={ImagesPortraitSoloControllerData[0].src}
                MetaNameImg1={ImagesPortraitSoloControllerData[0].alt}
                img2={ImagesPortraitSoloControllerData[1].src}
                MetaNameImg2={ImagesPortraitSoloControllerData[1].alt}
                img3={ImagesPortraitSoloControllerData[2].src}
                MetaNameImg3={ImagesPortraitSoloControllerData[2].alt}
                img4={ImagesPortraitSoloControllerData[3].src}
                MetaNameImg4={ImagesPortraitSoloControllerData[3].alt}
            />

            <article className={style.ContainerText}>
                <h3 className={style.TitleNH3}>
                    Pourquoi choisir l’Atelier Photo Montpellier ?
                </h3>

                <p className={style.TextP4}>
                    Parce que j’ai fait de l'
                    <span className={style.SpanBold}>
                        {" humain "}
                    </span>
                    le cœur de mon métier. <br />
                    Mon objectif : que vous repartiez 
                    <span className={style.SpanBold}>
                        {" souriant(e), apaisé(e), reboosté(e), "}
                    </span>
                    avec des images qui vous ressemblent vraiment. 
                </p>

                <p className={style.TextP4}>
                    Je vous accompagne du début à la fin, avec écoute, simplicité et sens du détail :
                </p>

                <ul className={style.ContainerUl}>
                    <li className={style.TextLiP4}>
                        On échange en amont sur vos envies, vos doutes, votre rapport à la photo.
                    </li>
                    <li className={style.TextLiP4}>
                        Je vous guide doucement pendant la séance, sans jamais vous forcer.
                    </li>
                    <li className={style.TextLiP4}>
                        On prend le temps de faire les choses bien, dans une atmosphère détendue, conviviale et créative.
                    </li>
                    <br />
                </ul>

                <p className={style.TextP4}>
                    Le studio est pensé comme un 
                    <span className={style.SpanBold}>
                        {" lieu cocon, "}
                    </span>
                    et les extérieurs autour de Montpellier offrent des décors inspirants si vous préférez un shooting nature. 
                </p>
            </article>
        </section>
    )
}

export default PortraitSoloRootComponentA;
