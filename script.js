//setup by adding 16 x 16 divs with class "grid"
//set width to 960/#number of divs

//resets grid to be selected size

function selectSize() {
    for (let i = 0; i < size*size; i++) {  
        let block = document.createElement("div");
        block.style.width = height+"px";
        block.style.height = height+"px";
        block.addEventListener("mouseenter", () =>
            {block.classList.add("hover")});
        container.appendChild(block);
    }
}

let size = 16;
let height = 960/size;
const container = document.querySelector(".container");
selectSize();