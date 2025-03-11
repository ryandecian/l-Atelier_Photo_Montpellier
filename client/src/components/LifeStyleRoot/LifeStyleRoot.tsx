import LifeStylePC from "./LifeStylePC/LifeStylePC";
import LifeStyleMobile from "./LifeStyleMobile/LifeStyleMobile";

function LifeStyleRoot() {
    return (
        <>
            <LifeStyleMobile />
            <LifeStylePC />
        </>
    );
}

export default LifeStyleRoot;
