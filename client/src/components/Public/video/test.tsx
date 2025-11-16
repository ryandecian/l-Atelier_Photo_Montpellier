/* Import des modules CSS */
import css from "./video.module.css";
import style from "../../StyleRootComponent.module.css";

/* Import des hooks React */
import { useState } from "react";

function Video_Root() {
    const [quality, setQuality] = useState<"FHD" | "4K">("FHD");

    const videoSources = {
        FHD: "/videos/video-trek-desert-maroc-FHD.mp4",
        "4K": "/videos/video-trek-desert-maroc-4K.mp4"
    };

    return (
        <section className={style.ContainerRootRacine}>
            <header className={style.ContainerTitle}>
                <h1 className={css.TitleH1}>Vidéo</h1>
            </header>

            <section className={css.QualitySelector}>
                <label htmlFor="quality-select" className={css.Label}>
                    Qualité :
                </label>
                <select
                    id="quality-select"
                    className={css.Select}
                    value={quality}
                    onChange={(e) => setQuality(e.target.value as "FHD" | "4K")}
                >
                    <option value="FHD">FHD 1080p</option>
                    <option value="4K">4K UHD</option>
                </select>
            </section>

            <section className={css.ContainerVideo}>
                <video
                    key={quality}  /* indispensable pour recharger la source */
                    className={css.VideoPlayer}
                    src={videoSources[quality]}
                    controls
                    preload="none"
                    poster="/images/posters/video-trek-desert-maroc.webp"
                    playsInline
                />
            </section>
        </section>
    );
}

export default Video_Root;
