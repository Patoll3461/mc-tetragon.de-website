var canvas, c, mlength, mheight;
var enemys = [];
function init(){
    canvas = document.getElementById("profilecanvas");
    c = canvas.getContext("2d");
    currMap = screen1;
    mlength = screen1[0].length;
    mheight = screen1.length + 1;
    canvas.width = (mlength) * 50;
    canvas.height = (mheight - 1) * 50; 
    player = new player(pingUp, 5);
    board = 0;
    e1 = new enemy(pingUp, 1);
    e1.speed = 2.5;
    e1.x = 500;
    e1.y = 500;
    e2 = new enemy(pingDown, 1);
    e2.x = 400;
    e2.y = 400;
    e2.speed = 2;
    e3 = new enemy(pingLeft, 1)
    e3.x = 400;
    e3.y = 400;
    e3.speed = 3;
    enemys = [e1, e2, e3];
    start(); 
}

window.onload = init;