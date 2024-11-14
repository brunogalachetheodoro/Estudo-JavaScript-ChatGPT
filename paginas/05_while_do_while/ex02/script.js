let senha = 1234

do {
    let senhaInserida = parseInt(prompt('Digite uma senha de 4 digitos: ').value)
    document.getElementById('resposta').innerHTML = 'Senha errada! Tente novamente'
} while (senhaInserida =! 1234)