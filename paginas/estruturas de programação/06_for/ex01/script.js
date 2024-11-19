let numeroUsuario = parseInt(prompt('Insira um número: '))

for(let contador = 1; contador <= 10; contador++) {
    document.getElementById('resposta').innerHTML += `${numeroUsuario} x ${contador} = ${numeroUsuario * contador}<br>`
}