function preload(){
    idk = loadImage('https://i.postimg.cc/SsNpVk2Y/moustache.png')
}

var x = 0;
var y = 0;

function setup(){
    canvas = createCanvas(300, 300)
    canvas.position(530, 250)
    img = createCapture(VIDEO);
    img.size(300, 300);
    img.hide();
    poseNet = ml5.poseNet(img, modelLoaded)
    poseNet.on('pose', gotResults);
}

function modelLoaded(){
    console.log('loaded posenet');
}


function gotResults(results){
    if(results.length > 0){
        console.log(results);
        x = results[0].pose.nose.x- 30;
        y = results[0].pose.nose.y + 8;
    }
}

function draw(){
    image(img, 0, 0, 300, 300);
    image(idk, x, y, 60, 30)
}