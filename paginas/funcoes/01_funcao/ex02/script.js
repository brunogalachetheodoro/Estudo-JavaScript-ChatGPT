function verificarPar() {
    let numero = parseFloat(document.getElementById('numero').value)

    if (numero % 2 == 0) {
        document.getElementById('resposta').innerHTML = `O número ${numero} é par`
    } else {
        document.getElementById('resposta').innerHTML = `O número ${numero} é impar`
    }
}