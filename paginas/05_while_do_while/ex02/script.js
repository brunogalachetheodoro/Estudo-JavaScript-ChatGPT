let senha = 1234;

do {
    let senhaInserida = parseInt(prompt('Digite uma senha de 4 digitos: '))
    if(senhaInserida !== senha) {
        document.getElementById('resposta').innerHTML = 'Senha errada! Tente novamente.'

        setTimeout(() => {
            location.reload();
        },1000);
    } else {
        document.getElementById('resposta').innerHTML = 'Senha Correta! Acesso Liberado.'
    }
} while (senhaInserida !== senha)

