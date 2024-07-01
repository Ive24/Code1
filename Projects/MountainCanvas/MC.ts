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
    gradient.addColorStop(Math.random()*0.5, "red");
    ctx.fillStyle = gradient;


let cloud1 = {
    name: "RoundCloud",
    positionX: Math.random()*100,
    positionY: Math.random()*120,
    color: "transparent",  
}

let cloud2 = {
    name: "LongCloud",
    positionX: Math.random()*350,
    positionY: Math.random()*300,
    color: "transparent",  
}

let cloud3 = {
    name: "TinyCloud",
    positionX: Math.random()*590,
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

function drawMountain () {
    for (let m: number = 0; m < 5; m++) {
        let pathM = new Path2D;
        pathM.rect(Math.random()*500, 0, Math.random()*400, Math.random()*200); 
        ctx.fillStyle = "grey";
        ctx.fill(pathM);
    }
}
drawMountain();
drawBirds();