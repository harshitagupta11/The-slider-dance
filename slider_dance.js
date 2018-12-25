var slider = [];
var angle = 0;

function setup() {
    noCanvas();
    //createCanvas(200, 200);
    for (var i = 0; i < 230; i++) {
        slider[i] = createSlider(0, 255, 0);
    }
}

function draw() {
    var offset = 0;
    for (var i = 0; i < slider.length; i++) {
        var x = map(sin(angle + offset), -1, 1, 0, 255);
        slider[i].value(x);
        offset += 0.06;
    }
    //background(slider.value());
    angle += 0.1;
}