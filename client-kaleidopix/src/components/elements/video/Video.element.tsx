

function Video_Element() {
    return (
        <section className={style.ContainerVideo}>
            <h3 className={style.VideoTitle}>Aventure saharienne - Immersion dans le désert avec Mélodie du Désert</h3>
            <video
                className={style.VideoPlayer}
                src="/video/video-trek-desert-maroc/video-trek-desert-maroc.mp4"
                controls
                preload="none"
                controlsList="nodownload"
                onPlay={(e) => pauseOtherVideos_Utils(e.currentTarget)}
                onContextMenu={(e) => e.preventDefault()} /* Désactive le clic droit */
                poster="/video/video-trek-desert-maroc/video-trek-desert-maroc.jpg"
                playsInline
            />
            <p className={style.VideoDescription}>
                Une courte vidéo présentant l’ambiance du trek dans les dunes marocaines.
            </p>
        </section>
    )
}

export { Video_Element };
