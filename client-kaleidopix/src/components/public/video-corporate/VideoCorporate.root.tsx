/* Import des modules CSS */
import style from "../../style.root.module.css";

function VideoCorporate_Root() {
    return (
        <section className={`VideoCorporate_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitleRoot}>
                <h1 className={style.TitleH1}>
                    Vidéos Corporate et Reportages d’Entreprise à Montpellier
                </h1>
            </header>

            <p className={style.TextP4}>
                La vidéo est aujourd’hui l’un des <strong>outils les plus puissants </strong> pour valoriser votre entreprise. <br />
                Elle permet de dévoiler votre culture, votre expertise, vos valeurs et le travail de vos équipes avec 
                un impact immédiat.
            </p>

            <p className={style.TextP4}>
                À Montpellier et dans la région, j’accompagne les organisations qui souhaitent renforcer leur 
                communication, attirer des talents, présenter leurs métiers ou structurer leur identité visuelle grâce 
                à des contenus audiovisuels professionnels.
            </p>

            <p className={style.TextP4}>
                Mon approche : <strong>produire des contenus clairs</strong>, humains et alignés avec vos objectifs - marque 
                employeur, <strong>recrutement</strong>, prise de parole, présentation entreprise ou communication digitale.
            </p>
        </section>
    )
}

export { VideoCorporate_Root };