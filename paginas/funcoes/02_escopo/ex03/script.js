
function mostrar() {
    for(let i = 0; i < 3; i++) {
        const j = i*2;
        document.getElementById('resposta').innerHTML=`O valor de i é ${i} e j é ${j} dentro do laço for.<br>`
    }
    
    document.getElementById('resposta').innerHTML += `O valor de i fora do laço for é ${i}<br>`
    
    document.getElementById('resposta').innerHTML += `O valor de j fora do laço for é ${j}`
}