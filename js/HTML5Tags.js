window.onload = function () {
  // A1. CANVAS definition standard variables.
  canvas = document.getElementById("canvasArea");
  context = canvas.getContext("2d");
  // A2. LAYOUT of first rectangle.
  var xPos = 20;
  var yPos = 20;
  var width = 100;
  var height = 50;
  // A3. DISPLAY rectangles.
  context.fillStyle = "hotpink";
  context.fillRect(xPos, yPos, width, height);
  context.lineWidth = 4;
  context.strokeStyle = "royalblue";
  context.strokeRect(xPos + 130, yPos, width, height);
  context.fillStyle = "darkorange";
  context.fillRect(xPos + 260, yPos, width, height);
  context.clearRect(xPos + 285, yPos + 10, width - 50, height - 20);
}