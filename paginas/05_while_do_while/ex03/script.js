let numeroInserido = parseInt(prompt('Insira um número: '))
let contador = 1
let soma = 0
while(contador <= numeroInserido) {
    if(contador % 2 == 0) {
        soma += contador
        document.getElementById('resposta').innerHTML += `${soma} + ${contador} = ${soma},`
    }
    contador++
}