/* Import des modules CSS */
import style from "../../style.root.module.css";

function PhotoCorporate_Root() {
    return (
        <section className={`PhotoCorporate_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1_NNNN}>
                    {`Portraits Corporate à Montpellier - Valorisez Votre Image Professionnelle`}
                </h1>
            </header>

            <p className={style.TextP4}>
                Votre portrait professionnel est souvent la <strong>première impression</strong> que vous laissez à vos 
                clients, partenaires ou recruteurs. Il reflète votre posture, votre sérieux et votre expertise.
            </p>
        </section>
    );
}

export default PhotoCorporate_Root;
