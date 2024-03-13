function start(){
    requestAnimationFrame(start);
    drawboard(boards[board]);
    player.animateplayer();
    for (var i = 0; i < enemys.length; i++){
        console.log(enemys.length);
        enemys[i].animateenemy();
    }
    testboard();
    //mus.play();
}
