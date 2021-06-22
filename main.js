song = "";

function preload()
{
    song = loadSound("Ship.mp3");
}

function setup()
{
    canvas = createCanvas(250, 250);
    Ccanvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 600, 500);
}
function play()
{
    song.play();
}