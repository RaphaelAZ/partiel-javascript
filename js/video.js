class Video {
    constructor() {
        this.loadVideo();
    }

    loadVideo() {
        const video = document.querySelectorAll("#video > video");
        const button = document.querySelector("#video > .video-overlay > #video-play");
        button.addEventListener("click", () => {
            if(video[0].paused) {
                video[0].play();
                button.innerHTML = "<i class='fa-solid fa-pause'></i>";
            } else {
                video[0].pause();
                button.innerHTML = "<i class='fa-solid fa-play'></i>";
            }
        });

        const restartButton = document.querySelector("#video > .video-overlay > #video-reset");

        restartButton.addEventListener("click", () => {
            video[0].currentTime = 0;
            video[0].pause();
            button.innerHTML = "<i class='fa-solid fa-play'></i>";
        });
    }
}

export default Video;