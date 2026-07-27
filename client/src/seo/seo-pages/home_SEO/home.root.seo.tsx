/* Import des JSON_LD */
// import { homePage_script_SEO } from "../../script-json-ld/json-ld-homePage/homePage.script.seo";
import { LocalBusiness_script_SEO } from "../../json-ld-localbusiness/localBusiness.script.seo";

function Home_root_SEO() {
    return (
        <>
            <LocalBusiness_script_SEO />
        </>
    )
}

export default Home_root_SEO;
