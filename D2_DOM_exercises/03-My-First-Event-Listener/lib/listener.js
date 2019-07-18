// TODO: React to a click on the button!
var button = document.querySelector("#clickme");
button.classList.add("disabled");
// className="disabled";
button.innerHTML = "Bingo";

button.addEventListener("click", playAudio);

function playAudio() {
    var audio = new Audio("sound.mp3");
    audio.play();
}