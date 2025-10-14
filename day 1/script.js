const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCapitulo = document.getElementById("proximo");
const botaoCapituloAnterior = document.getElementById("anterior");
const audio = document.getElementById("audio-capitulo");
const capitulo = document.getElementById("capitulo");
const qtdCapitulo = 10
let taTocando = false;
let capituloAtual = 1;
function tocarFaixa(){
    audio.play();
    taTocando = true;

    botaoPlayPause.classList.add("tocando");
}

function pausaFaixa(){
    audio.pause();
    taTocando = false;

    botaoPlayPause.classList.remove("tocando")
}

function tocarOuPausar(){
    if(taTocando === true){
        pausaFaixa();
    } else{
        tocarFaixa();
    }
}

function proximoCapitulo(){
    pausaFaixa()
    if (capituloAtual < qtdCapitulo){
        capituloAtual += 1
    }
    else{
        capituloAtual = 1;
    }

    audio.src = "./audios/" + capituloAtual + ".mp3";
    capitulo.innerText = "Capitulo " + capituloAtual; 
}
function capituloAnterio(){
    pausaFaixa()
  if (capituloAtual === 1){
        capituloAtual = qtdCapitulo;
    }
    else{
        capituloAtual -= 1;
    }  
    audio.src = "./audios/" + capituloAtual + ".mp3";
    capitulo.innerText = "Capitulo " + capituloAtual; 
}

botaoPlayPause.addEventListener("click", tocarOuPausar)
botaoProximoCapitulo.addEventListener("click", proximoCapitulo)
botaoCapituloAnterior.addEventListener("click", capituloAnterio)