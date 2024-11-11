// Variáveis indicando nomes
let nickName = "Elandor"
let xpDoJogador = 8.777;

// Usando array de objetos e não matriz, para indicar as classificações
let rankings = [
  { xp: [0, 1.000], ranking: "Ferro!" },
  { xp: [1.001, 2.000], ranking: "Bronze!" },
  { xp: [2.001, 5.000], ranking: "Prata!" },
  { xp: [5.001, 7.000], ranking: "Ouro!" },
  { xp: [7.001, 8.000], ranking: "Platina!" },
  { xp: [8.001, 9.000], ranking: "Ascendente!"},
  { xp: [9.001, 10.000], ranking: "Imortal!"},
  { xp: [10.001, 12.000], ranking: "Radiante!"}

];

// Loop para verificar em qual linha xpDoJogador se encaixa
for (let i = 0; i < rankings.length; i++) {
  if (xpDoJogador >= rankings[i].xp[0] && xpDoJogador <= rankings[i].xp[1]) {
    ranking = rankings[i].ranking;
    break; // Interrompe o loop assim que encontrar o ranking
  }
}
// Concatenando o nome + o ranking encontrado
console.log("O Heroi de nome " + nickName, "está no nível de " + ranking);