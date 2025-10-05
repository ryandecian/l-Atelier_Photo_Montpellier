/* Import des modules CSS */
import css from "./container4Imagesportrait.module.css";

/* Import des composants d'Elements */
import PremiumCardImgSudoRoot from "../../premium-card-img-modal/PremiumCardImgModal.element";

/* Import des Types */
import { Container4Images_Type } from "../../../../types/elements/container4Images.type";

function Container4ImagesPortrait_Element(
    {
        img1, img2, img3, img4,
        metaNameImg1, metaNameImg2, metaNameImg3, metaNameImg4
    }: Container4Images_Type) {


    return (
        <div className={css.Container4ImagesRoot}>
            <div className={css.ContainerImg}>
                <PremiumCardImgSudoRoot
                src={img1}
                alt={metaNameImg1}
                className={css.Image}
                />
            </div>
            <div className={css.ContainerImg}>
                <PremiumCardImgSudoRoot
                src={img2}
                alt={metaNameImg2}
                className={css.Image}
                />
            </div>
            <div className={css.ContainerImg}>
                <PremiumCardImgSudoRoot
                src={img3}
                alt={metaNameImg3}
                className={css.Image}
                />
            </div>
            <div className={css.ContainerImg}>
                <PremiumCardImgSudoRoot
                src={img4}
                alt={metaNameImg4}
                className={css.Image}
                />
            </div>
        </div>
    );
}

export { Container4ImagesPortrait_Element };
