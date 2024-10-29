var boards = []

g = new Image();
g.src = "img/grass.png";
s = new Image();
s.src = "img/stone.png";
sn = new Image();
sn.src = "img/snow.png";
sst = new Image();
sst.src = "img/snowstone.png";
i = new Image();
i.src = "img/ice.png";

var screen1 = [[sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,],
               [sn,sn,sn,i,i,i,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn],
               [sn,sn,i,i,i,i,sn,sst,sst,sst,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,],
               [sn,i,i,i,i,i,sn,sn,sst,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,],
               [sn,i,i,i,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sst,sst,sst,sst,sn,sn,sn,sn,sn,sn,],
               [sn,i,i,i,sn,sn,sn,sn,sn,sn,sn,sn,i,i,i,sn,sn,sst,sst,sn,sn,sn,sn,sn,sn,],
               [sn,sn,i,sn,sn,sn,sn,sn,sn,sn,sn,sn,i,i,i,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,],
               [sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,i,i,i,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn],
               [sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,i,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn],
               [sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn,sn],
               [g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,],
               [g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,],
               [g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,],]

var screen2 = [[g,g,g,g,g,g,s,s,s,s,s,s,s,s,g,g,g,g,g,g,g,g,g,g,g,],
               [s,s,s,s,s,s,s,g,g,g,g,g,g,s,s,s,s,s,s,g,g,g,g,g,g,],
               [g,g,g,g,g,g,s,s,s,s,s,s,s,s,g,g,g,g,g,g,g,g,g,g,g,],
               [s,s,s,s,s,s,s,g,g,g,g,g,g,s,s,s,s,s,s,g,g,g,g,g,g,],
               [g,g,g,g,g,g,s,s,s,s,s,s,s,s,g,g,g,g,g,g,g,g,g,g,g,],
               [s,s,s,s,s,s,s,g,g,g,g,g,g,s,s,s,s,s,s,g,g,g,g,g,g,],
               [g,g,g,g,g,g,s,s,s,s,s,s,s,s,g,g,g,g,g,g,g,g,g,g,g,],
               [s,s,s,s,s,s,s,g,g,g,g,g,g,s,s,s,s,s,s,g,g,g,g,g,g,],
               [g,g,g,g,g,g,s,s,s,s,s,s,s,s,g,g,g,g,g,g,g,g,g,g,g,],
               [s,s,s,s,s,s,s,g,g,g,g,g,g,s,s,s,s,s,s,g,g,g,g,g,g,],
               [g,g,g,g,g,g,s,s,s,s,s,s,s,s,g,g,g,g,g,g,g,g,g,g,g,],
               [s,s,s,s,s,s,s,g,g,g,g,g,g,s,s,s,s,s,s,g,g,g,g,g,g,],
               [s,s,s,s,s,s,s,g,g,g,g,g,g,s,s,s,s,s,s,g,g,g,g,g,g]]

boards = [screen1, screen2];
