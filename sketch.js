function colorPixel(pixel, color) {
    pixel.style.backgroundColor = color;
}

function setActiveColor(color) {
    activeColor = color;
}

function clearCanvas() {
    const canvas = document.querySelector('.canvas');

    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function drawcanvas(width) {
    clearCanvas();

    const canvas = document.querySelector('.canvas');
    const area  = width * width;

    for (let i = 0; i < area; i++) {
        const div = document.createElement('div')
        div.classList.add('gridPixel');

        div.addEventListener("mouseover", function(e) {
            if (canvas.classList.contains('drawable')) {
                colorPixel(e.target, activeColor);
            }
        });

        div.addEventListener('mousedown', function(e){
            colorPixel(e.target, activeColor);
        })

        canvas.appendChild(div);
    }

    canvas.style.display = "grid";
    canvas.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    canvas.style.gridTemplateRows    = `repeat(${width}, 1fr)`;
    canvas.style.width  = '20vw';
    canvas.style.height = '20vw';
}

let canvas = document.querySelector('.canvas');
var activeColor = "black";

canvas.addEventListener('mousedown', function() {
    canvas.classList.add('drawable');
});

canvas.addEventListener('mouseup', function() {
    canvas.classList.remove('drawable');
});

drawcanvas(20);
document.querySelector('input[name="colorSelect"]').value = "#000000";
document.querySelector('.slider').value = "20";


document.querySelector('.resetCanvasBtn').addEventListener('click', function() {
    let canvas = document.querySelector('.canvas');
    let gridPixels = canvas.querySelectorAll('.gridPixel');

    for(let i = 0; i < gridPixels.length; i++) {
        gridPixels[i].style.backgroundColor = "white";
    }
});

document.querySelector('input[name="colorSelect"]').addEventListener('input', function(e) {
    setActiveColor(e.target.value);
});

document.querySelector('.slider').addEventListener('change', function(e) {
    drawcanvas(Number.parseInt(e.target.value));
});
