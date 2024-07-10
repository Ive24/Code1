const canvas: HTMLCanvasElement = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

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
 
const speed: number = 1;

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
//test 2