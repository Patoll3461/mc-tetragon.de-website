class enemy{
    constructor(currentImage, lives){
        this.currentImage = currentImage;
        this.x = 0;
        this.y = 0;
        this.xdir = 0;
        this.ydir = 0;
        this.speed = 2.5;
        this.lockyu = false;
        this.lockyd = false;
        this.lockxl = false;
        this.lockxr = false;
        this.runx = false;
        this.runy = false;
        this.lives = lives;
        this.notcoll = true;
        this.alive = true;
    } 

    animateenemy(){

        this.moveenemy();
        this.movetoplayer();
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
  
     moveenemy(){
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

     resetnc(){
        this.notcoll = true;
     }

     teststonecol(){    
        if(this.getDir()[0] == -1){
            let posy = this.getFieldCoords(0, 0, 10, 0)[1];
            let posx = this.getFieldCoords(0, 25, 0, 0)[0];
            if(boards[board][posy][posx] == s || boards[board][posy][posx] == sst){
                this.lockxl = true;
                this.xdir = 0;
                //let ndir = Math.random();
               /* if (ndir < 0.5){
                    this.ydir = -1;
                } else {
                    this.ydir = 1;
                }*/
            }
        }
        if(this.getDir()[0] == 1){
            let posy = this.getFieldCoords(0, 0, 10, 0)[1];
            let posx = this.getFieldCoords(25, 0, 0, 0)[0];
            if(boards[board][posy][posx] == s || boards[board][posy][posx] == sst){
                this.lockxr = true;
                this.xdir = 0;
                //let ndir = Math.random();
                /*if (ndir < 0.5){
                    this.ydir = -1;
                } else {
                    this.ydir = 1;
                }*/
            }
        }
        if(this.getDir()[1] == -1){
            let posy = this.getFieldCoords(0, 0, 0, 0)[1];
            let posx = this.getFieldCoords(0, 0, 0, 0)[0];
            if(boards[board][posy][posx] == s || boards[board][posy][posx] == sst){
                this.lockyu = true;
                this.ydir = 0;
                console.log("ydir");
                //let ndir = Math.random();
                /*if (ndir < 0.5){
                    this.xdir = -1;
                } else {
                    this.xdir = 1;
                }*/
            }
        }
        if(this.getDir()[1] == 1){
            let posy = this.getFieldCoords(0, 0, 25, 0)[1];
            let posx = this.getFieldCoords(0, 0, 0, 0)[0];
            if(boards[board][posy][posx] == s || boards[board][posy][posx] == sst){
                this.lockyd = true;
                this.ydir = 0;
                //let ndir = Math.random();
               /* if (ndir < 0.5){
                    this.xdir = -1;
                } else {
                    this.xdir = 1;
                }*/
                //this.notcoll = false;
            }
        }
     }

     movetoplayer(){
         if (player.x < this.x - 3){
            this.xdir = -1;
         } else if (player.x > this.x + 3){
            this.xdir = 1;
         } else {
            this.xdir = 0;
         }
         if (player.y < this.y - 3){
            this.ydir = -1;
         } else if (player.y > this.y + 3){
            this.ydir = 1;
         } else {
            this.ydir = 0;
         }
     }
}

 