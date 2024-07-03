const canvas: HTMLCanvasElement = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

interface Cloud {
    x: number,
    y: number,
    color: string,
    
}