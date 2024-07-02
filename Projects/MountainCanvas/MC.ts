const canvas: HTMLCanvasElement = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

interface Cloud {
    name: string,
    positionX: number,
    positionY: number, 
    color: string, 
}

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(Math.random()*0.5, "magenta");
    gradient.addColorStop(Math.random()*0.5, "blue");
    gradient.addColorStop(Math.random()*0.5, "white");
    ctx.fillStyle = gradient;


let cloud1 = {
    name: "RoundCloud",
    positionX: Math.random()*500,
    positionY: Math.random()*120,
    color: "transparent",  
}

let cloud2 = {
    name: "LongCloud",
    positionX: Math.random()*150,
    positionY: Math.random()*500,
    color: "transparent",  
}

let cloud3 = {
    name: "TinyCloud",
    positionX: Math.random()*790,
    positionY: Math.random()*400,
    color: "transparent",  
}

let clouds: Cloud [] = [cloud1, cloud2, cloud3]; 
function drawClouds () {
    for (let i:number = 0; i < clouds.length; i++) {
        let path = new Path2D;
        path.ellipse(clouds[i].positionX*Math.random(), clouds[i].positionY*Math.random(), 50, 75, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fillStyle = clouds[i].color;
        ctx.fill(path);
        for (let c: number = 0; c < 10; c++) {
            let path2 = new Path2D;
            path2.ellipse((clouds[i].positionX + Math.random()*50 - Math.random()*50), (clouds[i].positionY+Math.random()*50 - Math.random()*50), 50, 75, Math.PI / 4, 0, 2 * Math.PI);
            ctx.fillStyle = gradient;
            ctx.fill(path2);
        }
        }  
}

drawClouds ();

interface Bird {
    color: string,
    positionX: number,
    positionY: number,
}

let Bird1 = {
    color: "grey",
    positionX: 400,
    positionY: 200,
}

let Bird2 = {
    color: "darkgrey",
    positionX: 500,
    positionY: 150,
}

let Bird3 = {
    color: "grey",
    positionX: 60,
    positionY: 300,
}

let birds: Bird [] = [Bird1, Bird2, Bird3]
function drawBird () {
    for (let m: number = 0; m <  birds.length; m++) {
        let pathM = new Path2D;
        pathM.moveTo(birds[m].positionX*Math.random(), birds[m].positionY*Math.random()); 
        pathM.bezierCurveTo(210, 250, 200, 100, 350, 400);
        ctx.strokeStyle = "green";
        ctx.stroke(pathM); 
        ctx.fillStyle = "black";
        ctx.fill(pathM);
    }
}
     
drawBird(); 
drawMountain();

let grad = ctx.createLinearGradient(0,0, 0,130);
grad.addColorStop(0, "grey");
grad.addColorStop(1, "blue");
ctx.fillStyle = "grad";

function drawMountain () {
    let grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(Math.random()*0.5, "grey");
    grad.addColorStop(Math.random()*0.5, "black");
    grad.addColorStop(Math.random()*0.5, "white");
    ctx.fillStyle = grad;
    
    ctx.beginPath();
    ctx.moveTo(800,300);
    ctx.lineTo(800,800);
    ctx.lineTo(300,800);
    ctx.lineTo(800,300);
    ctx.fillStyle = "grad"; 
    ctx.fill();
}
