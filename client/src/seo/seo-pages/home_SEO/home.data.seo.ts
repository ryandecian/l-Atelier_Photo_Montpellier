/* Import des composants Router */

/* Import des Types */
import type { HomePage_script_Type } from "../../script-json-ld/json-ld-homePage/homePage.script.type";

function home_data_SEO() {
    const dataSEOGlobal = {}

    const homePage_data_SEO: HomePage_script_Type = {
        description: "",
        id: "",
        name_page: "",
        uri_page: "",
    }

    const dataSEO = {
        homePage_data_SEO: homePage_data_SEO,
    }

    return (
        dataSEO
    )
}

export { home_data_SEO };
