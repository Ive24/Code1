console.log("hello");
var spanElement = document.querySelector("span#idHello");
spanElement.textContent = "World";
for (var i = 0, i = void 0; ; i++) {
    console.log(i);
    var newSpan = document.createElement("span");
    newSpan.textContent = "Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red";
    newSpan.addEventListener("click", hndClick);
}
function hndClick(_event) {
    console.log(_event);
}
