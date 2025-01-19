import { Helmet } from "react-helmet-async";

function HomePage() {
    const SEO = {
        title: "Accueil - ",
        autor: "Anne SAUNIER",
        description: "",
        url: "",
        img: "",
        keywords: {
            1: "", /* 1 mot clé */
            2: "", /* 2 mots clés */
            3: "", /* 3 mots clés */
            4: "", /* 4 mots clés */
            5: "", /* 5 mots clés */
            6: "", /* 6 mots clés */
            7: "", /* 7 mots clés */
            8: "", /* 8 mots clés */
            9: "", /* 9 mots clés */
            10: "", /* 10 mots clés */
            11: "", /* 11 mots clés */
            12: "", /* 12 mots clés */
            13: "", /* 13 mots clés */
            14: "", /* 14 mots clés */
            15: "", /* 15 mots clés */
        }, /* 10 a 15 mots max */
  }

    return (
        <div>
            <Helmet>
                  {/* Balises SEO */}
                     {/* Balise pour Google */}
                         <title>{SEO.title}</title>
                         <meta name="description" content={SEO.description}/>
                         <meta name="author" content={SEO.autor} />
                         <meta name="keywords" content={`${}, ${}, ${}, ${}, ${}`} />
                         <meta charSet="UTF-8" />

                     {/* Balises OpenGraph - Facebook, Linkedin, WhatsApp, Instagram*/}
                         <meta property="og:title" content={SEO.title} />
                         <meta property="og:description" content={SEO.description} />
                         <meta property="og:image" content="" /> {/* Non fournis pour le moment */}
                         <meta property="og:url" content={SEO.url} />

                     {/* Balises Twitter Cards */}
                         <meta name="twitter:title" content={SEO.title} />
                         <meta name="twitter:description" content={SEO.description} />

                     {/* Balises SEO pour Google */}
                         <meta name="robots" content="index, follow" />
                         <meta name="googlebot" content="index, follow" />
                         <meta name="bingbot" content="index, follow" />
            </Helmet>
            <header/>
            <main/>
            <footer/>
        </div>
    )
}

export default HomePage;