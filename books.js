imaa3ge = "";

function preload(){

    imaa3ge = loadImage("20210711_160332.jpg");

}
function setup(){

    canvas = createCanvas(640, 420);
    canvas.center();

}
function draw(){
    
    image(imaa3ge, 0, 0, 640, 420);

}