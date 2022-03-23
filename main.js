function preload(){

}
function setup(){
    canvas = createCanvas(700, 550);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    background(220);
    image(video, 70, 120, 530, 320);
    fill(50, 90, 0)
    stroke(50, 90, 0)
    rect(20, 90, 45, 400);
    fill(50, 90, 0)
    stroke(50, 90, 0)
    rect(90, 30, 600, 45);
    fill(50, 90, 0)
    stroke(50, 90, 0)
    rect(630, 90, 45, 400);
    fill(50, 90, 0)
    stroke(50, 90, 0)
    rect(60, 450, 600, 45);
    fill(255, 204, 0)
    stroke(255, 204, 0)
    circle(50, 500, 100); 
    fill(255, 204, 0)
    stroke(255, 204, 0)
    circle(650, 500, 100); 
        fill(255, 204, 0)
    stroke(255, 204, 0)
    circle(50, 50, 100); 
    fill(255, 204, 0)
    stroke(255, 204, 0)
    circle(650, 50, 100);
}
function take_snapshot(){
    save('student_name.png');
}