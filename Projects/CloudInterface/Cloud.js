var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(Math.random() * 1, "magenta");
gradient.addColorStop(Math.random() * 0.5, "blue");
gradient.addColorStop(Math.random() * 1.5, "red");
ctx.fillStyle = gradient;
var cloud1 = {
    name: "RoundCloud",
    positionX: 100,
    positionY: 120,
    color: "white",
};
var cloud2 = {
    name: "LongCloud",
    positionX: 250,
    positionY: 300,
    color: "white",
};
var cloud3 = {
    name: "TinyCloud",
    positionX: 390,
    positionY: 400,
    color: "white",
};
var clouds = [cloud1, cloud2, cloud3];
function drawCloud() {
    for (var i = 0; i < clouds.length; i++) {
        var path = new Path2D;
        path.ellipse(clouds[i].positionX, clouds[i].positionY, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
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
drawCloud();
