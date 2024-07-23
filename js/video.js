class Video {
    constructor() {
        this.loadVideo();
    }

    loadVideo() {
        const video = document.querySelectorAll("#video > video");
        console.log(video);
    }
}

export default Video;