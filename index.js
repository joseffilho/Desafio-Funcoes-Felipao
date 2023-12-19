


function resultPlayer(vitoria, derrota) {
  return vitoria - derrota
}
let result = resultPlayer(25, 20)
let nivel = ""
  
if (result <= 10) {
  nivel = "FERRO"
} else if (result >= 11 && result <= 20) {
    nivel = "BRONZE"
} else if (result >= 21 && result <= 50) {
    nivel = "PRATA"
} else if (result >= 51 && result <= 80) {
  nivel = "OURO"
} else if (result >= 81 && result <= 90) {
  nivel = "DIAMANTE"
} else if (result >= 91 && result <= 100) {
  nivel = "LENDARIO"
} else {
  nivel = "IMORTAL"
}
console.log("O Herói tem um saldo de: " + result + " e está no nivel de: " + nivel)


