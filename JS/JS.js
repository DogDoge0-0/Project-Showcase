// Initialization
let redirect = false;

// Redirect
function redirectFunc() {
  if (redirect == true) {
    if (location.href !== 'https://project-showcase-v3.codeclash.repl.co/Redirect.html') {
      location.href = 'https://project-showcase-v3.codeclash.repl.co/Redirect.html';
    }
  } else {
    if (location.href === 'https://project-showcase-v3.codeclash.repl.co/Redirect.html') {
      location.href = 'https://project-showcase-v3.codeclash.repl.co';
    }
  }
}
redirectFunc();
window.addEventListener('hashchange', redirectFunc);
// Version
function verFunction() {
  var number = "v0.0.8g";
  document.querySelector("#myVer").innerHTML = number;
}
function verFunctionNext() {
  var number = "v0.0.9";
  document.querySelector("#myVerN").innerHTML = number;
}
