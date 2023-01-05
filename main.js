function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(650, 150);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);

}

function modelloaded() {
    console.log("poseNet has been initialised");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    }

}

function draw() {
    background("orange");
}