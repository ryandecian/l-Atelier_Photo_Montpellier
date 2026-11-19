/* Import des Components de Data */
import { portraitCorporate_data_SEO } from "./portraitCorporate.data.seo";

/* Import des JSON_LD */
import { Breadcrumb_script_SEO } from "../../script-json-ld/json-ld-breadcrumb/Breadcrumb.script.seo";
import { LocalBusiness_script_SEO } from "../../json-ld-localbusiness/LocalBusiness.script.seo";
import { MetaName_script_SEO } from "../../script-meta-name/MetaName.script.seo";
import { Service_script_SEO } from "../../script-json-ld/json-ld-service/service.script.seo";


function PortraitCorporate_root_SEO() {
    const dataSEO = portraitCorporate_data_SEO();
    return (
        <>
            <LocalBusiness_script_SEO />
            <Service_script_SEO data={dataSEO.service_data_SEO} />
            <Breadcrumb_script_SEO data={dataSEO.breadcrumb_data_SEO} />
            <MetaName_script_SEO data={dataSEO.metaName_data_SEO} />
        </>
    )
}

export default PortraitCorporate_root_SEO;
