/* Import des modules CSS */
import css from "./container4Images.module.css";

/* Import des composants d'Elements */
import PremiumCardImgSudoRoot from "../../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";

/* Import des Types */
import { Container4Images_Type } from "../../../../types/elements/container4Images.type";

function Container4Images_Element(Props: Container4Images_Type) {
    const {img1, img2, img3, img4, 
        metaNameImg1, metaNameImg2, metaNameImg3, metaNameImg4
    } = Props;

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

export { Container4Images_Element };
