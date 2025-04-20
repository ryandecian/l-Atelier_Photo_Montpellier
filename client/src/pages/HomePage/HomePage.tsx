import { Helmet } from "react-helmet-async";
import NavTargetHomeRoot from "../../components/NavTargetHomeRoot/NavTargetHomeRoot";
import css from "../stylePage.module.css"
import HomeRoot from "../../components/HomeRoot/HomeRoot";
import FooterRoot from "../../components/FooterRoot/FooterRoot";
import ListDataRouter from "../../router/router";

function HomePage() {
    const SEO = {
        title: "Accueil - l'Atelier Photo Montpellier",
        autor: "Anne SAUNIER",
        description: "Photographe professionnelle à Montpellier, Anne SAUNIER vous invite à découvrir l’univers de l’Atelier Photo Montpellier : portraits Lifestyle, Mariage et Corporate. Un regard artistique et bienveillant pour sublimer vos instants.",
        url: `${import.meta.env.URL_CLIENT_LAPM}${ListDataRouter[0].path}`, /*URL de la page*/
        img: `${import.meta.env.URL_CLIENT_LAPM}/Dans-les-yeux-de-Sacha.jpg`, /*Lien URL de l'image*/
        twitterUrlImg: "", /*Lien URL de l'image*/
        twitterCompte: "", /*@MonCompteTwitter*/ /*Permet d'identifier le compte officiel*/
        keywords: {
            1: "Anne SAUNIER", /* 1 mot clés */
            2: "Photographe", /* 2 mots clés */
            3: "Photographe Montpellier", /* 3 mots clés */
            4: "l'Atelier Photo Montpellier", /* 4 mots clés */
            5: "LAPM", /* 5 mots clés */
            6: "Meilleur photogaphe montpellier", /* 6 mots clés */
            7: "Photographe professionnel", /* 7 mots clés */
            8: "Photographe sud de france", /* 8 mots clés */
            9: "Photographe Grabels", /* 9 mots clés */
            10: "Photographe rapide", /* 10 mots clés */
            11: "Déplacement photographe", /* 11 mots clés */
            12: "Photographe animalier Montpellier", /* 12 mots clés */
            13: "", /* 13 mots clés */
            14: "", /* 14 mots clés */
            15: "", /* 15 mots clés */
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
        <section className={`HomePage ${css.Page}`}>
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
            <header className={css.HeaderHomePage}>
                 <NavTargetHomeRoot />
            </header>
            <main className={css.Main}>
                <HomeRoot />
            </main>
            <footer className={css.Footer}>
                <FooterRoot />
            </footer>
        </section>
    )
}

export default HomePage;
