// Implementando um algoritimo de busca binária.

var tamanhoVetor = 10000;
var numeroProcurado = 64;

var valores = [];
for(i = 0; i < tamanhoVetor; i++){
    valores[i] = i;
}

console.log("O vetor é: " + valores);

function buscaBinaria(num){
    let inicio = 0;
    let fim = valores.length - 1;
    let meio;
    let passos = 0;

    while(inicio <= fim){
        meio = parseInt((inicio + fim) / 2);
        passos = passos +1;

        if ( num == valores[meio]){
            console.log("Em um vetor com " + tamanhoVetor + " elementos, levei " + passos + " passos para encontrar o valor desejado!")
            return meio;
        } else {
            if (num > valores[meio]){
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }
    }
    return -1;
}

var busca = buscaBinaria(numeroProcurado);

if (busca == -1){
    console.log("Elemento não encontrado!");
} else {
    console.log("O elemento " + busca + " foi encontrado no vetor!");
}