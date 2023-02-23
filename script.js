//alert("Evento apenas para MAIORES DE 18 anos!")

function envio() {
    //alert("OK")
   var data = new Date()
   var ano = data.getFullYear()
   var nasc = document.getElementById('iano')
   var idade = ano - Number(nasc.value)
   let nome = document.getElementById('inome')
   let curso = document.getElementById('icurso')

   if (nome.value.length == 0 || curso.value.length != 3 || ano < nasc.value || nasc.value < 1950) {
    alert('Preencha todos os campos corretamente')
   }
   else {
    alert("Dados recebidos com sucesso!")
   }

   if (idade.value<18) {
    resposta.innerHTML = `Infelizmente você não tem a idade mínima para participar do trote. Sentimos muito.`
   }
   else {
    resposta.innerHTML = `Olá, ${nome}, calouro de ${curso}. Recebemos sua inscrição e as coisas que você topa e não topa fazer. Torcemos para que você tenha um excelente trote. Nos vemos no dia 8.`+ <br></br>
    `Seja bem vindo(a).`
    }
}