const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let color = "black";

function drawCircle(x, y, r) {
  ctx.beginPath();
  //   ctx.arc(x, y, 40, Math.PI * 2);
  ctx.arc(x, y, r, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
}
drawCircle(100, 200, 90);

function drawLine(x1, y1, x2, y2) {
  if (canvas.getContext) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 3;
    ctx.strokeStyle = color;
    ctx.stroke();
  } else {
    console.log("Canvas is not supported");
  }
}
drawLine(300, 400, 450, 490);

function drawRectangle(x, y, w, h) {
  if (canvas.getContext) {
    ctx.fillRect(x, y, w, h);
  } else {
    console.log("Canvas is not supported");
  }
}
drawRectangle(600, 200, 90, 90);

function drawTriangle(x1, y1, x2, y2, x3, y3) {
  if (canvas.getContext) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
    console.log("drawn");
  } else {
    console.log("Canvas is not supported");
  }
}

drawTriangle(50, 100, 200, 300, 250, 300);
