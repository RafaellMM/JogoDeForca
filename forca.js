tabuleiro.width = 400;
tabuleiro.height = 300;
tabuleiro.lineWidth = 5;


/*desenhoForca*/
function desenhoForca(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(240, 10);
    tabuleiro.lineTo(240, 300);
    tabuleiro.stroke();

    tabuleiro.beginPath();
    tabuleiro.moveTo(330, 10);
    tabuleiro.lineTo(330, 50);
    tabuleiro.stroke();

    tabuleiro.beginPath();
    tabuleiro.moveTo(237, 10);
    tabuleiro.lineTo(332, 10);
    tabuleiro.stroke();

    tabuleiro.beginPath();
    tabuleiro.moveTo(190, 257);
    tabuleiro.lineTo(300, 257);
    tabuleiro.stroke();
}desenhoForca()


/*desenhando cabeça*/
function desenhoCabeca(){
    tabuleiro.beginPath();
    tabuleiro.arc(330, 70, 25, 0, Math.PI*2);
    tabuleiro.fill();

}

/*Desenhando corpo*/
function desenhoCorpo(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(330, 70);
    tabuleiro.lineTo(330, 170);
    tabuleiro.stroke();
}

/*Desenhando bracoE*/
function desenhoBracoE(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(330, 100);
    tabuleiro.lineTo(370, 130);
    tabuleiro.stroke();
}

/*Desenhando bracoD*/
function desenhoBracoD(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(330, 100);
    tabuleiro.lineTo(290, 130);
    tabuleiro.stroke();
}

/*Desenhando pernaD*/
function desenhoPernaD(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(330, 170);
    tabuleiro.lineTo(300, 220);
    tabuleiro.stroke();
}

/*Desenhando pernaE*/
function desenhoPernaE(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(330, 170);
    tabuleiro.lineTo(360, 220);
    tabuleiro.stroke();
}
