const divs = document.querySelectorAll(".itens");
const botao = document.getElementById("btnIniciar");
const pontos = document.getElementById("saidaPontos");
const meta = document.getElementById("saidaMeta");
const bntDificuldade = document.querySelectorAll(".btndificuldade");

let intervaloId = null;
let pontosI;
let metaI=0;
let velocidade = 500;

bntDificuldade.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const jaPressionado = btn.classList.contains('btndificuldade-pressionado');

    // Se já estiver pressionado, desmarca e libera todos os botões
    if (jaPressionado) {
      btn.classList.remove('btndificuldade-pressionado');
      bntDificuldade.forEach(b => b.style.pointerEvents = 'auto');
      return;
    }

    // Marca o botão clicado
    bntDificuldade.forEach(b => {
      b.classList.remove('btndificuldade-pressionado');
      b.style.pointerEvents = 'none'; // desativa todos primeiro
    });

    btn.classList.add('btndificuldade-pressionado');
    btn.style.pointerEvents = 'auto'; // reativa o atual

    // Define a velocidade com base na dificuldade
    if (index === 0) {
      velocidade = 1000; // Fácil
    } else if (index === 1) {
      velocidade = 500; // Médio
    } else if (index === 2) {
      velocidade = 300; // Difícil
    }
  });
});

botao.addEventListener('click', () => {
  if (botao.innerText === "Clique aqui Para Iniciar") {
    divs.forEach(div => {
      div.style.pointerEvents = "auto";
    });

    pontosI = 0;

    botao.innerText = "Resetar";
    bntDificuldade.forEach(b => b.style.pointerEvents = 'none');

    // Começa a escolher divs aleatórias a cada 1 segundo
    escolherDivAleatoria(); // Escolhe uma imediatamente
    intervaloId = setInterval(escolherDivAleatoria, velocidade); // depois a cada 1 segundo

  } else {
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
        //ACERTOU
        pontosI++;
        pontos.innerText = pontosI;
    } else {
        //ERROU
        alert('Você clicou no quadrado errado!');
        encerrarPrograma();
    }
  });
});

function encerrarPrograma() {
    botao.innerText = "Clique aqui Para Iniciar";
    bntDificuldade.forEach(b => b.style.pointerEvents = 'auto');
    bntDificuldade.forEach(b => b.classList.remove('btndificuldade-pressionado')); 
    
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