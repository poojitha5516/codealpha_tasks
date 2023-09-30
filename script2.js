const colorDisplay = document.getElementById("color-display");
const colorInput = document.getElementById("color-input");
const generateButton = document.getElementById("generate-button");

function updateColor() {
    const selectedColor = colorInput.value;
    colorDisplay.style.backgroundColor = selectedColor;
}

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorInput.value = randomColor;
    updateColor();
}

colorInput.addEventListener("input", updateColor);
generateButton.addEventListener("click", generateRandomColor);

// Initial color update
updateColor();
