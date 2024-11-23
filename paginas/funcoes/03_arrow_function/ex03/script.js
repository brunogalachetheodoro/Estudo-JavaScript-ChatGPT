let nomes = ['Bruno','Jonas','Anderson','Fabrício','José','Luis']

nomes.sort((a,b)=> a.localeCompare(b))

document.getElementById('resposta').innerHTML = `Os elementos em ordem são: ${nomes}`