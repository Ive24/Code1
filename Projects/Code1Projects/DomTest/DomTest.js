console.log("hello");
var spanElement = document.querySelector("span#idHello");
spanElement.textContent = "World";
var newSpan = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";
console.log(newSpan);
var i = 0;
console.log(i);
do {
    i++;
    var newSpan_1 = document.createElement("span");
    newSpan_1.textContent = "Hello";
    document.body.appendChild(newSpan_1);
    newSpan_1.style.backgroundColor = "red";
} while (i < 10);
