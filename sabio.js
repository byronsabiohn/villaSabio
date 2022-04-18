var vs = document.getElementById("villasabio");
var paper = vs.getContext("2d");
var map = "./tile.png";

var fondo = new Image();
fondo.src = map;
fondo.addEventListener("load", draw);

var caw = new Image();
caw.src = "./vaca.png";
caw.addEventListener("load", drawcaw);

var pig = new Image();
pig.src = "./cerdo.png"
pig.addEventListener("load", drawpig);

var chicken = new Image();
chicken.src = "./pollo.png";
chicken.addEventListener("load", drawchicken);



function draw()
{
    paper.drawImage(fondo, 0, 0);
}

function drawcaw()
{
    paper.drawImage(caw, 10, 10);
}

function drawpig()
{
    paper.drawImage(pig, 10, 300);
}

function drawchicken()
{
    paper.drawImage(chicken, 300, 150);
}




// function aleatorio(min, max);
// {
//     var resultado;
//     resultado = Math.floor(Math.random() * (max - min +1)) + min;
//     return resultado;
// }