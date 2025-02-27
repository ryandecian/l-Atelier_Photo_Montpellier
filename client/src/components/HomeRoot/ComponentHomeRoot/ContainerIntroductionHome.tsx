import style from "./ContainerIntroductionHome.module.css";

function ContainerIntroductionHome() {
    return (
        <section className={style.ContainerIntroduction}>
                <header className={style.IntroTitle}>
                    <h2>
                        INTRODUCTION :
                    </h2>
                </header>
                <article className={style.IntroText1}>
                    <p>
                        Vous cherchez à immortaliser des moments uniques à travers des portraits authentiques,
                        des photos de mariage, des shootings lifestyle ou même en vidéo ?
                    </p>
                </article>
                <article className={style.IntroText2}>
                    <p>
                        En tant que photographe professionnelle à Montpellier, je m'engage à capturer vos moments précieux avec professionnalisme et sensibilité.
                    </p>
                </article>
            </section>
    );
}

export default ContainerIntroductionHome;
