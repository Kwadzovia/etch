const boxesPerRow = 8;
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
    boxInstance.style.backgroundColor = "beige";
    boxInstance.style.border = "2px,solid,black";
    boxInstance.classList.add("box")

    boxSelector.appendChild(boxInstance);
}
