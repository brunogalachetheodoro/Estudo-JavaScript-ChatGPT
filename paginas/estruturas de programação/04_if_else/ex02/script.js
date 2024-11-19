function clicar() {
    let preco = parseFloat(document.getElementById('preco').value)

    if(preco >= 100) {
        preco = preco - (preco * 20/100)
        document.getElementById('resposta').innerHTML = `O valor com desconto é igual a: R$${preco}`
    } else if (preco >=50 && preco <=100 ) {
        preco = preco - (preco * 10/100)
        document.getElementById('resposta').innerHTML = `O vlaor com desconto é igual a R$${preco}`
    } else {
        document.getElementById('resposta').innerHTML = `Sem desconto para o valor de R$${preco}!`
    }
}