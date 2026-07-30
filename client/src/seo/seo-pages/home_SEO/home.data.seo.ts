/* Import des composants Datas */
import { registreBreadcrumb_data_SEO } from "../../data/registreBreadcrumb.data.seo";
/* Import des composants Router */

/* Import des Types */
import type { HomePage_script_Type } from "../../script-json-ld/json-ld-homePage/homePage.script.type";


/* Attention, chaque données à exploiter ne doit être déclarée qu'une seul fois ! */
function home_data_SEO() {
    const breadcrumb_data_SEO = registreBreadcrumb_data_SEO("home").dataBreadcrumb;

    const homePage_data_SEO: HomePage_script_Type = {
        description: "Anne Saunier, photographe professionnelle de mariage et portrait à Montpellier, vous accueille à L'Atelier Photo Montpellier (LAPM).",
        id: "lapm",
        name_page: registreBreadcrumb_data_SEO("home").dataItems.name_page,
        uri_page: registreBreadcrumb_data_SEO("home").dataItems.uri_page,
    }


    const dataSEO = {
        homePage_data_SEO: homePage_data_SEO,
        breadcrumb_data_SEO: breadcrumb_data_SEO,
    }

    return (
        dataSEO
    )
}

export { home_data_SEO };
