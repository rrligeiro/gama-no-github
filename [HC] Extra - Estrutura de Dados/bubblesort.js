// Implementando o algoritimo de ordenação bubble sort.

var valores = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("O vetor sem ordenar = " + valores);

function ordenar(){
    let inicio = 0;
    let fim = valores.length - 1;
    let tmp;
    
    for(vezes = 0; vezes < (valores.length - 1); vezes++){
        for(pos = inicio; pos < fim; pos++){
            if(valores[pos] > valores[pos + 1]){
                tmp = valores[pos];
                valores[pos] = valores[pos + 1];
                valores[pos + 1] = tmp;
            }
        }
    }
}

ordenar();
console.log("O vetor ordenado = " + valores);