import style from "../../../StyleRootComponent.module.css";

function MentionsLegalesComponentC() {
    return (
        <article className={`MentionsLegalesComponentC ${style.MentionsLegalesComponentC}`}>
            <h2 className={style.TitleH2px2}>
                3 – Limitations de responsabilité
            </h2>

            {/* Text 1 */}
            <p className={style.TextP4}>
                L’ATELIER PHOTO MONTPELLIER ne pourra être tenu pour responsable des dommages directs et indirects 
                causés au matériel de l’utilisateur, lors de l’accès au site {" "}
                <span className={style.SpanBold}>
                    {"https://latelierphotomontpellier.fr"}
                </span>
                {" "}. L’ATELIER PHOTO MONTPELLIER  décline toute responsabilité quant à l’utilisation qui pourrait 
                être faite des informations et contenus présents sur {" "}
                <span className={style.SpanBold}>
                    {"https://latelierphotomontpellier.fr"}
                </span>
                {"."}
            </p>

            {/* Text 2 */}
            <p className={style.TextP4}>
                L’ATELIER PHOTO MONTPELLIER s’engage à sécuriser au mieux le site {" "}
                <span className={style.SpanBold}>
                    {"https://latelierphotomontpellier.fr"}
                </span>
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

export default MentionsLegalesComponentC;
