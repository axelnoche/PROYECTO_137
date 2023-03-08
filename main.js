noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)
    video.position(670, 50)


    canvas = createCanvas(550,500);
    canvas.position(670, 510);

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses )
}

function modelLoaded() {
  console.log('poseNet se inicializo')
}

function gotPoses(results) {
    if (results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);   

        leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - leftWristX);

    console.log("leftWristX = " + leftWristX + "rigthWristX = " + rightWristX + "difference" + difference);
}
}
function draw() {
    background('green')

    document.getElementById("square_side").innerHTML = "eL alto y el ancho del cuadro será: " + difference+"px";
    fill('red');
    stroke('red');
    square(noseX, noseY, difference);
}