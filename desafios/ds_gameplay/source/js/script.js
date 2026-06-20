const botoes = document.querySelectorAll(".botao");
const cartas = document.querySelectorAll(".carta");

botoes.forEach((botao, indice)  => {
    botao.addEventListener("click", () => {
        mudarcarta(indice);
    })
})

function recuperaposicaoatual () {
    return Array.from(cartas).findIndex(carta => carta.classList.contains("selecionada"));
}

function removerclasse () {
    const classeselecionada = document.querySelector(".carta.selecionada");
    classeselecionada.classList.remove("selecionada");
}

function mudarcarta (botao) {
    const posicaoAtual = recuperaposicaoatual();
    const tamanho = cartas.length;

    // botao 0 = voltar | qualquer outro = avançar
    const direcao = botao === 0 ? -1 : 1;

    const novaPosicao = (posicaoAtual + direcao + tamanho) % tamanho;

    removerclasse();
    cartas[novaPosicao].classList.add("selecionada");
}