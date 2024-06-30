console.log("Sea Sight");

let i = 0;
let SeaWord = ["Fish", "Sea", "Ocean", "Shark", "Ship", "Pirate", "Salty", "Wave"];
let WordColor = ["blue", "green", "purple"];

for (i = 0; i < 15; i++){
    let newWord = document.createElement("span");

    let colorIndex = Math.floor(Math.random() * WordColor.length);
    let color = WordColor[colorIndex];
    newWord.style.color = color;
    console.log(color);
    let positionX = String(Math.floor(Math.random() * innerHeight)) + "px"; //px as unit for css
    let positionY = String(Math.floor(Math.random() * innerWidth)) + "px";
    newWord.style.position = "relative";
    newWord.style.top = positionX;
    newWord.style.left = positionY;
    newWord.addEventListener("click", hndClick);
    document.body.appendChild(newWord);
};

document.body.addEventListener("click", hndClick);
function hndClick(_event) {
    let target = _event.currentTarget;
    if (target == document.body)
        return;
    target.textContent = "Under the sea!";
    target.style.backgroundColor = "blue";
}; 