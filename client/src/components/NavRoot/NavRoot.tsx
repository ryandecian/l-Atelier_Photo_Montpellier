import NavMobile from "./NavMobile/NavMobile";
import NavPC from "./NavPC/NavPC";
import useMediaQueriesWidth from "../../hook/mediaQueriesWidth.utils";

function NavRoot() {
    const viewportWidth: number = useMediaQueriesWidth();

    return (
        <>
            {/* MediaQuery maison */}
            {viewportWidth < 800 && (
                <NavMobile />
            )}
            {/* MediaQuery maison */}
            {viewportWidth >= 800 && (
                <NavPC />
            )}
        </>
    )
}

export default NavRoot;