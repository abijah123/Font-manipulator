noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function draw(){
background('#ADD8E6');
document.getElementById("ss").innerHTML = "Font size of the text will be = " + difference +"px"; 
textSize(difference); fill('#FFE787'); 
text('Abijah', 50, 400);
}
function setup(){
    canvas = createCanvas(900,550);
    canvas.position(900,140);
    video = createCapture(VIDEO);
    video.size(750,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
    }
    function modelLoaded() {
        console.log('PoseNet Is Initialized!')
        }
        function gotPoses(results)
        {
            if(results.length > 0)
            {

            }
        }