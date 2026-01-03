/* Import des Components */
import { NavMobile_Layout } from "./nav-mobile/NavMobile.layout";
import { NavPC_Layout } from "./nav-pc/NavPC.layout";

/* Import des Hooks */
import useMediaQueriesWidth_rem from "../../../hook/useMediaQueriesWidth_rem.utils.hook";

function Nav_root_Layout() {
    const viewportWidth: number = useMediaQueriesWidth_rem();

    return (
        <>
            {/* MediaQuery maison 800px */}
            {viewportWidth < 50 && (
                <NavMobile_Layout />
            )}
            {/* MediaQuery maison 800px */}
            {viewportWidth >= 50 && (
                <NavPC_Layout />
            )}
        </>
    )
}

export default Nav_root_Layout;
