var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
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
function rotateClouds(clouds) {
    for (var i = 0; i < 10; i++) {
        ctx.translate(clouds.x, clouds.y);
        ctx.rotate(Math.PI / 2);
        ctx.translate(-clouds.x, -clouds.y);
        drawCloud(clouds);
    }
}
rotateClouds();
