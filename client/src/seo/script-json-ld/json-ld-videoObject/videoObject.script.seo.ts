/* Import des Components de Data */
import { dataMasterSEO_data_SEO as dataMasterSEO } from "../../data/dataMasterSEO.data.seo";

/* Import des Utils */
import { generateURLSlug_Utils } from "../../utils/generateURLSlug.utils";
import { timeISO8601_Utils } from "./timeISO8601.utils";

/* Import des Types */
import { VideoObject_script_Type } from "./videoObject.script.type";


/**
 * ### Documentation : Script JSON-LD VideoObject de Google.
 * Ce composant réutilisable à pour objectif de générer un script JSON-LD pour présenter une vidéo sur le site.
 * Il est généralement utilisé pour : 
 * - Les pages contenant des vidéos, qui ont des exigences spécifiques en matière de SEO et de structuration des données.
 * 
 * ---
 * ### Les clés attendues en paramètre de la fonction sont :
 * @param {VideoObject_script_Type} data - L'objet contenant les information necessaire au script JSON-LD.
 * @param {string} data.date_upload - **[date_upload]** - Date de mise en ligne de la vidéo (YYYY-MM-DD).
 * @param {string} data.description - **[description]** - Résumé dense de la vidéo pour le SEO/GEO (60 à 160 caractères max).
 * @param {object} data.duration_video - **[duration_video]** - Optionnel - Durée de la vidéo. Cette clé doit être un objet. 
 * @param {number} data.duration_video.h - **[duration_video.h]** - Le nombre d'heures. Optionnel. Si la valeur vaut 0, elle est ignorée.
 * @param {number} data.duration_video.m - **[duration_video.m]** - Le nombre de minutes. Optionnel. Si la valeur vaut 0, elle est ignorée.
 * @param {number} data.duration_video.s - **[duration_video.s]** - Le nombre de secondes. Optionnel. Si la valeur vaut 0, elle est ignorée.
 * @param {string} data.id_video - **[id_video]** - Identifiant unique de l'entité vidéo (string simple, même règle que les URL).
 * @param {string} data.name_video - **[name_video]** - Nom de la vidéo (espace autorisé, 10 à 60 caractères max).
 * @param {string} data.uri_miniature - **[uri_miniature]** - URI de l'image miniature de la vidéo sans le nom de domaine.
 * @param {string} data.uri_page - **[uri_page]** - URI de la page sans le nom de domaine (router).
 * @param {string} data.uri_video - **[uri_video]** - URI de la vidéo sans le nom de domaine (router).
 * 
 * ---
 * @pure Indique que la fonction est pure : elle ne produit aucun effet secondaire et retourne un résultat prédictible basé uniquement sur les arguments fournis.
 * @returns {string} Retourne une string grâce à la fonction JSON.stringify, necessaire pour l'injection dans une page.
 */

function videoObject_script_SEO(data: VideoObject_script_Type) : string {
    const JSON_LD = JSON.stringify({
        "@context": dataMasterSEO["@context"], /* (Obligatoire) URL de Google schéma */
        "@type": "VideoObject",                /* (Obligatoire) Type de JSON-LD */
        "@id": `${dataMasterSEO.url}${data.uri_page}/#${generateURLSlug_Utils(data.id_video)}`, /* @id unique de l'entité vidéo, basé sur l'URL de sa page hôte + un slug propre au média */

        "description": data.description,       /* (Obligatoire) Description de la vidéo */
        "name": data.name_video,                     /* (Obligatoire) Titre de la vidéo */
        "thumbnailUrl": `${dataMasterSEO.url}${data.uri_miniature}`,     /* (Obligatoire) URL de l'image miniature */
        "uploadDate": data.date_upload,         /* (Obligatoire) Date de mise en ligne (YYYY-MM-DD) */
        "contentUrl": `${dataMasterSEO.url}${data.uri_video}`, /* (Obligatoire) URL directe du fichier vidéo */

        ...(data.duration_video && { "duration": timeISO8601_Utils(data.duration_video) }), /* (Optionnel) mais recommandé. Durée de la video au format ISO 8601. 3 clés sont attendus : h, m et s, tous de type number */
    });

    return (
        JSON_LD
    )
}

export { videoObject_script_SEO };
