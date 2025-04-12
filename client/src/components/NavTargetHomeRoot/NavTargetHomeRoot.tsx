import NavTargetHomePC from "./NavTargetHomePC/NavTargetHomePC";
import NavTargetHomeMobile from "./NavTargetHomeMobile/NavTargetHomeMobile";

function NavTargetHomeRoot() {
    return (
        <>
            <NavTargetHomeMobile />
            <NavTargetHomePC />
        </>
    );
}

export default NavTargetHomeRoot;
