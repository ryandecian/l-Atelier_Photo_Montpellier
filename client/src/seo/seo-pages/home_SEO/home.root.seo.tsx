/* Import des Components de Data */
import { home_data_SEO } from "./home.data.seo";

/* Import des JSON_LD */
import { HomePage_script_SEO } from "../../script-json-ld/json-ld-homePage/homePage.script.seo";
import { LocalBusiness_script_SEO } from "../../json-ld-localbusiness/localBusiness.script.seo";

function Home_root_SEO() {
    return (
        <>
            <LocalBusiness_script_SEO />
            <HomePage_script_SEO data={home_data_SEO.homePage_data_SEO} />
        </>
    )
}

export default Home_root_SEO;
