song = "";
scoreRightWristX = 0;
scoreLeftWristX = 0;

rightWristX = 0;
rightWristY = 0;
lefttWristY = 0;
leftWristX = 0;

function preload()
{
    song = loadSound("Ship.mp3");
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(440, 170);

    video = createCapture(VIDEO);
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet is initialized!");
}

function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX+ "rightWristY = "+ rightWristY );

        leftWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.rightWrist.y;
        console.log("leftWristX =" + leftWristX+ "leftWristY = "+ lefttWristY );
    }
}
function draw()
{
    image(video, 0, 0, 600, 500);
}
function play()
{
    song.play();
    song.volume(1);
    song.rate(1);
}