const colorPicker = document.getElementById("textcolor");
const canvasColor = document.getElementById("background");
const canvas = document.getElementById("canvas");
const undoButton = document.getElementById("retrieve");
const clearButton = document.getElementById("clear");
const saveButton = document.getElementById("save");
const fontPicker = document.getElementById("fontsize");

const ctx = canvas.getContext("2d");

// Ensure the canvas is properly sized
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set default font size
ctx.lineWidth = fontPicker.value;

colorPicker.addEventListener("change", (event) => {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
});

canvasColor.addEventListener("change", (event) => {
  ctx.fillStyle = event.target.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

fontPicker.addEventListener("change", (event) => {
  ctx.lineWidth = event.target.value;
});

canvas.addEventListener("mousedown", (event) => {
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener("mousemove", (event) => {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveButton.addEventListener("click", () => {
  const image = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  const link = document.createElement("a");
  link.download = "signature.png";
  link.href = image;
  link.click();
});

undoButton.addEventListener("click", () => {
  const savedCanvas = localStorage.getItem("canvasContents");
  if (savedCanvas) {
    const img = new Image();
    img.src = savedCanvas;
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
  }
});

// Save canvas contents to local storage
saveButton.addEventListener("click", () => {
  localStorage.setItem("canvasContents", canvas.toDataURL());
  // Trigger download
  const link = document.createElement("a");
  link.download = "signature.png";
  link.href = canvas.toDataURL();
  link.click();
});
