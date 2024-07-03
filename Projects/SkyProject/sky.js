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
var speed = 1;
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
    updateClouds();
    drawClouds();
    requestAnimationFrame(animationFrame);
}
requestAnimationFrame(animationFrame);
// function rotateClouds (clouds: Cloud): void {
//     for (let i: number = 0; i < 10; i++) {
//         ctx.save();
//         ctx.translate(clouds.x, clouds.y);
//         ctx.rotate(20*Math.PI / 45);
//         ctx.translate(-clouds.x, -clouds.y);
//         ctx.restore(); 
// }
// }
