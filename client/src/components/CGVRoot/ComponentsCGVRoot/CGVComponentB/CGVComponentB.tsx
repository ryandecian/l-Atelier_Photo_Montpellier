import css from "../../CGVRoot.module.css";

function CGVComponentB() {
    return (
        <section className={css.CGVComponentB}>
            <div className={css.Separator30}/>
            <h2 className={css.TitleH2}>
                Partie 2 - Dispositions spécifiques aux particuliers
            </h2>

            <div className={css.Separator30}/>

            {/* Container 5 : Déroulement de la séance et obligations du client */}
            <article className={css.ContainerArticle}>
                <h3 className={css.TitleH3}>
                    Article 5 – Déroulement de la séance et obligations du client
                </h3>
                <div className={css.Separator10}/>

                <ul className={css.ContainerList}>
                    <li className={css.ElementLi}>
                        Le client s’engage à être à l’heure au rendez-vous fixé pour la séance photo. Tout retard 
                        sera imputé sur le temps de séance réservé.
                    </li>
                    <li className={css.ElementLi}>
                        Pour les séances en extérieur, le photographe ne pourra être tenu responsable des 
                        conditions météorologiques défavorables. Une reprogrammation peut être envisagée selon 
                        disponibilités.
                    </li>
                </ul>
                <div className={css.Separator30}/>
                    
                <h3 className={css.TitleH3}>
                    Article 6 – Livraison des photographies
                </h3>
                <div className={css.Separator10}/>

                <ul className={css.ContainerList}>
                    <li className={css.ElementLi}>
                        Les photos sont livrées sous format numérique en haute définition 2 à 4 semaines après la prise de vue.
                    </li>
                    <li className={css.ElementLi}>
                        Les tirages et albums sont disponibles en option selon les tarifs en vigueur.
                    </li>
                </ul>
            </article>

            <div className={css.Separator30}/>
            
            {/* Container 6 : Droits d’utilisation et diffusion des images */}
            <article className={css.ContainerArticle}>
                <h3 className={css.TitleH3}>
                    Article 7 – Droits d’utilisation et diffusion des images
                </h3>
                <div className={css.Separator10}/>

                <ul className={css.ContainerList}>
                    <li className={css.ElementLi}>
                        Le photographe conserve l’intégralité des droits d’auteur sur les images réalisées 
                        (art. L.121-1 du Code de la propriété intellectuelle).
                    </li>
                    <li className={css.ElementLi}>
                        Le client a le droit d’utiliser les photos pour un usage strictement personnel.
                    </li>
                    <li className={css.ElementLi}>
                        Le photographe peut utiliser les images à des fins promotionnelles (site internet, réseaux sociaux, 
                        portfolio), sauf mention contraire écrite du client.
                    </li>
                </ul>
            </article>
        </section>
    );
}

export default CGVComponentB;
