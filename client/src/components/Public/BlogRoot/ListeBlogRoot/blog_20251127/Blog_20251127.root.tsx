/* Import des modules CSS */
import style from "../../../../StyleRootComponent.module.css";

function Blog_20251127_Root() {
    return (
        <section className={`Blog_20251127_Root ${style.ContainerRootRacine}`}>
            <header className={style.ContainerTitle}>
                <h1 className={style.TitleH1}>
                    {`Trouvez les Bons Profils : Comment la Vidéo vous fait Économiser sur vos Coûts de Recrutement`}
                </h1>
            </header>

            <h2 className={style.TitleH2}>
                Le Coût Caché d'un Mauvais Recrutement
            </h2>

            <h3 className={style.TitleLNH3}>
                La Véritable Pénurie de Talent : Volume vs. Qualification
            </h3>

            <p className={style.TextP4}>
                Dans le paysage du recrutement B2B actuel, l'enjeu stratégique n'est plus de générer un volume massif 
                de candidatures. Il réside dans la capacité à attirer les profils <strong>réellement alignés</strong> sur vos 
                valeurs, c'est-à-dire les <strong>candidatures qualifiées.</strong> Car un recrutement raté ne se limite 
                pas au coût de l'annonce : il se mesure au temps perdu par les équipes RH, aux désalignements culturels 
                et au <strong>risque accru de turnover.</strong>
            </p>

            <p className={style.TextP4}>
                Or, les méthodes traditionnelles de communication RH, souvent basées sur le texte, peinent à refléter 
                l'âme et le quotidien de votre entreprise, engendrant un trafic important mais <strong>souvent peu qualifié.</strong>
            </p>

            <p className={style.TextP4}>
                C'est là que la <strong>vidéo Marque Employeur</strong> s'impose comme un levier de différenciation et 
                d'efficacité redoutable. L'écart entre l'attente des talents et l'offre des entreprises est criant :
            </p>

            <p className={style.TextP4}>
                <strong>Alors que 92 % des talents sont sensibles aux vidéos intégrées dans une annonce d'emploi, 
                seules 4 % des entreprises exploitent actuellement ce format visuel.</strong>
            </p>

            <p className={style.TextP4}>
               Ce déficit de communication représente une opportunité exceptionnelle pour votre entreprise de se démarquer. 
               En fournissant une immersion authentique dans votre culture d'entreprise, la vidéo filtre naturellement 
               les candidats, augmentant ainsi l'adéquation culturelle et, in fine, réduisant vos coûts de recrutement 
               directs et indirects (jusqu'à 50 %). Il est temps d’arrêter de chasser les CV pour donner aux talents 
               l'envie de vous choisir.
            </p>

            <h3 className={style.TitleLNH3}>
                Pourquoi les Offres d'Emploi Textuelles Coûtent Cher
            </h3>
        </section>
    )
}

export default Blog_20251127_Root;
