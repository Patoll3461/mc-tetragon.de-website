class player{
    constructor(currentImage, lives){
        this.currentImage = currentImage;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.xdir = 0;
        this.ydir = 0;
        this.speed = 4.5;
        this.lockyu = false;
        this.lockyd = false;
        this.lockxl = false;
        this.lockxr = false;
        this.runx = false;
        this.runy = false;
        this.lives = lives;
    } 

    animateplayer(){
        this.moveplayer();
        this.teststonecol();
        if(this.xdir == -1 && !this.lockxl && !this.runx){
            this.x += this.speed * this.xdir;
            this.runx = true;
        }
        if(this.xdir == 1 && !this.lockxr && !this.runx){
            this.x += this.speed * this.xdir;
            this.runx = true; 
        }
        if(this.ydir == -1 && !this.lockyu && !this.runy){
            this.y += this.speed * this.ydir;
            this.runy = true;
        }
        if(this.ydir == 1 && !this.lockyd && !this.runy){
            this.y += this.speed * this.ydir;
            this.runy = true;
        }
        this.runx = false;
        this.runy = false; 
        this.resetlock(); 
     }
  
     moveplayer(){
        c.beginPath();
        c.drawImage(this.currentImage, this.x, this.y);
     }

     getFieldCoords(xp, xm, yp, ym){
        let posxt = Math.round((this.x + xp - xm) / 50);
        let posyt = Math.round((this.y + yp - ym) / 50);
        return [posxt, posyt];
     }

     getDir(){
        return [this.xdir, this.ydir];
     }

     resetlock(){
        this.lockxl = false;
        this.lockyu = false;
        this.lockxr = false;
        this.lockyd = false;
     }

     teststonecol(){      
        if(this.getDir()[0] == -1){
            let posy = this.getFieldCoords(0, 0, 10, 0)[1];
            let posx = this.getFieldCoords(0, 25, 0, 0)[0];
            if(boards[board][posy][posx] == s || boards[board][posy][posx] == sst){
                this.lockxl = true;
            }
        }
        if(this.getDir()[0] == 1){
            let posy = this.getFieldCoords(0, 0, 10, 0)[1];
            let posx = this.getFieldCoords(25, 0, 0, 0)[0];
            if(boards[board][posy][posx] == s || boards[board][posy][posx] == sst){
                this.lockxr = true;
            }
        }
        if(this.getDir()[1] == -1){
            let posy = this.getFieldCoords(0, 0, 0, 0)[1];
            let posx = this.getFieldCoords(0, 0, 0, 0)[0];
            if(boards[board][posy][posx] == s || boards[board][posy][posx] == sst){
                this.lockyu = true;
            }
        }
        if(this.getDir()[1] == 1){
            let posy = this.getFieldCoords(0, 0, 25, 0)[1];
            let posx = this.getFieldCoords(0, 0, 0, 0)[0];
            if(boards[board][posy][posx] == s || boards[board][posy][posx] == sst){
                this.lockyd = true;
            }
        }
     }

     attack(){ 
        for (var i = 0; i < enemys.length + 1; i++){
            if(this.x < enemys[i].x && this.x + 70 > enemys[i].x && this.y + 30 > enemys[i].y && this.y - 30 < enemys[i].y && this.currentImage == pingRight){
                enemys.splice(i, 1);
                enemys[i].alive = false;
            } else if(this.x > enemys[i].x && this.x - 70 < enemys[i].x && this.y + 30 > enemys[i].y && this.y - 30 < enemys[i].y && this.currentImage == pingLeft){
                enemys.splice(i, 1);
                enemys[i].alive = false;
            } else if(this.y < enemys[i].y && this.y + 70 > enemys[i].y && this.x + 30 > enemys[i].x && this.x - 30 < enemys[i].x && this.currentImage == pingDown){
                enemys.splice(i, 1);
                enemys[i].alive = false;
            } else if(this.y > enemys[i].y && this.y - 70 < enemys[i].y && this.x + 30 > enemys[i].x && this.x - 30 < enemys[i].x && this.currentImage == pingUp){
                enemys.splice(i, 1);
                enemys[i].alive = false;
            }
        }
     }
}

 