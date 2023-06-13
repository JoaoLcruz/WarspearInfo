function MostrarPontos() {
    console.log("to maluco!");
    fetch(`/grafico/quizValores`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
          response.json().then(function (resposta) {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
    
            Mostrar(resposta)
    
          });
        } else {
          console.error('Nenhum dado encontrado ou erro na API');
        }
      })
        .catch(function (error) {
          console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
     }
     MostrarPontos()

function Mostrar(resposta) {
    for (i = 0; i < resposta.length; i++) {
        var jogadorPontos = resposta[i]
        var jogadorAtual = resposta[i]
        div_jogadores.innerHTML += `<span style="color: green;">${i+1}</span> - ${jogadorAtual.nome} - <span style="color: blue;">${jogadorPontos.pto}</span><br>`
    }
}