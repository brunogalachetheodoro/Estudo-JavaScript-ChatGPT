let grausCelcius = window.prompt('Quantos graus está fazendo?')

if (isNaN(grausCelcius)) {
    window.alert('Por favor, insira um número válido!')
} else {
    let grausConvertidos = `O valor de ${grausCelcius}º graus celcius convertidos para Fahrenheit é ${grausCelcius * 1.8 + 32}!`
    document.getElementById('fahrenheit').innerHTML = grausConvertidos
}