const canvas: HTMLCanvasElement = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

drawMountain();

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
     
drawBird(); 
createClouds(); 

let imgData = ctx.getImageData (0, 0, canvas.width, canvas.height); 

interface Cloud {
    positionX: number,
    positionY: number, 
    size: number, 
}

let clouds: Cloud[] = [];

function createClouds(): void {
    for(let i: number = 0; i < 7; i++){
        clouds.push({
            positionX: Math.random()*600 + 20,
            positionY: Math.random()*600 + 20,
            size: Math.random()*20 + 5, 
        })
}}

function createCloudParts() {

} //cloud parts als transparente ellipsen dann screenchot dann färben 

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(Math.random()*0.5, "magenta");
    gradient.addColorStop(Math.random()*0.5, "blue");
    gradient.addColorStop(Math.random()*0.5, "white");
    ctx.fillStyle = gradient;


// let cloud1 = {
//     name: "RoundCloud",
//     positionX: Math.random()*500,
//     positionY: Math.random()*120,
//     size: Math.random()*50,
//     color: "transparent",  
// }

// let cloud2 = {
//     name: "LongCloud",
//     positionX: Math.random()*150,
//     positionY: Math.random()*500,
//     size: Math.random()*50,
//     color: "transparent",  
// }

// let cloud3 = {
//     name: "TinyCloud",
//     positionX: Math.random()*790,
//     positionY: Math.random()*400,
//     size: Math.random()*50,
//     color: "transparent",  
// }

// let clouds: Cloud [] = [cloud1, cloud2, cloud3]; 

// function drawClouds () {
//     for (let i:number = 0; i < clouds.length; i++) {
//         let path = new Path2D;
//         path.ellipse(clouds[i].positionX, clouds[i].positionY, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
//         ctx.fillStyle = clouds[i].color;
//         ctx.fill(path);
//         for (let c: number = 0; c < 10; c++) {
//             let path2 = new Path2D;
//             path2.ellipse((clouds[i].positionX + Math.random()*50 - Math.random()*50), (clouds[i].positionY+Math.random()*50 - Math.random()*50), 50, 75, Math.PI / 4, 0, 2 * Math.PI);
//             ctx.fillStyle = gradient;
//             ctx.fill(path2);
//         }
//         }  
// }
// let clouds: Cloud[] = createClouds(10); 
// drawClouds();

// function createClouds (_amount: number): Cloud[] {
//     let clouds: Cloud[];
//     for (let i:number = 0; i < clouds.length; i++) {
//         let cloud: Cloud = {
//             positionX: Math.random()*150,
//             positionY: Math.random()*500,
//             size: Math.random()*500, 
//         }
//         for (let c: number = 0; c < cloud.size; c++) {
//             let cloudi = {
//                 positionX: Math.random()*150,
//                 positionY: Math.random()*500,
//                 size: Math.random()*500, 
//             }
//         }
//         clouds.push(cloud);
//     } 
//     return clouds; 
// }

function drawClouds (): void {
    for (let i: number = 0; i < clouds.length; i++) {
        let cloud = clouds[i];
        drawClouds();
    }
}

const speed: number = 0.00000001;

function updateClouds () {
    for (let i: number = 0; i < clouds.length; i++) {
    clouds[i].positionX += speed;
}
}

function updateBird () {
    for (let m: number = 0; m < birds.length; m++) {
    clouds[m].positionX += speed;
}
}

function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imgData, 0, 0);
    updateClouds();
    updateBird();
    drawClouds();
    drawBird();
    requestAnimationFrame(animationFrame);
 }

 requestAnimationFrame(animationFrame);

