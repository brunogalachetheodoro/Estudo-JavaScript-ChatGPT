let numeroUsuario = parseInt(prompt('Digite um número entre 1 a 10'))
let randomNumber =  Math.floor(Math.random() * 10) + 1;

/* if (numeroUsuario >= 1 && numeroUsuario <=10 && numeroUsuario === ran10domNumber) {
    document.getElementById('resposta').innerHTML = `Você acertou, o número ${numeroUsuario} é o correto!`
} else if (numeroUsuario < 1 && numeroUsuario >10){
    window.alert('Insira um número entre 1 á 10!')
} else {
    document.getElementById('resposta').innerHTML = `Que pena! O número seleiconado foi ${randomNumber}.`
} */

if (numeroUsuario >= 1 && numeroUsuario <=10) {
    if (numeroUsuario === randomNumber) {
        document.getElementById('resposta').innerHTML = `Você acertou, o número ${numeroUsuario} é o correto!`
    } else {
         document.getElementById('resposta').innerHTML = `Que pena! O número seleiconado foi ${randomNumber}.`
    }
}   else {
    window.alert ('Insira um número entre 1 e 10!')
}