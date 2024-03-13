window.onkeydown = function (e){
    if(e.keyCode === 87){
        player.ydir = -1;
        player.currentImage = pingUp;
    }
    else if(e.keyCode === 65){
        player.xdir = -1;
        player.currentImage = pingLeft;
    }
    else if(e.keyCode === 83){
        player.ydir = 1;
        player.currentImage = pingDown;
    }
    else if(e.keyCode === 68){
        player.xdir = 1;
        player.currentImage = pingRight;
    }

    if(e.keyCode === 13){
        player.attack();
    }
}


window.onkeyup = function(e){
    if(e.keyCode === 87){
        player.ydir = 0;
    }
    else if(e.keyCode === 65){
        player.xdir = 0;
    }
    else if(e.keyCode === 83){
        player.ydir = 0;
    }
    else if(e.keyCode === 68){
        player.xdir = 0;
    }
}

