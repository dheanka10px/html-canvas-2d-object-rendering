var canvas = document.getElementById("canvas")
var canvasContext = canvas.getContext("2d")
var size = 50
var x = 0
var y = 0
var moveStep = 10
canvas.width = window.innerWidth * 80 / 100;
canvas.height = window.innerHeight * 50 / 100;

function createSquareSvg(color = "blue")
{
    const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
    <rect width="50" height="50" fill="${color}"/>
    </svg>
    `;

    const img = new Image();
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    img.src = URL.createObjectURL(blob);
    return img;
}

img = createSquareSvg()

function drawCanvas() {
    canvasContext.fillStyle = "slateblue";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    if (img.complete) {
        canvasContext.drawImage(
            img,
            x - size / 2,
            y - size / 2,
            size,
            size
        );
    }
}

function upAction (){
    y -= moveStep
}
function rightAction (){
    x += moveStep
}
function downAction (){
    y += moveStep
}
function leftAction (){
    x -= moveStep
}
function rRotateAction (){
    console.log("Right Rotate Clicked")
}
function lRotateAction (){
    console.log("Left Rotate Clicked")
}

function simulateClick(btnId) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    btn.classList.add("active");
    
    setTimeout(() => {
        btn.classList.remove("active");
    }, 150);
}

document.addEventListener("keydown", function(event) {
    const ctrl = event.ctrlKey;

    switch(event.key) {
        case "ArrowUp":
            simulateClick("upBtn");
            upAction();
            break;
        case "ArrowRight":
            if(ctrl){
                simulateClick("rRotateBtn");
                rRotateAction();
            } else {
                simulateClick("rightBtn");
                rightAction();
            }
            break;
        case "ArrowDown":
            simulateClick("downBtn");
            downAction();
            break;
        case "ArrowLeft":
            if (ctrl){
                simulateClick("lRotateBtn");
                lRotateAction();
            } else {
                simulateClick("leftBtn");
                leftAction();
            }
            break;
    }
});

function main() {
    drawCanvas();
    requestAnimationFrame(main);
}

main()