    let v1 = parseFloat(prompt ('Digite o valor 1:'))
    let v2 = parseFloat(prompt ('Digite o valor 2:'))

    let soma=(v1,v2)=>{
        document.getElementById('resposta').innerHTML = `A soma de ${v1} e ${v2} é igual a ${v1 + v2}`
    }

    soma(v1,v2)