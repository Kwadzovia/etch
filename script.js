const boxesPerRow = 16;
const boxSideLength = 2;
const boxSideLengthUnit = "rem"

let boxSelector = document.querySelector("#box-container");


//Set max column width before wrapping
boxSelector.style.width = `${boxesPerRow * boxSideLength}` + boxSideLengthUnit;

//Render boxes
for (let i = 0; i < boxesPerRow ** 2; i++) {

    let boxInstance = document.createElement("div");
    boxInstance.style.width = boxSideLength + "rem";
    boxInstance.style.height = boxInstance.style.width;
    boxInstance.style.border = "2px,solid,black";
    boxInstance.style.backgroundColor = "beige";
    boxInstance.classList.add("box")
    boxInstance.classList.add("default-color")
    boxSelector.appendChild(boxInstance);
}

boxSelector.addEventListener("mouseover", (e) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    // console.log(`rgb(${r},${g},${g})`)
    e.target.style.backgroundColor = `rgb(${r},${g},${g})`;
})

