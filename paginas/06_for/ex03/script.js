let frutas = ['banana', 'manga', 'uva', 'morango', 'melancia'];

for(let contador = 0; contador < frutas.length; contador++) {
    document.getElementById('resposta').innerHTML += `${frutas[contador]} <br>`
}