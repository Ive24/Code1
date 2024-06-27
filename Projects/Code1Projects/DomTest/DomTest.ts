console.log("hello");

let spanElement: HTMLSpanElement = document.querySelector("span#idHello")!;
spanElement.textContent = "World";

for (let i: number = 0; i < 10; i++)
  {
    console.log(i);

    let newSpan: HTMLSpanElement = document.createElement("span");
    newSpan.textContent = "Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red";
  }


document.body.addEventListener("click", hndClick);

function hndClick(_event: Event): void {
  console.log(_event.currentTarget);
  let target: HTMLElement = <HTMLElement>_event.target;
  if(target == document.body)
    return;
  target.textContent = "World"
  target.style.backgroundColor = "green"; 
}

let img = document.createElement("Dino.jpg");
img.src = "Projects/Code1Projects/DomTest/Dino.jpg";
element.addEventListener("click", ImgClick);

function ImgClick() {
  alert ("Hello World!");
}
document.body.appendChild(img); 

