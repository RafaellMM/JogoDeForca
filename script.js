//seletores e variaveis

var palavras = ['ELEFANTE', 'PASSARO', 'TARTARUGA', 'RATO', 'GATO', 'PATO', 'GALO', 'GALINHA','MACACO','COBRA','CACHORRO']
var tabuleiro = document.getElementById('forca').getContext('2d');
var quantidadesErros = 0;
var acertos = 0;
var tentativas = "";
var letras = [];

palavraSecreta = palavras[Math.floor(Math.random()*8)]; 
console.log(palavraSecreta);

var c = document.getElementById("forca");
var ctx = c.getContext("2d");



desenhaTracos();

window.onkeypress = teclaPressionada;

function teclaPressionada(){
    if(!tentativas.includes(event.key) && palavraSecreta.includes((event.key).toUpperCase())){
        adicionaTentativa();
        for(var i = 0; i < palavraSecreta.length; i++){
            if (palavraSecreta[i] == (event.key).toUpperCase()){
                ctx.font = "bold 50px Inter";
                var eixo = 500/palavraSecreta.length
                ctx.fillText((event.key).toUpperCase(), 457+(eixo*i), 195)
                ctx.stroke();
                acertos++;
            }
        }
    }else{
        adicionaTentativa();
        quantidadesErros++;
        desenhaBoneco(quantidadesErros);
    }
    verificaFimJogo();
}

function adicionaTentativa(){
    if(!tentativas.includes(event.key)){
        tentativas = tentativas + event.key;
        ctx.font = "bold 20px Inter"
        var eixo = 500/palavraSecreta.length
        ctx.fillText(tentativas.toUpperCase(), 450, 250);
        ctx.stroke();
    }

}


function verificaFimJogo(){
    if(acertos == palavraSecreta.length){
        ctx.font = "bold 40px Inter"
        ctx.fillText("VOCÊ GANHOU!", 520, 50);
        window.onkeypress = null;
        console.log("Ganhei!");
        return;
    }
    if(quantidadesErros >= 6){
        ctx.font = "bold 40px Inter"
        ctx.fillText("GAME OVER!", 550, 50);
        window.onkeypress = null;
        console.log("Perdemo!");
        return;
    }
}

function desenhaTracos(){
    var eixo = 500/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++){
        ctx.moveTo(450+(eixo*i),200)
        ctx.lineTo(500+(eixo*i),200)
        ctx.stroke();
    }
}


function desenhaBoneco(quantidadesErros){
    switch (quantidadesErros){
        case 1:
            desenhoCabeca();
            break;
        case 2:
            desenhoCorpo();
            break;
        case 3:
            desenhoBracoD();
            break;
        case 4:
            desenhoBracoE();
            break;
        case 5:
            desenhoPernaD();
            break;
        case 6:
            desenhoPernaE();
            break;
    }
}
