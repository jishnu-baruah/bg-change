var r = 0;
var g = 178;
var b = 255;

function setup() {
    var canvas = createCanvas(600, 600)
}
function draw() {
    r = map(mouseX, 0, 600, 0, 255);
    g = map(mouseX, 0, 600, 255, 0)
    b = map(mouseX, 0, 600, 300, 400);

    background(r, g, b);
    fill(255);
    ellipse(mouseX, mouseY, 20, 20);
}