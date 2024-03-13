var board;

function testboard(){
    if (player.x < 0){
        board--;
        player.x = canvas.width -10;
    } else if (player.x > canvas.width){
        board++;
        player.x = 10;
    } else if (player.y < -10){
        board *= 5;
        player.y = 594;
    } else if (player.y >= 603){
        board /= 5;
        player.y = 0;
    }
}