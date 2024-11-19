idade = window.prompt('Qual a sua idade?')

if (idade < 18) {
    alert('Acesso Não Permitido!')
} else if (isNaN(idade)){
    alert('Insira um dado válido')
} else {
    alert ('Acesso permitido!')
}