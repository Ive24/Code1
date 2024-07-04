var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.addEventListener("click", function (event) {
    var rect = canvas.getBoundingClientRect();
    var scaleX = canvas.width / rect.width;
    var scaleY = canvas.height / rect.height;
    var PosX = (event.clientX - rect.left) * scaleX;
    var PosY = (event.clientY - rect.top) * scaleY;
    var shapeType = Math.random() < 0.5 ? "circle" : "square";
    shapes.push({ x: PosX, y: PosY, type: shapeType });
});
var shapes = [];
var speed = 0.5;
function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
        var shape = shapes_1[_i];
        shape.y += speed;
        if (shape.y > canvas.height) {
            shape.y > canvas.height;
        }
    }
    shapes.forEach(function (shape) {
        if (shape.type === "circle") {
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, 20, 0, 2 * Math.PI);
            ctx.fillStyle = "darkgreen";
            ctx.fill();
        }
        else if (shape.type === "square") {
            ctx.fillStyle = "lightblue";
            ctx.fillRect(shape.x - 20, shape.y - 20, 40, 40);
        }
    });
    requestAnimationFrame(drawShapes); // Animationsschleife für kontinuierliche Bewegung
}
drawShapes();
