let numeroInserido = parseInt(prompt('Digite um número: '))
let soma = 0

for (let contador = 1; contador <= numeroInserido; contador++) {
    if(contador % 2 == 1) {
        document.getElementById('resposta').innerHTML += `${soma} + ${contador} = ${soma +=contador}<br>`
    }
}