let numeroInicial = parseInt(prompt('Digite o número inicial: '))

while (numeroInicial >= 0) {
    document.getElementById('resposta').innerHTML += numeroInicial + ', '
    numeroInicial--
}