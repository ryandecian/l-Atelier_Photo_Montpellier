import HomePC from "./HomePC/HomePC";
import HomeMobile from "./HomeMobile/HomeMobile";

function HomeRoot() {
    return (
        <>
            <HomeMobile />
            <HomePC />
        </>
    );
}

export default HomeRoot;