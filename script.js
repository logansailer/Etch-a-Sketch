function selectSize() {
    for (let i = 0; i < size*size; i++) {  
        let height = 960/size;
        let block = document.createElement("div");
        block.style.width = height+"px";
        block.style.height = height+"px";
        block.addEventListener("mouseenter", () => {
            block.classList.add("hover")});
        container.appendChild(block);
    }
}

function resize() {
    size = prompt("Please enter canvas size as an integer less than 100");
    if (size > 100) {
        resize ();
    }
    container.innerHTML = "";
    selectSize()
}

let size = 16;
const container = document.querySelector(".container");
const button = document.querySelector("button");
button.addEventListener("click", resize);
selectSize();