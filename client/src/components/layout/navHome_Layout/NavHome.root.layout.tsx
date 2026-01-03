/* Import des Components */
import { NavHomeMobile_Layout } from "./nav-home-mobile/NavHomeMobile.layout";
import { NavHomePC_Layout } from "./nav-home-pc/NavHomePC.layout";

/* Import des Hooks */
import useMediaQueriesWidth_rem from "../../../hook/useMediaQueriesWidth_rem.utils.hook";

function NavHome_root_Layout() {
    const viewportWidth: number = useMediaQueriesWidth_rem();

    return (
        <>
            {/* MediaQuery maison 800px */}
            {viewportWidth < 50 && (
                <NavHomeMobile_Layout />
            )}
            {/* MediaQuery maison 800px */}
            {viewportWidth >= 50 && (
                <NavHomePC_Layout />
            )}
        </>
    )
}

export default NavHome_root_Layout;
