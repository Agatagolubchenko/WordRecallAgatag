let selectedLanguage = "";
let audioPlayed = false;
let audioFiles = {
    "English": "audio/English.mp3", 
    "Chinese": "audio/Chinese.mp3",
    "Russian": "audio/Russian.mp3",
    "Vietnamese": "audio/Vietnamese.mp3"
};

function startGame() {
    selectedLanguage = document.getElementById("language-select").value;
    document.getElementById("title-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    
    let audioPlayer = document.getElementById("audio-player");
    audioPlayer.src = audioFiles[selectedLanguage];
    audioPlayer.load();
    audioPlayer.play();

    // Disable ability to replay audio
    audioPlayer.onended = function() {
        audioPlayer.controls = false;
        audioPlayer.pause();
        audioPlayed = true;
        enableInputs();
    };

    // Prevent replaying the audio
    audioPlayer.onplay = function() {
        if (audioPlayed) {
            audioPlayer.pause();
        }
        audioPlayed = true;
    };
}

function enableInputs() {
    let inputs = document.querySelectorAll(".word-box");
    inputs.forEach(input => input.disabled = false);
    document.getElementById("submit-button").disabled = false;
}

function submitWords() {
    alert("Please take a screenshot of your answers before closing this page.");
}
