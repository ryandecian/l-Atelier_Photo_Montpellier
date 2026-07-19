/* Import des Components */
import { FooterMobile_Layout } from "./footer-mobile/FooterMobile.layout";
import { FooterPC_Layout } from "./footer-pc/FooterPC.layout";

/* Import des Hooks */
import { useMediaQueriesWidth_rem_Hook } from "../../../hook/useMediaQueriesWidth_rem.hook";

function Footer_root_layout() {
    const viewportWidth: number = useMediaQueriesWidth_rem_Hook();

    return (
        <>
            {/* MediaQuery maison 800px */}
            {viewportWidth < 50 && (
                <FooterMobile_Layout />
            )}
            {/* MediaQuery maison 800px */}
            {viewportWidth >= 50 && (
                <FooterPC_Layout />
            )}
        </>
    )
}

export default Footer_root_layout;
