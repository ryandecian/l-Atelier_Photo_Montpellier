/* Import des modules CSS */
import style from "../../style.root.module.css";

/* Import des composants React */
import { useId } from "react";

/* Import des Types */
import type { Video_Element_Type } from "../../../types/elements/video.element.type";

/* Import des Utils */
import { pauseOtherVideos_Utils } from "../../../utils/pauseOtherVideos.utils";

function Video_Element({ title, src, poster, description }: Video_Element_Type) {
    const baseId = useId();

    return (
        <section className={style.ContainerVideo}>
            <h3 className={style.VideoTitle} id={`${baseId}-title`}>
                {title}
            </h3>

            <video
                className={style.VideoPlayer}
                src={src} /* chemin vers la vidéo à partir du dossier public. Ex : /videos/monfilm.mp4 */
                controls
                preload="none"
                controlsList="nodownload"
                onPlay={(e) => pauseOtherVideos_Utils(e.currentTarget)}
                onContextMenu={(e) => e.preventDefault()} /* Désactive le clic droit */
                poster={poster}
                playsInline
                aria-labelledby={`${baseId}-title`}
                aria-describedby={`${baseId}-desc`}
            />
            <p className={style.VideoDescription} id={`${baseId}-desc`}>
                {description}
            </p>
        </section>
    )
}

export { Video_Element };
