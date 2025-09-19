const divs = document.querySelectorAll(".itens");
const botao = document.getElementById("meuBotao");
const pontos = document.getElementById("saidaPontos");
const meta = document.getElementById("saidaMeta");

let intervaloId = null;

let pontosI;
let metaI=0;

botao.addEventListener('click', () => {
  if (botao.innerText === "Clique aqui Para Iniciar") {
    divs.forEach(div => {
      div.style.pointerEvents = "auto";
    });

    pontosI = 0;

    botao.innerText = "Resetar";

    // Começa a escolher divs aleatórias a cada 1 segundo
    escolherDivAleatoria(); // Escolhe uma imediatamente
    intervaloId = setInterval(escolherDivAleatoria, 800); // depois a cada 1 segundo

  } else {
	botao.innerText = "Clique aqui Para Iniciar";
    
	/* Para a troca automática */
    	encerrarPrograma();
  }
});

function escolherDivAleatoria() {
  // Remove o id "correto" de todas as divs
  divs.forEach(div => div.removeAttribute('id'));

  // Escolhe uma aleatória
  const indexAleatorio = Math.floor(Math.random() * divs.length);
  divs[indexAleatorio].id = 'correto';
}

divs.forEach(div => {
  div.addEventListener('click', () => {
    if (div.id === 'correto') {
      
      pontosI++;
      pontos.innerText = pontosI;
    } else {
      alert('Você clicou na div errada!');
      encerrarPrograma();
    }
  });
});

function encerrarPrograma() {

    botao.innerText = "Clique aqui Para Iniciar";
    
    divs.forEach(div => {
      div.style.pointerEvents = "none";
      div.removeAttribute('id'); // remove "correto" de todas
    });

    clearInterval(intervaloId);
    intervaloId = null;

    if (pontosI > metaI) {
	metaI = pontosI;
     }

    pontos.innerText = pontosI;
    meta.innerText = metaI;   
}