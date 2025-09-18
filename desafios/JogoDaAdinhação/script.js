const divs = document.querySelectorAll(".itens");
const botao = document.getElementById("meuBotao");

let intervaloId = null;

botao.addEventListener('click', () => {
  if (botao.innerText === "Clique aqui Para Iniciar") {
    divs.forEach(div => {
      div.style.pointerEvents = "auto";
    });

    botao.innerText = "Resetar";

    // Começa a escolher divs aleatórias a cada 1 segundo
    escolherDivAleatoria(); // Escolhe uma imediatamente
    intervaloId = setInterval(escolherDivAleatoria, 1000); // depois a cada 1 segundo

  } else {
    botao.innerText = "Clique aqui Para Iniciar";

    divs.forEach(div => {
      div.style.pointerEvents = "none";
      div.removeAttribute('id'); // remove "correto" de todas
    });

    // Para a troca automática
    clearInterval(intervaloId);
    intervaloId = null;
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
      alert('Você clicou na div correta!');
    } else {
      alert('Você clicou na div errada!');
    }
  });
});