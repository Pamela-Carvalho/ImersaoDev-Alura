var jogadores = [];

function adicionar(){
  var jogador = document.getElementById("jogador").value;
  if(jogador != ""){
    jogador ={
    posicao: "-",
    jogador: jogador,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
  }
  jogadores.push(jogador);
  // console.log(jogadores[0].jogador);
  exibirJogador(jogador);
  }
}

function exibirJogador(jogador){
  var aux;
  for(var i = 0; i < jogadores.length; i++){
    for(var j = 0; j < jogadores.length; j++){
      if(jogadores[i].pontos > jogadores[j].pontos){
        aux = jogadores[i];
        jogadores[i] = jogadores[j];
        jogadores[j] = aux;
      }  
    }
  }
  // for(var i = 0; i < jogadores.length; i++){
  //   console.log(jogadores[i].jogador);
  //   console.log(jogadores[i].pontos);
  // }
  
  var tabela = document.getElementById("dadosTabela");
  var html = "";
  for(var i = 0; i < jogadores.length; i++){
    jogadores[i].posicao = i + 1;
    
    if(jogadores[i].posicao == 1){
      jogadores[i].posicao = "<img src='https://cdn.icon-icons.com/icons2/924/PNG/512/Football_2-20_icon-icons.com_72099.png' >"
    }
    else if(jogadores[i].posicao == 2){
      jogadores[i].posicao = "<img src='https://cdn.icon-icons.com/icons2/924/PNG/512/Football_2-51_icon-icons.com_72068.png' >"
    }
    else if(jogadores[i].posicao == 3){
      jogadores[i].posicao = "<img src='https://cdn.icon-icons.com/icons2/924/PNG/512/Football_2-52_icon-icons.com_72070.png' >"
    }
    else{
       jogadores[i].posicao =  jogadores[i].posicao + "°";
    }
    
    html += "<tr><td>" + jogadores[i].posicao + "</td>";
    html += "<td>" + jogadores[i].jogador + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html += "<td><button onclick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    html += "<td><button onclick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    html += "<td><button onclick='adicionarEmpate()'>Empate</button></td></tr>";
  }
  tabela.innerHTML = html;
}

function calcularPontos (jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates;
  return pontos;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador)
  exibirJogador(jogador);
}

function adicionarEmpate() {
  for(var i = 0; i < jogadores.length; i++){
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calcularPontos(jogador)
  }
  exibirJogador(jogador);
}

function adicionarDerrota(i) {
   var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogador(jogador);
}
