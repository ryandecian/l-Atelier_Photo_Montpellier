import style from "./Container4ImagesPortraitRoot.module.css";
import PremiumCardImgSudoRoot from "../../PremiumCardImgSudoRoot/PremiumCardImgSudoRoot";

interface Container4ImagesPortraitRootType {
    img1: string;
    img2: string;
    img3: string;
    img4: string;

    MetaNameImg1: string;
    MetaNameImg2: string;
    MetaNameImg3: string;
    MetaNameImg4: string;
}

function Container4ImagesPortraitRoot(Props: Container4ImagesPortraitRootType) {
    const {img1, img2, img3, img4, 
        MetaNameImg1, MetaNameImg2, MetaNameImg3, MetaNameImg4
    } = Props;

    return (
        <div className={style.Container4ImagesRoot}>
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
            <div className={style.ContainerImg}>
                <PremiumCardImgSudoRoot
                src={img4}
                alt={MetaNameImg4}
                className={style.Image}
                />
            </div>
        </div>
    );
}

export default Container4ImagesPortraitRoot;
