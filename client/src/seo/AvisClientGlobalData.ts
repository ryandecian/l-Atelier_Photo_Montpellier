/* Import des composants d'avis clients */
import AvisClientPortraitCorporateControllerData from "../components/PortraitCorporateRoot/AvisClientPortraitCorporateControllerData";
import AvisClientPortraitDuoControllerData from "../components/PortraitDuoRoot/AvisClientPortraitDuoControllerData";
import AvisClientPortraitFamilleControllerData from "../components/PortraitFamilleRoot/AvisClientPortraitFamilleControllerData";
import AvisClientPortraitGrossesseControllerData from "../components/PortraitGrossesseRoot/AvisClientPortraitGrossesseControllerData";
import AvisClientPortraitHobbyControllerData from "../components/PortraitHobbyRoot/AvisClientPortraitHobbyControllerData";
import AvisClientPortraitLifeStyleControllerData from "../components/Public/PortraitLifeStyleRoot/AvisClientPortraitLifeStyleControllerData";
import AvisClientPortraitMariageControllerData from "../components/Public/PortraitMariageRoot/AvisClientPortraitMariageControllerData";
import AvisClientPortraitSoloControllerData from "../components/Public/PortraitSoloRoot/AvisClientPortraitSoloControllerData";

/* import des types pour les avis clients */
import AvisClientControllerDataType from "../types/AvisClientControllerData.type";


/* Fusion de tous les avis */
const allAvis: AvisClientControllerDataType[] = [
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
const AvisClientGlobalData: AvisClientControllerDataType[] = sortedAvis.map((avis, index) => ({
    ...avis,
    id: index,
}));

export default AvisClientGlobalData;
