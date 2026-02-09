/* Import des modules CSS */
import style from "../../style.root.module.css";

/* Import des composants Router */
import routerExt from "../../../router/routerExt.router";

function CGV_Root() {
    return (
        <section className={`CGV_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1_NNNN}>
                    {`CONDITIONS GÉNÉRALES DE VENTE (CGV) - Kaleidopix`}
                </h1>
            </header>

            <h2 className={style.TitleH2_00N0}>
                Article 1 – Identification du prestataire
            </h2>

            <p className={style.TextP4}>
                Les présentes Conditions Générales de Vente s’appliquent à toutes les prestations réalisées via le site 
                internet <strong>Kaleidopix</strong>, exploité par :
            </p>

            <p className={style.TextP4}>
                <strong>SARL LA PARENTHESE PHOTO</strong> <br />
                Capital social : <strong>2 000 €</strong> <br />
                SIRET : <strong>802 558 825 00021</strong> <br />
                Siège social : <strong>13 Allée des Platanes, 34790 Grabels</strong> <br />
                Représentée par Anne SAUNIER, gérante
            </p>

            <p className={style.TextP4}>
                Email : <a className={style.Link} href={routerExt.emailKaleidopix}>as@kaleidopix.fr</a> <br />
                Téléphone : <a className={style.Link} href={routerExt.phoneKaleidopix}>06 52 67 73 33</a>
            </p>

            <p className={style.TextP4}>
                Ci-après dénommée « le Prestataire ».
            </p>

            <h2 className={style.TitleH2_00N0}>
                Article 2 – Objet
            </h2>

            <p className={style.TextLiP4}>
                Les présentes CGV régissent les prestations professionnelles de photographie et de vidéo à destination 
                des entreprises, notamment :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    portraits corporate
                </li>
                <li className={style.TextLiP4}>
                    reportages d’entreprise
                </li>
                <li className={style.TextLiP4}>
                    photos de communication
                </li>
                <li className={style.TextLiP4}>
                    films institutionnels
                </li>
                <li className={style.TextLiP4}>
                    vidéos marque employeur
                </li>
                <li className={style.TextLiP4}>
                    interviews
                </li>
                <li className={style.TextLiP4}>
                    capsules vidéo / reels professionnels
                </li>
                <li className={style.TextLiP4}>
                    contenus marketing photo & vidéo
                </li>
            </ul>

            <h2 className={style.TitleH2_00N0}>
                Article 3 - Champ d’application - Commande
            </h2>

            <p className={style.TextLiP4}>
                Toute commande implique l’adhésion sans réserve aux présentes CGV. <br />
                La commande devient ferme après :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    signature du devis
                </li>
                <li className={style.TextLiP4}>
                    versement d’un acompte de 30 %
                </li>
            </ul>

            <p className={style.TextP4}>
                L’acompte vaut engagement ferme et définitif.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Article 4 – Tarifs – TVA
            </h2>

            <p className={style.TextP4}>
                Les tarifs sont exprimés en euros hors taxes (HT). <br />
                L’entreprise est assujettie à la TVA au taux en vigueur, actuellement fixé à 20 %, susceptible d’évolution. <br />
                Les devis sont établis en HT, auxquels s’ajoute la TVA afin d’obtenir un montant TTC.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Article 5 – Modalités de paiement
            </h2>

        </section>
    )
}

export default CGV_Root;
