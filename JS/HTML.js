// Initialization
let buttons = document.querySelectorAll(".btn-c-m");

// Font size changer
function updateButtonFontSize() {
  let screenWidth = window.innerWidth;
  buttons.forEach(button => {
    if (screenWidth < 1200 && screenWidth > 992) {
      button.style.fontSize = "14pt";
    } 
    else if (screenWidth < 992) {
      button.style.fontSize = "18pt";
    }
    else {
      button.style.fontSize = "18pt";
    }
  });
}

// Call the function once to set the initial font size
updateButtonFontSize();

// Call the function every time the window is resized
window.addEventListener("resize", updateButtonFontSize);