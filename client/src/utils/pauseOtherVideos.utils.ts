function pauseOtherVideos_Utils(currentVideo: HTMLVideoElement): void {
    const videos = document.querySelectorAll("video");

    for (const video of videos) {
        // Évite de pauser la vidéo qui vient de démarrer
        if (video !== currentVideo) {
            // On ne force la pause que si la vidéo est efectivement en lecture
            if (!video.paused) {
                video.pause();
            }
        }
    }
}

export { pauseOtherVideos_Utils };
