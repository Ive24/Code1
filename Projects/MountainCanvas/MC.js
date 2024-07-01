var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(Math.random() * 0.5, "magenta");
gradient.addColorStop(Math.random() * 0.5, "blue");
gradient.addColorStop(Math.random() * 0.5, "red");
ctx.fillStyle = gradient;
var cloud1 = {
    name: "RoundCloud",
    positionX: Math.random() * 100,
    positionY: Math.random() * 120,
    color: "transparent",
};
var cloud2 = {
    name: "LongCloud",
    positionX: Math.random() * 350,
    positionY: Math.random() * 300,
    color: "transparent",
};
var cloud3 = {
    name: "TinyCloud",
    positionX: Math.random() * 590,
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
function drawMountain() {
    for (var m = 0; m < 5; m++) {
        var pathM = new Path2D;
        pathM.rect(Math.random() * 500, 0, Math.random() * 400, Math.random() * 200);
        ctx.fillStyle = "grey";
        ctx.fill(pathM);
    }
}
drawMountain();
drawBirds();
