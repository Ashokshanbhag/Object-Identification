imaage = "";

function preload(){

    imaage = loadImage("20210711_160247.jpg");

}
function setup(){

    canvas = createCanvas(640, 420);
    canvas.center();

}
function draw(){
    
    image(imaage, 0, 0, 640, 420);
    fill("#b8362a");
    stroke("#b8362a");
    text("Bottle", 50, 80);
    noFill();
    rect(5, 70, 150, 260);
    fill("#b8362a");
    stroke("#b8362a");
    text("Bottle", 50, 80);
    noFill();
    rect(5, 70, 150, 260);

}