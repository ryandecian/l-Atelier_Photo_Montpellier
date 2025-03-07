import style from "./ContainerImgHomeRoot.module.css";

interface ContainerImgHomeRootType {
    img1?: string;
    img2?: string;
    img3?: string;
    img4?: string;

    MetaNameImg1?: string;
    MetaNameImg2?: string;
    MetaNameImg3?: string;
    MetaNameImg4?: string;
}

function ContainerImgHomeRoot(Props: ContainerImgHomeRootType) {
    const {img1, img2, img3, img4, 
        MetaNameImg1, MetaNameImg2, MetaNameImg3, MetaNameImg4
    } = Props;
    return (
        <div className={style.ContainerImgHomeRoot}>
            <div className={style.ContainerImg}>
                <img src={img1} alt={MetaNameImg1} />
            </div>
            <div className={style.ContainerImg}>
                <img src={img2} alt={MetaNameImg2} />
            </div>
            <div className={style.ContainerImg}>
                <img src={img3} alt={MetaNameImg3} />
            </div>
            <div className={style.ContainerImg}>
                <img src={img4} alt={MetaNameImg4} />
            </div>
        </div>
    );
}

export default ContainerImgHomeRoot;
