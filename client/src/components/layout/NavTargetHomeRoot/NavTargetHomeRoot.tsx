import NavTargetHomePC from "./NavTargetHomePC/NavTargetHomePC";
import NavTargetHomeMobile from "./NavTargetHomeMobile/NavTargetHomeMobile";
import useMediaQueriesWidth_rem from "../../../hook/useMediaQueriesWidth_rem.utils.hook";

function NavTargetHomeRoot() {
    const viewportWidth: number = useMediaQueriesWidth_rem();

    return (
        <>
            {/* MediaQuery maison 800px*/}
            {viewportWidth <= 50 && (
                <NavTargetHomeMobile />
            )}

            {/* MediaQuery maison 800px */}
            {viewportWidth > 50 && (
                <NavTargetHomePC />
            )}
        </>
    );
}

export default NavTargetHomeRoot;
