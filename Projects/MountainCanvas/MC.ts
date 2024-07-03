const canvas: HTMLCanvasElement = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawMountain () {
    let grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
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

     let img = new Image();
     
     img.src = "Stone2.jpg";
     img.onload = function () {
         let pattern = ctx.createPattern(img, "repeat");
         ctx.fillStyle = pattern;
         ctx.fill();
     } 
}

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
     
drawMountain();
drawBird(); 

let imgData = ctx.getImageData (0, 0, canvas.width, canvas.height); 

interface Cloud {
    x: number,
    y: number,
    scalex: number,
    scaley: number,
    color: string,

}

let clouds: Cloud [] = createClouds(5);
drawClouds(); 

function createClouds (_amount: number) {
    let clouds: Cloud [] = [];
    for (let i: number = 0; i < _amount; i++) {
        let cloud: Cloud = {
        x: Math.random()*600,
        y: Math.random()*600,
        scalex: 50 + Math.random()*250,
        scaley: Math.random()*80,
        color: "white", 
    }
    clouds.push(cloud); 
    console.log(clouds)
}
return clouds;
}

function drawCloud (_cloud: Cloud): void {
    let path: Path2D = new Path2D();

    path.roundRect(_cloud.x, _cloud.y, _cloud.scalex, _cloud.scaley, [40]);
    ctx.fillStyle = _cloud.color;
    ctx.fill(path); 
}
 
function drawClouds (): void {
    for (let i: number = 0; i < clouds.length; i++) {
        let cloud = clouds[i];
        drawCloud(cloud); 
    }
}


const speedBird: number = 0.001;

function updateBird () {
    for (let m: number = 0; m < 8; m++) {
    clouds[m].x += speedBird;
}
}

const speed: number = 0.5;

function updateClouds(){
    for (let cloud of clouds) {
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
    updateBird();
    drawBird();
    requestAnimationFrame(animationFrame);
 }

 requestAnimationFrame(animationFrame);

