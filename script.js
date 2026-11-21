const writing = document.querySelector("#writing");
const size = document.querySelector("#size");
const sizeValue = document.querySelector("#size-value");
const status = document.querySelector("#status");

function updateSize() {
  document.documentElement.style.setProperty("--pen-size", size.value + "px");
  sizeValue.value = size.value + " px";
}

size.addEventListener("input", updateSize);
updateSize();

document.querySelector("#clear").addEventListener("click", () => {
  writing.value = "";
  writing.focus();
});

document.fonts.load('34px "Shishir Hand"').catch(() => {
  status.textContent = "The handwriting font could not load. Keep the fonts folder beside index.html.";
  status.hidden = false;
});
