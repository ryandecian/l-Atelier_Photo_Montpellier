import style from "./Container3ImagesRoot.module.css";
import PremiumCardImgSudoRoot from "../../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";

interface Container3ImagesRootType {
    img1: string;
    img2: string;
    img3: string;

    MetaNameImg1: string;
    MetaNameImg2: string;
    MetaNameImg3: string;
}

function Container3ImagesRoot(Props: Container3ImagesRootType) {
    const {img1, img2, img3, 
        MetaNameImg1, MetaNameImg2, MetaNameImg3, 
    } = Props;

    return (
        <div className={style.Container3ImagesRoot}>
            <div className={style.ContainerImg}>
                <PremiumCardImgSudoRoot
                src={img1}
                alt={MetaNameImg1}
                className={style.Image}
                />
            </div>
            <div className={style.ContainerImg}>
                <PremiumCardImgSudoRoot
                src={img2}
                alt={MetaNameImg2}
                className={style.Image}
                />
            </div>
            <div className={style.ContainerImg}>
                <PremiumCardImgSudoRoot
                src={img3}
                alt={MetaNameImg3}
                className={style.Image}
                />
            </div>
        </div>
    );
}

export default Container3ImagesRoot;
