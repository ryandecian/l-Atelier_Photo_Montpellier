import style from "./CGVComposantB.module.css";

function CGVComposantB() {
    return (
        <section className={style.CGVComposantB}>
                <h2 className={style.TitleH2}>
                    Partie 2 - Dispositions spécifiques aux particuliers
                </h2>

                <div className={style.Separator}/>

                {/* Container 5 : Objet */}
                <article className={style.ContainerArticle}>
                    <h3 className={style.TitleH3SP}>
                        Article 5 – Déroulement de la séance et obligations du client
                    </h3>
                    <div className={style.Separator}/>
                    <ul className={style.ContainerList}>
                        <li className={style.ElementLi}>
                            Le client s’engage à être à l’heure au rendez-vous fixé pour la séance photo. Tout retard 
                            sera imputé sur le temps de séance réservé.
                        </li>
                        <li className={style.ElementLi}>
                            Pour les séances en extérieur, le photographe ne pourra être tenu responsable des 
                            conditions météorologiques défavorables. Une reprogrammation peut être envisagée selon 
                            disponibilités.
                        </li>
                    </ul>
                    
                    <h3 className={style.TitleH3}>
                        Article 6 – Livraison des photographies
                    </h3>
                </article>
                
                <article className={style.ContainerArticle}>
                    <h3 className={style.TitleH3}></h3>
                    <p className={style.Text}></p>
                    <h4 className={style.TitleH4}></h4>
                    <ul className={style.ContainerList}>
                        <li className={style.ElementLi}></li>
                    </ul>
                </article>

                <article className={style.ContainerArticle}></article>
                <div className={style.Separator}/>
                <article className={style.ContainerArticle}></article>
        </section>
    );
}

export default CGVComposantB;
