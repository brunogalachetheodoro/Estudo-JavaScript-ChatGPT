let anoNasc = prompt('Qual o seu ano de nascimento?')

let idade = 2024 - anoNasc

if (idade >= 0 && idade < 120) {
    let suaIdade = `Sua idade é de ${2024 - anoNasc} anos!`
    document.getElementById('idade').innerHTML = suaIdade
} else {
    window.alert('Insira seus dados corretamente!')
    document.getElementById('idade').innerHTML = 'Insira seus dados corretamente!'

}