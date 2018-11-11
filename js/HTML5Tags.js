
var audio = document.getElementById("audio");
function setupSeek() {
    var seek = document.getElementById("audioSeek");
    seek.min = 0;
    seek.max = Math.round(audio.duration);
    seek.value = 0;
    var duration = document.getElementById("duration");
    duration.innerHTML = "0/" + Math.round(audio.duration);
    }
    function togglePlay() {
        if (audio.paused || audio.ended) {
        audio.play();
        }
        else {
        audio.pause();
        }
        }
        function updatePlayPause() {
            var play = document.getElementById("play");
            if (audio.paused || audio.ended) {
            play.value = "Play";
            }
            else {
            play.value = "Pause";
            }
            }
            function endAudio() {
                document.getElementById("play").value = "Play";
                document.getElementById("audioSeek").value = 0;
                document.getElementById("duration").innerHTML = "0/" + Math.round
                (audio.duration);
                }
                // Wire-up the event handlers
audio.addEventListener("durationchange", setupSeek, false);
document.getElementById("play").addEventListener("click", togglePlay, false);
audio.addEventListener("play", updatePlayPause, false);
audio.addEventListener("pause", updatePlayPause, false);
audio.addEventListener("ended", endAudio, false);
function toggleMute() {
    audio.muted = !audio.muted;
    }
    function updateMute() {
        var mute = document.getElementById("mute");
        if (audio.muted) {
        mute.value = "Unmute";
        }
        else {
        mute.value = "Mute";
        }
        }
        function setVolume() {
            var volume = document.getElementById("volume");
            audio.volume = volume.value;
            }
            document.getElementById("mute").addEventListener("click",
toggleMute, false);
audio.addEventListener("volumechange", updateMute, false);
document.getElementById("volume").addEventListener("change",
setVolume, false);