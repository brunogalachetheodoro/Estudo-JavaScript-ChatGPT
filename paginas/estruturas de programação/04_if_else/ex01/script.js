let nota = parseInt(prompt('Insira sua nota de 0 a 100'))

if (nota >= 0 && nota <= 100) {
    if (nota >= 60){
        document.getElementById('resposta').innerHTML = 'Aprovado!'
    } else if (nota >= 40 && nota <= 59) {
        document.getElementById('resposta').innerHTML = 'Recuperação!'
    } else {
        document.getElementById('resposta').innerHTML = 'Reprovado!'
    }
} else  {
    alert('Insira um número válido!')
}