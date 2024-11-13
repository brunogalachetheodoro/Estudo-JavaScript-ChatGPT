function clicar() {
    let numeroInserido = parseFloat(document.getElementById('numeroInserido').value)
    let raizQ = Math.sqrt(numeroInserido)

    document.getElementById('resposta').innerHTML = `O valor da raiz quadrada de ${numeroInserido} é ${raizQ}`
}