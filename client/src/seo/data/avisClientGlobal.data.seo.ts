/* Import des composants d'Avis clients */
import { avisClientPortraitCorporate_Data } from "../../components/public/portrait-corporate/avisClientPortraitCorporate.data";
import { avisClientPortraitDuo_Data } from "../../components/public/portrait-duo/avisClientPortraitDuo.data";
import { avisClientPortraitFamille_Data } from "../../components/public/portrait-famille/avisClientPortraitFamille.data";
import { avisClientPortraitGrossesse_Data } from "../../components/public/portrait-grossesse/avisClientPortraitGrossesse.data";
import { avisClientPortraitHobby_Data } from "../../components/public/portrait-hobby/avisClientPortraitHobby.data";
import { avisClientPortraitLifeStyle_Data } from "../../components/public/portrait-lifestyle/avisClientPortraitLifeStyle.data";
import { avisClientPortraitMariage_Data} from "../../components/public/portrait-mariage/avisClientPortraitMariage.data";
import { avisClientPortraitSolo_Data } from "../../components/public/portrait-solo/avisClientPortraitSolo.data";
import { avisClientHome_Data } from "../../components/public/home/avisClientHome.data";

/* Import des Types */
import { AvisClientSEO_Type } from "./avisClientSEO.type";


/* Fusion de tous les avis */
const allAvis: AvisClientSEO_Type[] = [
    ...avisClientPortraitCorporate_Data,
    ...avisClientPortraitDuo_Data,
    ...avisClientPortraitFamille_Data,
    ...avisClientPortraitGrossesse_Data,
    ...avisClientPortraitHobby_Data,
    ...avisClientPortraitLifeStyle_Data,
    ...avisClientPortraitMariage_Data,
    ...avisClientPortraitSolo_Data,
    ...avisClientHome_Data
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
