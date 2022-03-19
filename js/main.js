// create a module for our project
(() => {
    let audioEl = document.querySelector("audio"),
        trackThumbs = document.querySelectorAll(".track-ref");
    // buttons 
    playButton = document.getElementById("playButton"),
        pauseButton = document.getElementById("pauseButton"),
        rewindButton = document.getElementById("rewindButton");

    function loadTrack() {
        // create the path to the new audio source
        let currentTrack = `audio/${this.dataset.trackref}.mp3`;

        // load this new source into the audio element 
        audioEl.src = currentTrack;

        // play the new audio source
        audioEl.play();
        // debugger            
    }
    // it just plays the audio 
    function playTrack() { audioEl.play(); }

    function pauseTrack() { audioEl.pause(); }

    function rewindTrack() {
        audioEl.currentTime = 0;
        playTrack();
    }



    trackThumbs.forEach(thumb => thumb.addEventListener("click", loadTrack));

    playButton.addEventListener("click", playTrack);
    pauseButton.addEventListener("click", pauseTrack);
    rewindButton.addEventListener("click", rewindTrack);


})()