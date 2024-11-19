window.onload = function() {
    boasVindas()
}

function boasVindas() {
    let nomeUsuario = window.prompt('Olá, qual o seu nome?')
    document.getElementById('resposta').innerHTML = `Olá ${nomeUsuario}, seja bem-vindo!`
}