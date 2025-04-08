import css from "../../CGVRoot.module.css";

function CGVComponentA() {
    return (
        <section className={`CGVRootComponentA ${css.ContainerRootRacine}`}>
                <h2 className={css.TitleH2}>
                    Partie 1 - Dispositions communes aux particuliers et entreprises
                </h2>

                <div className={css.Separator30}/>

                {/* Container 1 : Objet */}
                <article className={css.ContainerArticle}>
                    <h3 className={css.TitleH3}>
                        Article 1 - Objet
                    </h3>
                    <div className={css.Separator20}/>

                    <p className={css.TextP4}>
                        Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les droits et 
                        obligations des parties dans le cadre de la prestation de services photographiques fournie 
                        par L’Atelier Photo Montpellier, représenté par la Parenthèse Photo Anne SAUNIER 13 Allée des 
                        Platanes 34790 GRABELS immatriculé sous le numéro SIRET 802 558 825 
                    </p>
                    <div className={css.Separator20}/>

                    <p className={css.TextP4}>
                        Toute commande implique l’adhésion sans réserve du client aux présentes CGV, sauf conditions 
                        particulières convenues par écrit entre les parties.  
                    </p>
                </article>

                <div className={css.Separator30}/>

                {/* Container 2 : Prestations proposées */}
                <article className={css.ContainerArticle}>
                    <h3 className={css.TitleH3}>
                        Article 2 – Prestations proposées
                    </h3>
                    <div className={css.Separator20}/>

                    <p className={css.TextP4}>
                        Le photographe propose des prestations photographiques pour : 
                    </p>
                    <div className={css.Separator10}/>

                    <ul className={css.ContainerList}>
                        <li className={css.ElementLi}>
                            Les particuliers : portraits, grossesse, nouveau-nés, mariages, événements privés, etc...
                        </li>
                        <li className={css.ElementLi}>
                            Les entreprises : portraits corporate, reportages d’entreprise, photographie de produits, 
                            événements professionnels, etc...  
                        </li>
                    </ul>
                </article>

                <div className={css.Separator30}/>

                {/* Container 3 : Tarifs et paiement */}
                <article className={css.ContainerArticle}>
                    <h3 className={css.TitleH3}>
                        Article 3 – Tarifs et paiement
                    </h3>
                    <div className={css.Separator20}/>

                    <h4 className={css.TitleH4}>
                        3.1. Tarification : 
                    </h4>
                    <div className={css.Separator10}/>

                    <p className={css.TextP4}>
                        Les tarifs des prestations sont exprimés en euros (€) et en HT auquel s’ajoute la TVA dont le taux 
                        actuellement est de 20 % et sont détaillés sur le site internet ou sur devis personnalisé. Ils 
                        peuvent être modifiés à tout moment sans préavis, mais les prestations sont facturées sur la base 
                        du tarif en vigueur au moment de la réservation. 
                    </p>
                    <div className={css.Separator20}/>

                    <h4 className={css.TitleH4}>
                        3.2. Modalités de paiement :
                    </h4>
                    <div className={css.Separator10}/>

                    <ul className={css.ContainerList}>
                        <li className={css.ElementLi}>
                            Un acompte de 30% du montant total est demandé à la signature du devis ou à la réservation de 
                            la séance, sauf mention contraire.  
                        </li>
                        <li className={css.ElementLi}>
                            Le solde est dû au plus tard le jour de la prestation pour les particuliers et à réception de 
                            facture pour les entreprises (paiement sous 30 jours maximum).  
                        </li>
                        <li className={css.ElementLi}>
                            Paiement possible par virement bancaire, chèque ou espèces.
                        </li>
                    </ul>
                    <div className={css.Separator20}/>

                    <h4 className={css.TitleH4}>
                        3.3. Retard de paiement :  
                    </h4>
                    <div className={css.Separator10}/>

                    <p className={css.TextP4}>
                        Toute somme non réglée à l’échéance entraîne des pénalités de retard de 10% du montant total 
                        par mois de retard ainsi qu’une indemnité forfaitaire de recouvrement de 40 € pour les 
                        professionnels (art. L.441-10 du Code de commerce).  
                    </p>
                </article>

                <div className={css.Separator30}/>

                {/* Container 4 : Droit de rétractation et annulation */}
                <article className={css.ContainerArticle}>
                    <h3 className={css.TitleH3}>
                        Article 4 – Droit de rétractation et annulation
                    </h3>
                    <div className={css.Separator20}/>

                    <h4 className={css.TitleH4}>
                        4.1. Pour les particuliers :  
                    </h4>
                    <div className={css.Separator10}/>
                    
                    <ul className={css.ContainerList}>
                        <li className={css.ElementLi}>
                            Conformément à l’article L.221-18 du Code de la consommation, le client dispose d’un délai 
                            de 14 jours pour se rétracter après signature du contrat, sauf si la prestation a déjà été 
                            réalisée en partie ou en totalité.  
                        </li>
                        <li className={css.ElementLi}>
                            En cas d’annulation après ce délai, l’acompte versé n’est pas remboursable.
                        </li>
                    </ul>
                    <div className={css.Separator20}/>

                    <h4 className={css.TitleH4}>
                        4.2. Pour les entreprises : 
                    </h4>
                    <div className={css.Separator10}/>

                    <ul className={css.ContainerList}>
                        <li className={css.ElementLi}>
                            Toute annulation après signature du devis entraîne la facturation de l’acompte versé.
                        </li>
                        <li className={css.ElementLi}>
                            Si l’annulation intervient moins de 48 heures avant la prestation, 100% du montant total sera facturé.
                        </li>
                    </ul>
                </article>
        </section>
    );
}

export default CGVComponentA;
