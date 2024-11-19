

function clicar() {
    let altura = parseFloat(document.getElementById('altura').value.replace(',','.'))
    let largura = parseFloat(document.getElementById('largura').value.replace(',','.'))
    let resposta
    if (isNaN(altura) || isNaN(largura)){
        document.getElementById('resposta').innerHTML = 'Por favor, insira valores válidos!'
    }
    else {
        resposta = altura * largura
        document.getElementById('resposta').innerHTML = `A área é igual a ${resposta}m²`
    }
}