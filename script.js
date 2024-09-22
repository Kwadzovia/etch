const boxesPerRow = 4;

let boxSelector = document.querySelector("#box-container");

let boxInstance = document.createElement("div");
boxInstance.style.height = "2rem";
boxInstance.style.width = "2rem";
boxInstance.style.backgroundColor = "blue";
boxInstance.style.border = "3px,solid,black";
boxInstance.classList.add("box")
boxSelector.appendChild(boxInstance);
