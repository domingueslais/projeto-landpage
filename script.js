//alert("Evento apenas para MAIORES DE 18 anos!")

function inscricao() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var resposta = document.getElementById('resposta')
    var idade

    if (Number=(fano.value)>ano){
        alert("ERRO. Ano inválido.")
    }
    else if {
        idade = ano - Number(fano.value)
        resposta.innerHTML = `Sua idade é ${idade}, para participar, é necessário ter 18 anos ou mais.`
    }
}