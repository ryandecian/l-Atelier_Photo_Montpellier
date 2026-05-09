/* Import des Components de Data */
import { dataMasterSEO_data_SEO } from "../data/dataMasterSEO.data.seo";

/* Import des Types */
import { DataMasterSEO_Type } from "../data/dataMasterSEO.type";

type Data = {
    "position": number, /*  */
    "name_Breadcrumb": string, /*  */
    "uri": string, /*  */
    "id": string,
}

function service_script_SEO(data: Data): string {}

export { service_script_SEO };
/**
 * Documentation :
 * 
 * Ce composant réutilisable à pour objectif de générer un script JSON-LD pour présenter un service présent dans une page. 
 * Il retourne actuellement une string grace à la fonction JSON.stringify, car lors de son injection dans une page, les 
 * datas SEO de la page sont utilisées pour construire le JSON-LD doivent être une string. 
 */
