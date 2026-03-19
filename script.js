var canvas = document.getElementById("canvas")
var canvasContext = canvas.getContext("2d")
var size = 50
var x = 0
var y = 0

canvas.width = window.innerWidth * 80 / 100;
canvas.height = window.innerHeight * 50 / 100;

canvasContext.fillStyle = "slateblue"
canvasContext.fillRect(0, 0, canvas.width, canvas.height)

canvasContext.fillStyle = "blue"
canvasContext.fillRect(x, y, size, size)

function upAction (){
    console.log("Up Clicked")
}
function rightAction (){
    console.log("Right Clicked")
}
function downAction (){
    console.log("Down Clicked")
}
function leftAction (){
    console.log("Left Clicked")
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