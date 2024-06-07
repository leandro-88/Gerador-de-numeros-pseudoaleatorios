function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if(quantidade > (ate - de + 1)){
        alert(`A quantidade de números deve ser menor ou igual a possibilidade dos números de sorteio. Não existe a quantidade ${quantidade} de ${de} - ${ate} = ${de - ate}.`);
    reiniciar();
    return;
}

    if(de >= ate){
        alert(`Erro! Valor "Do número" deve ser maior que o do "Até o número".`);
        reiniciar();
        return;
    }


    let sorteados = [];
    let numero;
    
    for(let i = 0; i < quantidade; i++) {
        numero = numeroAleatorio(de, ate);
            
            while(sorteados.includes(numero)){
                numero = numeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;
    habilitarBotaoReiniciar();
}

function habilitarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
}

function desabilitarBotaoReiniciar() {
    let botao = document.getElementById("btn-reiniciar");
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";

    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    desabilitarBotaoReiniciar();
}
