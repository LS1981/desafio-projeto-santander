let nomeJogador = "Felipe"
let quantidadeXp = 1000

if (quantidadeXp < 1000){
    nivel = "Ferro";
}else if (quantidadeXp <= 2000){
    nivel = "Bronze"
}else if (quantidadeXp <= 5000){
    nivel = "Prata"
}else if (quantidadeXp <= 7000){
    nivel = "Ouro"
}else if (quantidadeXp <=8000){
    nivel = "Platina"
}else if (quantidadeXp <= 9000){
    cnivel = "Ascendente"
}else if (quantidadeXp <= 10000){
    cnivel = "Imortal"
}else{
    nivel = "Radiante"
}
    
    console.log(`O Herói de nome ${nomeJogador} está no nível de ${nivel}`)


