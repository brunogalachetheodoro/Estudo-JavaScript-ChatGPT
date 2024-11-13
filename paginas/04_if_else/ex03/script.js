let idade = parseInt(prompt('Qual a sua idade?'))

if (idade < 12) {
    document.querySelector('#resposta').innerHTML = 'Criança!'
} else if (idade > 12 && idade < 17) {
    document.querySelector('#resposta').innerHTML = 'Adolescente!'
} else if ( idade >= 18 && idade <= 64) {
    document.querySelector('#resposta').innerHTML = 'Adulto!'
} else {
    document.querySelector('#resposta').innerHTML = 'Idoso' 
}