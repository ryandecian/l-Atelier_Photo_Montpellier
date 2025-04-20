import { Helmet } from "react-helmet-async";
import NavRoot from "../../components/NavRoot/NavRoot";
import style from "../stylePage.module.css";
import LifeStyleRoot from "../../components/LifeStyleRoot/LifeStyleRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import ListDataRouter from "../../router/router";

function LifeStylePage() {
    const SEO = {
        title: "Portrait LifeStyle - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Découvrez le Portrait LifeStyle : des photos naturelles, spontanées, qui racontent votre histoire. Un regard unique signé l'Atelier Photo Montpellier.",
        url: `${import.meta.env.URL_CLIENT_LAPM}${ListDataRouter[12].path}`, /*URL de la page*/
        img: `${import.meta.env.URL_CLIENT_LAPM}/Dans-les-yeux-de-Sacha.jpg`, /*Lien URL de l'image*/
        twitterUrlImg: "", /*Lien URL de l'image*/
        twitterCompte: "", /*@MonCompteTwitter*/ /*Permet d'identifier le compte officiel*/
        keywords: {
            1: "Anne SAUNIER", /* 1 mot clés */
            2: "Photographe", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "LAPM", /* 5 mots clés */
            6: "Service", /* 6 mots clés */
            7: "Portrait LifeStyle", /* 7 mots clés */
            8: "Portrait grossesse", /* 8 mots clés */
            9: "Portrait nouveau né", /* 9 mots clés */
            10: "Portrait Solo", /* 10 mots clés */
            11: "Portrait Feel Good", /* 11 mots clés */
            12: "Portrait animalier", /* 12 mots clés */
            13: "Portrait couple", /* 13 mots clés */
            14: "Portrait Famille", /* 14 mots clés */
            15: "Portrait hobbie", /* 15 mots clés */
        }, /* 10 a 15 mots max */
        type : {
            website: "website", /*(Valeur par défaut) indique qu'il s'agit d'un site web classique.*/
            article: "article", /*Pour des articles de blog ou du contenu éditorial.*/
            video: "video.movie", /*Pour les pages contenant des vidéos de films.*/
            music: "music.song", /*Pour les pages dédiées à la musique.*/
            profile: "profile", /*Pour une page personnelle (profil d'une personne).*/
        }
  }
     // Filtrer les mots-clés non vides
     const filterKeywords = Object.values(SEO.keywords).filter(keyword => keyword.trim() !== "").join(", ");

     return (
        <div className={`LifeStylePage ${style.Page}`}>
            <Helmet>
                  {/* Balises SEO */}
                     {/* Balise pour indexation général */}
                         <title>{SEO.title}</title>
                         <meta name="description" content={SEO.description}/>
                         <meta name="author" content={SEO.autor} />
                         <meta charSet="UTF-8" />
                         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                         {filterKeywords && <meta name="keywords" content={filterKeywords} />}

                     {/* Balises OpenGraph - Facebook, Linkedin, WhatsApp, Instagram*/}
                         <meta property="og:title" content={SEO.title} />
                         <meta property="og:description" content={SEO.description} />
                         <meta property="og:image" content={SEO.img} />
                         <meta property="og:url" content={SEO.url} />
                         <meta property="og:type" content={SEO.type.website} />
                         <meta property="og:locale" content="fr_FR" />

                     {/* Balises Twitter Cards */}
                         <meta name="twitter:title" content={SEO.title} />
                         <meta name="twitter:description" content={SEO.description} />
                         <meta name="twitter:card" content="summary_large_image" />
                         <meta name="twitter:image" content={SEO.twitterUrlImg} />
                         <meta name="twitter:site" content={SEO.twitterCompte} />

                     {/* Balises SEO pour Google */}
                         <meta name="robots" content="index, follow" />
                         <meta name="googlebot" content="index, follow" />
                         <meta name="bingbot" content="index, follow" />

                     {/* Canonical URL (évite le contenu dupliqué pour les moteurs de recherche) */}
                         <link rel="canonical" href={SEO.url} />
            </Helmet>
            <header className={style.Header}>
                 <NavRoot />
            </header>
            <main className={style.Main}>
                <LifeStyleRoot />
            </main>
            <footer className={style.Footer}>
                <FooterRoot />
            </footer>
        </div>
    )
}

export default LifeStylePage;
