console.log("Sea Sight");
var i = 0;
var SeaWord = ["Fish", "Sea", "Ocean", "Shark", "Ship", "Pirate", "Salty", "Wave"];
var WordColor = ["blue", "green", "purple"];
for (i = 0; i < 15; i++) {
    var newWord = document.createElement("span");
    var colorIndex = Math.floor(Math.random() * WordColor.length);
    var color = WordColor[colorIndex];
    newWord.style.color = color;
    console.log(color);
    var positionX = String(Math.floor(Math.random() * innerHeight)) + "px"; //px as unit for css
    var positionY = String(Math.floor(Math.random() * innerWidth)) + "px";
    newWord.style.position = "relative";
    newWord.style.top = positionX;
    newWord.style.left = positionY;
    newWord.addEventListener("click", hndClick);
    document.body.appendChild(newWord);
}
;
document.body.addEventListener("click", hndClick);
function hndClick(_event) {
    var target = _event.currentTarget;
    if (target == document.body)
        return;
    target.textContent = "Under the sea!";
    target.style.backgroundColor = "blue";
}
;
