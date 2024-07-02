var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var birds = createBirds(10);
drawBirds();
function createBirds(_amount) {
    var birds = [];
    for (var i = 0; i < _amount; i++) {
        var bird = {
            x: Math.random() * 600,
            y: Math.random() * 600,
            size: Math.random() * 50 + 10,
            color: "blue"
        };
        birds.push(bird);
    }
    return birds;
}
function drawBird(_bird) {
    var path = new Path2D();
    path.rect(_bird.x, _bird.y, _bird.size, _bird.size);
    ctx.fillStyle = _bird.color;
    ctx.fill(path);
}
function drawBirds() {
    for (var i = 0; i < birds.length; i++) {
        var bird = birds[i];
        drawBird(bird);
    }
}
var speed = 1;
function updateBirds() {
    // for (let i: number= 0; i < birds.length; i++) {
    //     birds[i].x += speed;
    for (var _i = 0, birds_1 = birds; _i < birds_1.length; _i++) {
        var bird = birds_1[_i];
        bird.x += speed;
        if (bird.x > canvas.width) {
            bird.x = -bird.size;
        }
    }
}
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBirds();
    drawBirds();
    requestAnimationFrame(animationFrame);
}
requestAnimationFrame(animationFrame);
