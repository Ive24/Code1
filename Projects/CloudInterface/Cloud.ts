const canvas: HTMLCanvasElement = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

interface Cloud {
    name: string,
    positionX: number,
    positionY: number, 
    color: string, 
}

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(Math.random()*1, "magenta");
    gradient.addColorStop(Math.random()*0.5, "blue");
    gradient.addColorStop(Math.random()*1.5, "red");
    ctx.fillStyle = gradient;


let cloud1 = {
    name: "RoundCloud",
    positionX: 100,
    positionY: 120,
    color: "white",  
}

let cloud2 = {
    name: "LongCloud",
    positionX: 250,
    positionY: 300,
    color: "white",  
}

let cloud3 = {
    name: "TinyCloud",
    positionX: 390,
    positionY: 400,
    color: "white",  
}

let clouds: Cloud [] = [cloud1, cloud2, cloud3]; 

function drawCloud () {
    for (let i:number = 0; i < clouds.length; i++) {
    let path = new Path2D;
    path.ellipse(clouds[i].positionX, clouds[i].positionY, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
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

drawCloud (); 

