/* Import des Components de Data */
import { video_data_SEO } from "./video.data.seo";

/* Import des JSON_LD */
import { Breadcrumb_script_SEO } from "../../script-json-ld/json-ld-breadcrumb/Breadcrumb.script.seo";
import { LocalBusiness_script_SEO } from "../../json-ld-localbusiness/LocalBusiness.script.seo";
import { MetaName_script_SEO } from "../../script-meta-name/MetaName.script.seo";
import { VideoObject_script_SEO } from "../../script-json-ld/json-ld-videoObject/VideoObject.script.seo";


function Video_root_SEO() {
    const dataSEO = video_data_SEO();
    return (
        <>
            <LocalBusiness_script_SEO />
            <VideoObject_script_SEO data={dataSEO.videoObject_data_SEO[0]} />
            <VideoObject_script_SEO data={dataSEO.videoObject_data_SEO[1]} />
            <VideoObject_script_SEO data={dataSEO.videoObject_data_SEO[2]} />
            <VideoObject_script_SEO data={dataSEO.videoObject_data_SEO[3]} />
            <Breadcrumb_script_SEO data={dataSEO.breadcrumb_data_SEO} />
            <MetaName_script_SEO data={dataSEO.metaName_data_SEO} />
        </>
    )
}

export default Video_root_SEO;
