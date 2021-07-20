const canvas = document.querySelector('#canvas-sketch');
const refresh = document.querySelector('.refresh');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = 0;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.lineWidth = 20;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw(option) {
    hue = hue + 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch (option.key) {
        case 'ArrowUp':
            y = y - 40;
            break;
        case 'ArrowDown':
            y = y + 40;
            break;
        case 'ArrowLeft':
            x = x - 40;
            break;
        case 'ArrowRight':
            x = x + 40;
            break;

        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

function handleKey(e) {
    if (e.key. includes('Arrow')) {
        e.preventDefault();
    }
    draw({ key: e.key});
}

window.addEventListener('keydown', handleKey);

function refreshCanvas() {
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
}

refresh.addEventListener('click', refreshCanvas);









