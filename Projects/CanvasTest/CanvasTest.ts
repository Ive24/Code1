const canvas: HTMLCanvasElement = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//draw a grey rectangle 
ctx.fillStyle = "grey";
ctx.fillRect(20, 20, 150, 100);
ctx.fill(); 

// draw a green line
ctx.strokeStyle = "green";
ctx.lineWidth = 3;

ctx.beginPath();
ctx.moveTo(70, 195);
ctx.lineTo(50, 85);

ctx.stroke();

// draw a purple line
ctx.beginPath();
ctx.strokeStyle = "purple";
ctx.moveTo(20, 300);
ctx.lineTo(80, 20);

ctx.stroke();

//create a circle
ctx.beginPath();
ctx.arc(400, 80, 50, 0, 5 * Math.PI);
ctx.stroke();

//draw a cubic bézier curve
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.bezierCurveTo(400, 250, 220, 10, 200, 200);
ctx.stroke();

//write filled text 
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, "magenta");
gradient.addColorStop(0.5, "blue");
gradient.addColorStop(1, "red");
ctx.fillStyle = gradient;
ctx.font = "30px Times New Roman";
ctx.fillText("Big smile!", 280, 90);
ctx.fillText("Smile", 280, 50);

//clear rectangle
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 200, 100);
ctx.clearRect(40, 40, 50, 50);