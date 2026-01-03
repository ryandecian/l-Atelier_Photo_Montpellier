/* Import des modules CSS */
import style from "../../../StyleRootComponent.module.css";

function MentionsLegalesC_Component() {
    return (
        <article className={`MentionsLegalesC_Component`}>
            <h2 className={style.TitleH2px2}>
                3 – Limitations de responsabilité
            </h2>

            {/* Text 1 */}
            <p className={style.TextP4}>
                L’ATELIER PHOTO MONTPELLIER ne pourra être tenu pour responsable des dommages directs et indirects 
                causés au matériel de l’utilisateur, lors de l’accès au site {" "}
                <strong>https://atelier-photo-montpellier.fr</strong>
                {" "}. L’ATELIER PHOTO MONTPELLIER  décline toute responsabilité quant à l’utilisation qui pourrait 
                être faite des informations et contenus présents sur {" "}
                <strong>https://atelier-photo-montpellier.fr</strong>
                {"."}
            </p>

            {/* Text 2 */}
            <p className={style.TextP4}>
                L’ATELIER PHOTO MONTPELLIER s’engage à sécuriser au mieux le site {" "}
                <strong>https://atelier-photo-montpellier.fr</strong>
                {" "} cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont 
                importées et installées sur son site à son insu.
            </p>

            {/* Text 3 */}
            <p className={style.TextP4}>
                Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. 
                L’ATELIER PHOTO MONTPELLIER se réserve le droit de supprimer, sans mise en demeure préalable, tout 
                contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en 
                particulier aux dispositions relatives à la protection des données.
            </p>

            {/* Text 4 */}
            <p className={style.TextP4}>
                Le cas échéant, L’ATELIER PHOTO MONTPELLIER se réserve également la possibilité de mettre en cause 
                la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, 
                injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).
            </p>
        </article>
    );
}

export { MentionsLegalesC_Component };
