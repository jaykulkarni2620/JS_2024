const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");


let isPlaying = false;


song.onloadedmetadata = function () {
   Progress.max = song.duration;
   progress.value = song.currentTime;
};

function playPause() {
    //if the song is not playing then execute this code
    if (!isPlaying) {
        song.play();
        isPlaying = true;
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        //if it is true then execute this code
        song.pause();
        isPlaying = false;
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

if (song.play()) {
    setInterval( ()=> {
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function() {
    song.pause();
    // update the progress
    song.currentTime = progress.value
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    
    
}

song.onerror = function() {
    console.error("Error loading the song");
};