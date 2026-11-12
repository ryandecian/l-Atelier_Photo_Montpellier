/* Import des composants Datas */
import { registreBreadcrumb_data_SEO } from "../../data/registreBreadcrumb.data.seo";
/* Import des composants Router */

/* Import des Types */
import type { Service_script_Type } from "../../script-json-ld/json-ld-service/service.script.type";


/* Attention, chaque données à exploiter ne doit être déclarée qu'une seul fois ! */
function portraitMariage_data_SEO() {
    const dataGlobalSEO = {
        title: registreBreadcrumb_data_SEO("mariage").dataItems.name_page, /* Titre de la page - injection dans index.html et dans la barre de navigation du navigateur */
        description: "Découvrez les prestations et tarifs d'Anne SAUNIER, photographe et vidéaste de mariage à Montpellier (LAPM). Reportages photo et vidéo adaptés à vos envies.",
        uri_page: registreBreadcrumb_data_SEO("mariage").dataItems.uri_page,
    }

    const breadcrumb_data_SEO = registreBreadcrumb_data_SEO("mariage").dataBreadcrumb;

    const service_data_SEO: Service_script_Type = {
        description_service: dataGlobalSEO.description,
        id: "mariage",
        name_service: "Reportage photo et vidéo de mariage à Montpellier",
        uri_page: dataGlobalSEO.uri_page,
    }

    const metaName_data_SEO = {
        title: dataGlobalSEO.title,
        description: dataGlobalSEO.description,
        author: "Anne SAUNIER",
        uri_page: dataGlobalSEO.uri_page,
        type_website: "website", /* Voir doc og:type */
        img_seo: {
            uri_image: "/images-seo/home/photographe-mariage-l-atelier-photo-montpellier.jpg",
            alt_image: "Photographe de mariage professionnel à Montpellier : portrait de mariés par L'Atelier Photo Montpellier (LAPM).", /* JPG - moins de 300 ko - 1200 x 630 px exactement */
        }
    };

    const dataSEO = {
        breadcrumb_data_SEO: breadcrumb_data_SEO,
        service_data_SEO: service_data_SEO,
        metaName_data_SEO: metaName_data_SEO,
    }

    return (
        dataSEO
    )
}

export { portraitMariage_data_SEO };

/**
 * ### Documentation : og:type
 * 
 * Définit la nature du contenu pour les réseaux sociaux (balise og:type).
 * 
 * type : {
 *     website: "website" - (Valeur par défaut) Indique qu'il s'agit d'un site web classique.
 *     article: "article" - Pour des articles de blog ou du contenu éditorial.
 *     video: "video.movie" - Pour les pages contenant des vidéos de films.
 *     music: "music.song" - Pour les pages dédiées à la musique.
 *     profile: "profile" - Pour une page personnelle (profil d'une personne).
 * }
 */
