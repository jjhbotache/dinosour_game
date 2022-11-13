
//---------------------- vars -------------------------------









//-----------------------------------------------------------
window.addEventListener('load', ()=>{
    start();
    var loop_timer = setInterval(loop,25);
});



//---------------------- functions -------------------------------

var ground = document.querySelector(".ground");
var dinosaur = document.querySelector(".dinosaur");
var score = document.querySelector(".score");

var groundPos = 0;
var groundWidth = ground.offsetWidth;

var dinoVely = 0
var dinoPos = 10
var dinoVelx = 15;

const gravity = 4;

/**
 * Moves the ground, and returns it when it finish
 */
function move_ground() {
    if (Math.abs(groundPos) <= Math.floor(groundWidth/2)) {
        groundPos-=dinoVelx;
    }
    else{
        groundPos=0;
    }
    ground.style.left = groundPos + "px"
}

function velYRender() {
    dinoVely += -gravity;
    dinoPos += dinoVely;

    dinosaur.style.bottom = dinoPos + "px"
    if (dinoPos<=10) {dinoPos = 10; dinoVely = 0;}
}


// main functions--------------------------------------
/**
 * This function setups all for the begining
 */
function start(){ 
    window.addEventListener('keypress', (event)=>{
        if (
            event.key === "w" ||
            // event.key === "ArrowUp" ||
            event.key == " " 
            ) {
            if (dinoPos<=10) {dinoVely += 40;}
        }
        
    });

}

function loop() {
    move_ground();
    velYRender();
}








