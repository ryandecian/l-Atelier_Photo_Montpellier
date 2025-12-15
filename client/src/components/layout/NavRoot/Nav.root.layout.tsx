/* Import des Components */
import NavMobile from "./NavMobile/NavMobile";
import NavPC from "./NavPC/NavPC";

/* Import des Hooks */
import useMediaQueriesWidth_rem from "../../../hook/useMediaQueriesWidth_rem.utils.hook";

function Nav_root_Layout() {
    const viewportWidth: number = useMediaQueriesWidth_rem();

    return (
        <>
            {/* MediaQuery maison 800px */}
            {viewportWidth < 50 && (
                <NavMobile />
            )}
            {/* MediaQuery maison 800px */}
            {viewportWidth >= 50 && (
                <NavPC />
            )}
        </>
    )
}

export default Nav_root_Layout;
