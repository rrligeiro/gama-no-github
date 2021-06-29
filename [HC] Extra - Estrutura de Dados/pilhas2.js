// Implementação de uma pilha em JS

var elementos = [];
var topo = -1;
const MAX = 10000;

function push(num){
    if (topo < MAX){
        topo = topo +1;
        elementos[topo] = num;
    } else {
        console.log("A pilha está cheia!");
    }
}

function pop(){
    if (topo != -1){
        let num = elementos[topo];
        topo = topo - 1;
        return num;
    } else {
        console.log("A pilha esta vazia!");
    }
}

function estaVazia(){
    return topo == -1;
}

//Utilizando a pilha para converter números de decimal para binário.

var numeroParaConverter = 300;
var numeroEmBinario = [];
var guardarNum = numeroParaConverter;
var resto;

while (numeroParaConverter != 0){
    resto = parseInt(numeroParaConverter % 2);
    push(resto);
    numeroParaConverter = parseInt(numeroParaConverter / 2);
}

for (i = 0; i < elementos.length; i++){
    numeroEmBinario[i] = pop();
}

console.log("O número " + guardarNum + " em binário é: " + numeroEmBinario);