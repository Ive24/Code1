var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(Math.random() * 0.5, "magenta");
gradient.addColorStop(Math.random() * 0.5, "blue");
gradient.addColorStop(Math.random() * 0.5, "white");
ctx.fillStyle = gradient;
var cloud1 = {
    name: "RoundCloud",
    positionX: Math.random() * 500,
    positionY: Math.random() * 120,
    color: "transparent",
};
var cloud2 = {
    name: "LongCloud",
    positionX: Math.random() * 150,
    positionY: Math.random() * 500,
    color: "transparent",
};
var cloud3 = {
    name: "TinyCloud",
    positionX: Math.random() * 790,
    positionY: Math.random() * 400,
    color: "transparent",
};
var clouds = [cloud1, cloud2, cloud3];
function drawClouds() {
    for (var i = 0; i < clouds.length; i++) {
        var path = new Path2D;
        path.ellipse(clouds[i].positionX * Math.random(), clouds[i].positionY * Math.random(), 50, 75, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fillStyle = clouds[i].color;
        ctx.fill(path);
        for (var c = 0; c < 10; c++) {
            var path2 = new Path2D;
            path2.ellipse((clouds[i].positionX + Math.random() * 50 - Math.random() * 50), (clouds[i].positionY + Math.random() * 50 - Math.random() * 50), 50, 75, Math.PI / 4, 0, 2 * Math.PI);
            ctx.fillStyle = gradient;
            ctx.fill(path2);
        }
    }
}
drawClouds();
var Bird1 = {
    color: "grey",
    positionX: 400,
    positionY: 200,
};
var Bird2 = {
    color: "darkgrey",
    positionX: 500,
    positionY: 150,
};
var Bird3 = {
    color: "grey",
    positionX: 60,
    positionY: 300,
};
var birds = [Bird1, Bird2, Bird3];
function drawBird() {
    for (var m = 0; m < birds.length; m++) {
        var pathM = new Path2D;
        pathM.moveTo(birds[m].positionX * Math.random(), birds[m].positionY * Math.random());
        pathM.bezierCurveTo(210, 250, 200, 100, 350, 400);
        ctx.strokeStyle = "green";
        ctx.stroke(pathM);
        ctx.fillStyle = "black";
        ctx.fill(pathM);
    }
}
drawBird();
drawMountain();
var grad = ctx.createLinearGradient(0, 0, 0, 130);
grad.addColorStop(0, "grey");
grad.addColorStop(1, "blue");
ctx.fillStyle = "grad";
function drawMountain() {
    var grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(Math.random() * 0.5, "grey");
    grad.addColorStop(Math.random() * 0.5, "black");
    grad.addColorStop(Math.random() * 0.5, "white");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(800, 300);
    ctx.lineTo(800, 800);
    ctx.lineTo(300, 800);
    ctx.lineTo(800, 300);
    ctx.fillStyle = "grad";
    ctx.fill();
}
