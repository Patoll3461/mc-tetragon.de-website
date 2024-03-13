
    function drawboard(map){
        for(var x = 0; x < mheight - 1; x++){
            for(var y = 0; y < mlength; y++){   
                console.log(x, y); 
                c.drawImage(map[x][y], y * 50, x * 50);
                /*if(map[x][y] === "g"){
                    c.drawImage(grass, y * 50, x * 50);   
                } else if(map[x][y] === "s"){
                    c.drawImage(stone, y * 50, x * 50); 
                } else if(map[x][y] === "h"){
                    c.fillStyle = "green";
                    c.fillRect(y * 50, x * 50, 50, 50);
                } else if(map[x][y] === "i"){
                    c.drawImage(snow, y * 50, x * 50); 
                }  */                      
            }
        }
    }