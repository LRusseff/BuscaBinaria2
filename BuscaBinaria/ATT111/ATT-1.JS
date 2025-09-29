function buscaBinaria(arrayOrdenado, valorBuscado) {
  let inicio = 0
  let fim = arrayOrdenado.length - 1;

  for(; inicio <= fim;){

    let meio = Math.floor((inicio + fim) / 2);

    if (arrayOrdenado[meio] === valorBuscado) {
      return meio;
    }

    else if (valorBuscado < arrayOrdenado[meio]) {
      fim = meio - 1;
    }

    else {
      inicio = meio + 1;
    }
  }

  return -1;
}



let arrayJaOrdenado = [2, 3, 5, 6, 8, 10];
let esseEoValorQueBuscamos = 8;
let indiceDoValorBuscado = buscaBinaria(arrayJaOrdenado, esseEoValorQueBuscamos);

if (indiceDoValorBuscado !== -1) {
  console.log(`O valor ${esseEoValorQueBuscamos} está no índice ${indiceDoValorBuscado}`);
} else {
  console.log(`O valor ${esseEoValorQueBuscamos} não foi encontrado`);
}
