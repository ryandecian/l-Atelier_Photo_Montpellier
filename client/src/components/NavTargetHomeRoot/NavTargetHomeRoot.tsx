import NavTargetHomePC from "./NavTargetHomePC/NavTargetHomePC";
import NavTargetHomeMobile from "./NavTargetHomeMobile/NavTargetHomeMobile";
import useMediaQueriesWidth from "../../hook/mediaQueriesWidth.utils.hook";

function NavTargetHomeRoot() {
    const viewportWidth: number = useMediaQueriesWidth();

    return (
        <>
            {/* MediaQuery maison */}
            {viewportWidth <= 800 && (
                <NavTargetHomeMobile />
            )}

            {/* MediaQuery maison */}
            {viewportWidth > 800 && (
                <NavTargetHomePC />
            )}
        </>
    );
}

export default NavTargetHomeRoot;
