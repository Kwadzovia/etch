const boxSideLength = 2;
const boxSideLengthUnit = "rem"
let boxesPerRow = 16;
let buttonSelector = document.querySelector("#reset-button")

buttonSelector.addEventListener("click", () => {
    resetGrid(Number(prompt("Enter grid width:")));
});

function initGrid() {
    let gridContainer = document.querySelector("#grid-container");
    let boxSelector = document.createElement("div");
    boxSelector.id = "box-container";

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
        e.target.style.backgroundColor = `rgb(${r},${g},${g})`;
    })

    gridContainer.appendChild(boxSelector);
}

function deleteGrid(gridWidth) {
    boxesPerRow = gridWidth;
    let boxList = document.querySelectorAll("#box-container");
    for (let i = 0; i < boxList.length; i++) {
        boxList[i].remove();
    }
}

function resetGrid(gridWidth) {
    if (gridWidth > 0 && gridWidth <= 100) {
        deleteGrid(gridWidth);
        initGrid();
    }
    else {
        alert("Please enter a number from 1 to 100");
    }

}

initGrid();


