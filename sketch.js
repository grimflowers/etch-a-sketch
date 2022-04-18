function drawcanvas(width, height) {
    const canvas = document.querySelector('.canvas');
    const area  = width * height;

    for (let i = 0; i < area; i++) {
        const div = document.createElement('div')
        div.classList.add('gridPixel');

        div.addEventListener("mouseover", function(e) {
            if (canvas.classList.contains('drawable')) {
                e.target.style.backgroundColor = 'black';
            }
        });

        div.addEventListener('mousedown', function(e){
            e.target.style.backgroundColor = 'black';
        })

        canvas.appendChild(div);
    }

    canvas.style.display = "grid";
    canvas.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    canvas.style.gridTemplateRows    = `repeat(${height}, 1fr)`;
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

drawcanvas(16, 16);

document.querySelector('.resetCanvasBtn').addEventListener('click', function() {
    let canvas = document.querySelector('.canvas');
    let gridPixels = canvas.querySelectorAll('.gridPixel');

    for(let i = 0; i < gridPixels.length; i++) {
        gridPixels[i].style.backgroundColor = "white";
    }
});