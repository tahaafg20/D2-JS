// TODO: write your code here
document.addEventListener("keyup", event => {
    if (event.keyCode === 80) {
        // var playerA = document.querySelector("#player1_race")
        var currentPlaceA = document.querySelector("#player1_race td.active");
        var nextPlaceA = currentPlaceA.nextElementSibling
        currentPlaceA.classList.remove("active");
        nextPlaceA.classList.add("active");
    } else if (event.keyCode === 81) {
        // var playerB = document.querySelector("#player2_race")
        var currentPlaceB = document.querySelector("#player2_race td.active");
        var nextPlaceB = currentPlaceB.nextElementSibling
        currentPlaceB.classList.remove("active");
        nextPlaceB.classList.add("active");
    }
});