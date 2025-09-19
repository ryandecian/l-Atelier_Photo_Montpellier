/* Import des composants d'Avis clients */
import AvisClientPortraitCorporateControllerData from "../components/Public/PortraitCorporateRoot/AvisClientPortraitCorporateControllerData";
import AvisClientPortraitDuoControllerData from "../components/Public/PortraitDuoRoot/AvisClientPortraitDuoControllerData";
import AvisClientPortraitFamilleControllerData from "../components/Public/PortraitFamilleRoot/AvisClientPortraitFamilleControllerData";
import AvisClientPortraitGrossesseControllerData from "../components/Public/PortraitGrossesseRoot/AvisClientPortraitGrossesseControllerData";
import AvisClientPortraitHobbyControllerData from "../components/Public/PortraitHobbyRoot/AvisClientPortraitHobbyControllerData";
import AvisClientPortraitLifeStyleControllerData from "../components/Public/PortraitLifeStyleRoot/AvisClientPortraitLifeStyleControllerData";
import AvisClientPortraitMariageControllerData from "../components/Public/PortraitMariageRoot/AvisClientPortraitMariageControllerData";
import AvisClientPortraitSoloControllerData from "../components/Public/PortraitSoloRoot/AvisClientPortraitSoloControllerData";

/* Import des Types */
import { AvisClientSEO_Type } from "../types/seo/avisClientSEO.type";


/* Fusion de tous les avis */
const allAvis: AvisClientSEO_Type[] = [
    ...AvisClientPortraitCorporateControllerData,
    ...AvisClientPortraitDuoControllerData,
    ...AvisClientPortraitFamilleControllerData,
    ...AvisClientPortraitGrossesseControllerData,
    ...AvisClientPortraitHobbyControllerData,
    ...AvisClientPortraitLifeStyleControllerData,
    ...AvisClientPortraitMariageControllerData,
    ...AvisClientPortraitSoloControllerData
]

/* Trie les avis par date décroissante (plus récent en premier) */
const sortedAvis = allAvis
    .slice() /* sans argument permet de faire une copie superficielle (shallow copy) du tableau allAvis. */
    .sort((a, b) => {
        const dateA = new Date(a.date.split("/").reverse().join("-")); // "10/06/2025" => "2025-06-10"
        const dateB = new Date(b.date.split("/").reverse().join("-"));
        return dateB.getTime() - dateA.getTime();
    });

// Réassigne les ID de manière incrémentale à partir de 0
const avisClientGlobal_data_SEO: AvisClientSEO_Type[] = sortedAvis.map((avis, index) => ({
    ...avis,
    id: index,
}));

export { avisClientGlobal_data_SEO };
