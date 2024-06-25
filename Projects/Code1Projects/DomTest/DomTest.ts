console.log("hello");

let spanElement: HTMLSpanElement = document.querySelector("span#idHello")!;
spanElement.textContent = "World";

let newSpan: HTMLSpanElement = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";

console.log(newSpan);

let i:number = 0;
console.log(i);
do {
    i++
    let newSpan: HTMLSpanElement = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";
} while (i < 10)

document.getElementsByClassName("Right").focus();
