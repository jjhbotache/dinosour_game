
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

var cactusList = []

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
    ground.style.left = groundPos + "px";
}

function velYRender() {
    dinoVely += -gravity;
    dinoPos += dinoVely;

    dinosaur.style.bottom = dinoPos + "px"
    if (dinoPos<=10) {dinoPos = 10; dinoVely = 0;}
}

/**
 * class to  create and use the cactus objects
 */
class cactus{
    constructor(){
        this.create();
        this.pos = 0;
        this.reposicionate();
    }
    
    create(){
        this.obj = document.createElement("div");
        this.obj.classList.add("cactus");
        document.querySelector(".container").appendChild(this.obj);
        this.obj.style.bottom = 0;
        console.log("cactus created");

    }

    reposicionate (){
        this.obj.style.right = 0 + (this.obj.offsetWidth * -1) + "px";
        this.pos = 0;
        console.log(this.obj.style.right);
        console.log("re posicionated");
    }
    update_pos(){
        this.obj.style.right = this.pos + "px";
    }
}


/**
 * function that moves all the cactus
 */
function move_cactus() {
    cactusList.forEach((cactus) => {
        if (cactus.pos < (document.querySelector(".container").clientWidth)) {
            cactus.pos+=dinoVelx;
        }
        else{cactus.pos = 0}
        cactus.update_pos();
    })
    
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
                if(dinoPos<=10) {dinoVely += 40;}
            }
        }
        );
        cactusList.push(new cactus());    
        console.log(cactusList);
}
/**
 * This function is repeated each frame
 */
function loop() {
    move_ground();
    move_cactus();
    velYRender();
}








