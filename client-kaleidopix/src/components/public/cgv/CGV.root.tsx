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

            <p className={style.TextP4}>
                Un acompte de 30 % est exigé à la commande. <br />
                Le solde est payable à 30 jours maximum à réception de facture. <br />
                Tout retard de paiement entraîne l’application des pénalités légales ainsi qu’une indemnité forfaitaire 
                de recouvrement de 40 €.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Toute annulation après validation du devis entraîne la conservation de l’acompte.
            </h2>

            <p className={style.TextP4}>
                Toute annulation après validation du devis entraîne la conservation de l’acompte. <br />
                Toute annulation à moins de 48 heures avant la prestation entraîne la facturation de 100 % du montant 
                prévu. <br />
                Tout report est soumis à acceptation du Prestataire et à ses disponibilités.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Article 7 – Déroulement des prestations
            </h2>

            <p className={style.TextLiP4}>
                Le client s’engage à :
            </p>

            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    garantir l’accès aux lieux
                </li>
                <li className={style.TextLiP4}>
                    fournir les autorisations nécessaires
                </li>
                <li className={style.TextLiP4}>
                    assurer la disponibilité des personnes concernées
                </li>
                <li className={style.TextLiP4}>
                    fournir les éléments préparatoires demandés (brief, messages clés, charte graphique, etc.)
                </li>
            </ul>

            <p className={style.TextP4}>
                Tout retard ou empêchement imputable au client ne pourra donner lieu à remboursement. <br />
                Les conditions météorologiques ne peuvent être garanties pour les tournages extérieurs.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Article 8 – Obligation de moyens – Direction artistique
            </h2>

            <p className={style.TextP4}>
                Le Prestataire est tenu à une obligation de moyens. <br />
                Le client reconnaît le style artistique propre du Prestataire et accepte que les choix esthétiques 
                (cadrage, lumière, colorimétrie, montage, rythme vidéo) relèvent de sa sensibilité professionnelle. <br />
                Aucune obligation de résultat artistique ne saurait être exigée.
            </p>

            <h2 className={style.TitleH2_00N0}>
                Article 9 – Livraison – Archivage
            </h2>

            <p className={style.TextLiP4}>
                Livraison numérique selon les modalités définies au devis. <br />
                Délais indicatifs :
            </p>
            
            <ul className={style.ContainerUl}>
                <li className={style.TextLiP4}>
                    photos : 2 à 4 semaines
                </li>
                <li className={style.TextLiP4}>
                    vidéos : 3 à 6 semaines
                </li>
            </ul>

            <p className={style.TextLiP4}>
                Ces délais sont indicatifs. <br />
                Les fichiers bruts (RAW, rushes vidéo, projets de montage) ne sont jamais livrés. <br />
                Les fichiers sont archivés pendant une durée maximale de 6 mois après livraison. Passé ce délai, le 
                Prestataire ne garantit plus leur conservation.
            </p>
        </section>
    )
}

export default CGV_Root;
