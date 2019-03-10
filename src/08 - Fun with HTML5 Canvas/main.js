/*
 * Elements
 */

const p = document.querySelector('p');
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

/*
 * Properties
 */

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let growing = false;

/*
 * Functions
 */

function resize() {
  const oldImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 100;
  ctx.putImageData(oldImageData, 0, 0);
}

function handlePress(e) {
  e.preventDefault();
  e.stopPropagation();
  isDrawing = true;
  if (e.type === 'touchstart') {
    const target = e.targetTouches[0];
    [lastX, lastY] = [target.clientX, target.clientY];
  } else {
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }
}

function draw(e) {
  if (!isDrawing) return; // stop if not drawing

  p.remove(); // make sure p is no longer displaying

  // get x and y
  let x;
  let y;
  if (e.type === 'touchmove') {
    const target = e.targetTouches[0];
    [x, y] = [target.clientX, target.clientY];
  } else {
    [x, y] = [e.offsetX, e.offsetY];
  }

  // draw the line
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();
  [lastX, lastY] = [x, y];

  // update colour
  hue += 1;
  if (hue >= 360) {
    hue = 0;
  }

  // update line width
  growing = (growing && ctx.lineWidth < 100) || (!growing && ctx.lineWidth <= 1);
  if (growing) {
    ctx.lineWidth += 1;
  } else {
    ctx.lineWidth -= 1;
  }
}

function stopDrawing() {
  isDrawing = false;
}

/*
 * Event listeners
 */

window.addEventListener('resize', resize);
canvas.addEventListener('mousedown', handlePress);
canvas.addEventListener('touchstart', handlePress);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);
canvas.addEventListener('touchend', stopDrawing);
canvas.addEventListener('touchcancel', stopDrawing);

/*
 * Initialise
 */

resize();
