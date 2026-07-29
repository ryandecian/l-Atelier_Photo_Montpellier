/* Import des Components de Data */
import { home_data_SEO } from "./home.data.seo";

/* Import des JSON_LD */
import { Breadcrumb_script_SEO } from "../../json-ld-breadcrumb/Breadcrumb.script.seo";
import { HomePage_script_SEO } from "../../script-json-ld/json-ld-homePage/homePage.script.seo";
import { LocalBusiness_script_SEO } from "../../json-ld-localbusiness/localBusiness.script.seo";

function Home_root_SEO() {
    const dataSEO = home_data_SEO();
    return (
        <>
            <LocalBusiness_script_SEO />
            <HomePage_script_SEO data={dataSEO.homePage_data_SEO} />
            <Breadcrumb_script_SEO data={dataSEO.breadcrumb_data_SEO} />
        </>
    )
}

export default Home_root_SEO;
