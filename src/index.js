let nickname = "Elandor"
let xpDoJogador = 8.777
let ranking

if(xpDoJogador >= 0 && xpDoJogador <= 1.000){ranking = "Ferro!";
} else if(xpDoJogador >= 1.001 && xpDoJogador <= 2.000){ranking = "Bronze!"
} else if(xpDoJogador >= 2.001 && xpDoJogador <= 5.000){ranking = "Prata!"
} else if(xpDoJogador >= 5.001 && xpDoJogador <= 7.000){ranking = "Ouro!"
} else if(xpDoJogador >= 7.001 && xpDoJogador <= 8.000){ranking = "Platina!"
} else if(xpDoJogador >= 8.001 && xpDoJogador <= 9.000){ranking = "Ascendente!"
} else if(xpDoJogador >= 9.001 && xpDoJogador <= 10.000){ranking = "Imortal!"
} else {ranking = "Radiante!"}

console.log("O Heroi de nome " + nickname, "está no nível de " + ranking)