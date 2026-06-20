const botoes = document.querySelectorAll(".botao");
const cartas = document.querySelectorAll(".carta");

botoes[0].addEventListener("click", () => {
    mudarcarta (0)
})

botoes[1].addEventListener("click", () => {
    mudarcarta (1)
})

function recuperaposicaoatual () {
    return Array.from(cartas).findIndex(carta => carta.classList.contains("selecionada"));
}

function removerclasse () {
    const classeselecionada = document.querySelector(".carta.selecionada");
    classeselecionada.classList.remove("selecionada");
}

function mudarcarta (botao) {
    const posicaoatual = recuperaposicaoatual();
    const tamanhoatual = cartas.length;
    let novaposicao;

    if (botao == 0) {
        //voltar
        if (posicaoatual - 1 < 0) {
            novaposicao = tamanhoatual - 1;
        }else {
            novaposicao = posicaoatual - 1;
        }
    }else {
        //avancar
        if (posicaoatual + 1 >= tamanhoatual) {
            novaposicao = 0;
        }else {
            novaposicao = posicaoatual + 1;
        }
    }
    
    removerclasse();
    cartas[novaposicao].classList.add("selecionada");
}