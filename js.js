imaage = "";

function preload(){

    imaage = loadImage("20210711_160416.jpg");

}
function setup(){

    canvas = createCanvas(640, 420);
    canvas.center();

}
function draw(){
    
    image(imaage, 0, 0, 640, 420);
}