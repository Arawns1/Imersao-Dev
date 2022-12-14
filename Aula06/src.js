var Rafa = {
  nome: "Rafa",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
};

var Paulo = {
  nome: "Paulo",
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return (jogador.pontos = pontos);
}

var jogadores = [Rafa, Paulo];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  console.log(tabelaJogadores);
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

console.log(jogadores);
calculaPontos(Rafa);
calculaPontos(Paulo);
exibeJogadoresNaTela(jogadores);
