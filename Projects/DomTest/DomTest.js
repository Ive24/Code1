console.log("hello");
var spanElement = document.querySelector("span#idHello");
spanElement.textContent = "World";
for (var i = 0; i < 10; i++) {
    console.log(i);
    var newSpan = document.createElement("span");
    newSpan.textContent = "Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red";
}
document.body.addEventListener("click", hndClick);
function hndClick(_event) {
    console.log(_event.currentTarget);
    var target = _event.target;
    if (target == document.body)
        return;
    target.textContent = "World";
    target.style.backgroundColor = "green";
}
