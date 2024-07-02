function runLater () {
    console.log ("run me now!");
}

setTimeout(runLater, 1000); 

let runs: number = 0;
let intervalID: number = setInterval(runEverySecond, 40); 

function runEverySecond () {
    runs++;
    console.log("I'm running every second. This is run number", runs);
    if (runs >= 5)
        clearInterval(intervalID); 
}

