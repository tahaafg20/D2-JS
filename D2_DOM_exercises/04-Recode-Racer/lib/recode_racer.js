// TODO: write your code here
document.addEventListener("keyup", event => {
    var firstPlace = document.querySelectorAll("tr td:first-child");
    if (event.keyCode === 80) {
        // var playerA = document.querySelector("#player1_race")
        var currentPlaceA = document.querySelector("#player1_race td.active");
        var nextPlaceA = currentPlaceA.nextElementSibling;
        if (currentPlaceA.classList.contains("finish")){
            var finalB = document.querySelector("#player2_race td.active");
            currentPlaceA.classList.remove("active");
            finalB.classList.remove("active");
            alert("PLAYER A WON! (RED BUS)");
            firstPlace.forEach(function (playerFirstPlace){
                playerFirstPlace.classList.add("active");
                // currentPlaceB.classList.remove("active")
            });
        } else {
        currentPlaceA.classList.remove("active");
        nextPlaceA.classList.add("active");
        }

    } else if (event.keyCode === 81) {
        // var playerB = document.querySelector("#player2_race")
        var currentPlaceB = document.querySelector("#player2_race td.active");
        var nextPlaceB = currentPlaceB.nextElementSibling
        if (currentPlaceB.classList.contains("finish")){
            var finalA = document.querySelector("#player1_race td.active");
            currentPlaceB.classList.remove("active");
            alert("PLAYER B WON! (BLUE BUS)");
            finalA.classList.remove("active");
            firstPlace.forEach(function (playerFirstPlace){
                // currentPlaceA.classList.remove("active")
                playerFirstPlace.classList.add("active");
            });
        } else {
        currentPlaceB.classList.remove("active");
        nextPlaceB.classList.add("active");
        }
    }
});