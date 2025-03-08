import MentionsLegalesPC from "./MentionsLegalesPC/MentionsLegalesPC";
import MentionsLegalesMobile from "./MentionsLegalesMobile/MentionsLegalesMobile";

function MentionsLegalesRoot() {
    return (
        <>
            <MentionsLegalesMobile />
            <MentionsLegalesPC />
        </>
    );
}

export default MentionsLegalesRoot;