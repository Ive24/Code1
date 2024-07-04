const canvas: HTMLCanvasElement = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

  canvas.addEventListener("click", (event) => {
      let rect = canvas.getBoundingClientRect();
      let scaleX = canvas.width / rect.width;
      let scaleY = canvas.height / rect.height;

      let PosX = (event.clientX - rect.left) * scaleX;
      let PosY = (event.clientY - rect.top) * scaleY;

      let shapeType = Math.random() < 0.5 ? "circle": "square";
      shapes.push({ x: PosX, y: PosY, type: shapeType });
})


interface Shape {
    x: number,
    y: number,
    type: string,
}

let shapes: Shape [] = [];

let speed: number = 0.5;


function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let shape of shapes) {
        shape.y += speed;
        if (shape.y > canvas.height){
            shape.y > canvas.height;
        }
    }

    shapes.forEach((shape) => {

        if (shape.type === "circle") {
            ctx.beginPath();
            ctx.arc(shape.x, shape.y, 20, 0, 2 * Math.PI);
            ctx.fillStyle = "darkgreen";
            ctx.fill();
        } else if (shape.type === "square") {
            ctx.fillStyle = "lightblue";
            ctx.fillRect(shape.x - 20, shape.y - 20, 40, 40);
        }
    });

    requestAnimationFrame(drawShapes); // Animationsschleife für kontinuierliche Bewegung
}

drawShapes();
