import style from "./HomeRootComposantB.module.css"
import ContainerImgHomeRoot from "../ComposantHomeRoot/ContainerImgHomeRoot";

/* Import des images*/
import img1 from "../../../../assets/Images/ImageHomePage/HomeImg1.jpg";
import img2 from "../../../../assets/Images/ImageHomePage/HomeImg2.jpg";
import img3 from "../../../../assets/Images/ImageHomePage/HomeImg3.jpg";
import img4 from "../../../../assets/Images/ImageHomePage/HomeImg4.jpg";

function HomeRootComposantB() {
    const data1 = {
        img1: img1,
        MetaNameImg1: "Portrait Studio Corporate",
        img2: img2,
        MetaNameImg2: "Portrait Père et fils LifeStyle",
        img3: img3,
        MetaNameImg3: "Portrait jeune femme lumière naturelle",
        img4: img4,
        MetaNameImg4: "Shooting couple studio"
    }
    return (
        <section className={style.HomeRootComposantB}>
            <header className={style.ContainerTitle}>
                <h2 className={style.Title}>
                    Chaque portrait a son histoire à raconter
                </h2>
            </header>

            <ContainerImgHomeRoot
                img1={data1.img1}
                MetaNameImg1={data1.MetaNameImg1}
                img2={data1.img2}
                MetaNameImg2={data1.MetaNameImg2}
                img3={data1.img3}
                MetaNameImg3={data1.MetaNameImg3}
                img4={data1.img4}
                MetaNameImg4={data1.MetaNameImg4}
            />

        </section>
    );
}

export default HomeRootComposantB;