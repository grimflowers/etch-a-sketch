function colorPixel(pixel) {
    let rainbowBtn = document.querySelector('.rainbowBtn');

    if (rainbowBtn.classList.contains('clicked')) {
        pixel.style.backgroundColor = generateRandomColor();
    } else {
        let color = document.querySelector('.canvas').getAttribute('data-color');

        pixel.style.backgroundColor = color;
    }
}

function setActiveColor(color) {
    document.querySelector('.canvas').setAttribute('data-color', color);
}

function clearCanvas() {
    const canvas = document.querySelector('.canvas');

    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

function generateRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
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
                colorPixel(e.target);
            }
        });

        div.addEventListener('mousedown', function(e){
            colorPixel(e.target);
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

canvas.addEventListener('mousedown', function() {
    canvas.classList.add('drawable');
});

canvas.addEventListener('mouseup', function() {
    canvas.classList.remove('drawable');
});

drawcanvas(20);
document.querySelector('input[name="colorSelect"]').value = "#000000";
document.querySelector('.slider').value = "20";

document.querySelector('.rainbowBtn').addEventListener('click', function() {
    let rainbowBtn = document.querySelector('.rainbowBtn');

    if (rainbowBtn.classList.contains("clicked")) {
        rainbowBtn.classList.remove('clicked');
        rainbowBtn.style.backgroundColor = "white";
        rainbowBtn.style.transition = "all 0.5s";
    } else {
        rainbowBtn.classList.add('clicked');
        rainbowBtn.style.backgroundColor = generateRandomColor();
        rainbowBtn.style.transition = "all 0.5s";
    }
});

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
