/* Import des modules CSS */
import css from "./container3Images.module.css";

/* Import des composants d'Elements */
import { PremiumCardImgModal_Element } from "../../premium-card-img-modal/PremiumCardImgModal.element";

/* Import des Types */
import { Container3Images_Type } from "../../../../types/elements/container3Images.type";

function Container3Images_Element({ img1, img2, img3, metaNameImg1, metaNameImg2, metaNameImg3 }: Container3Images_Type) {
    return (
        <div className={css.Container3ImagesRoot}>
            <div className={css.ContainerImg}>
                <PremiumCardImgModal_Element
                src={img1}
                alt={metaNameImg1}
                className={css.Image}
                />
            </div>
            <div className={css.ContainerImg}>
                <PremiumCardImgModal_Element
                src={img2}
                alt={metaNameImg2}
                className={css.Image}
                />
            </div>
            <div className={css.ContainerImg}>
                <PremiumCardImgModal_Element
                src={img3}
                alt={metaNameImg3}
                className={css.Image}
                />
            </div>
        </div>
    );
}

export { Container3Images_Element };
