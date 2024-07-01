console.log("Test");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
//x-Axis
ctx.moveTo(0, 0);
ctx.lineTo(200, 0);
ctx.stroke();
//y-Axis
ctx.moveTo(0, 0);
ctx.lineTo(0, 200);
ctx.stroke();
