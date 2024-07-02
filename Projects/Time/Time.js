function runLater() {
    console.log("run me now!");
}
setTimeout(runLater, 1000);
var runs = 0;
var intervalID = setInterval(runEverySecond, 40);
function runEverySecond() {
    runs++;
    console.log("I'm running every second. This is run number", runs);
    if (runs >= 5)
        clearInterval(intervalID);
}
function frame() {
    console.log("every frame");
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
