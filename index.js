const colorPicker = document.getElementById("colorpicker");
const colorCodeDisplay = document.getElementById("colorcode");

colorPicker.addEventListener("input", () => {
    colorCodeDisplay.textContent = colorPicker.value;
    document.body.style.backgroundColor = colorPicker.value;
});
