let numeros = [1,7,3,25,4,12,8,91]

let maiorQueDez = numeros.filter(numero => numero > 10)

document.getElementById('resposta').innerHTML = `Os números maiores que dez são ${maiorQueDez}`