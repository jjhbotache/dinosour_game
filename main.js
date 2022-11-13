
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
var velX = 25;


/**
 * Moves the ground, and returns it when it finish
 */
function move_ground() {
    if (Math.abs(groundPos) <= Math.floor(groundWidth/2)) {
        groundPos-=velX;
    }
    else{
        groundPos=0;
    }
    ground.style.left = groundPos + "px"
    console.log(ground.style.left);
}


function start(){ 
    console.log("posicionate");
}
function loop() {    
    move_ground();
}







