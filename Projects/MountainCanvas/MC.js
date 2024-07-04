var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
function drawMountain() {
    var grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(Math.random(), "grey");
    grad.addColorStop(Math.random(), "black");
    grad.addColorStop(Math.random(), "white");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(400, 800); //start-point
    ctx.lineTo(410, 750);
    ctx.lineTo(420, 780);
    ctx.lineTo(430, 750);
    ctx.lineTo(460, 680);
    ctx.lineTo(480, 600);
    ctx.lineTo(500, 650);
    ctx.lineTo(600, 550);
    ctx.lineTo(620, 600);
    ctx.lineTo(650, 500);
    ctx.lineTo(700, 400);
    ctx.lineTo(750, 580);
    ctx.lineTo(780, 520);
    ctx.lineTo(800, 800); //end-point 
    var img = new Image();
    img.src = "Stone2.jpg";
    img.onload = function () {
        var pattern = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pattern;
        ctx.fill();
    };
}
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
drawMountain();
drawBird();
var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
var clouds = createClouds(5);
drawClouds();
function createClouds(_amount) {
    var clouds = [];
    for (var i = 0; i < _amount; i++) {
        var cloud = {
            x: Math.random() * 600,
            y: Math.random() * 600,
            scalex: 50 + Math.random() * 250,
            scaley: Math.random() * 80,
            color: "white",
        };
        clouds.push(cloud);
        console.log(clouds);
    }
    return clouds;
}
function drawCloud(_cloud) {
    var path = new Path2D();
    path.roundRect(_cloud.x, _cloud.y, _cloud.scalex, _cloud.scaley, [40]);
    ctx.fillStyle = _cloud.color;
    ctx.fill(path);
}
function drawClouds() {
    for (var i = 0; i < clouds.length; i++) {
        var cloud = clouds[i];
        drawCloud(cloud);
    }
}
// const speedBird: number = 0.001;
// function updateBird () {
//     for (let m: number = 0; m < birds.length; m++) {
//     clouds[m].x += speedBird;
// }
// }
var speed = 0.5;
function updateClouds() {
    for (var _i = 0, clouds_1 = clouds; _i < clouds_1.length; _i++) {
        var cloud = clouds_1[_i];
        cloud.x += speed;
        if (cloud.x > canvas.width) {
            cloud.x = -cloud.scalex;
        }
    }
}
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
    updateClouds();
    drawClouds();
    // updateBird();
    // drawBird();
    requestAnimationFrame(animationFrame);
}
requestAnimationFrame(animationFrame);
