let resultado = StatusPartida (200,21)
let heroi = "Davi Santos"
let nivel = ""

function StatusPartida (vitorias,derrotas){
  let quantidade = vitorias - derrotas
  return quantidade
}
  
  switch (true){
      case resultado < 10:
        nivel = "Ferro"
        break
        case resultado < 21:
        nivel = "Bronze"
        break
        case resultado < 51:
        nivel = "Prata"
        break
        case resultado < 81:
        nivel = "Ouro"
        break
        case resultado < 91:
        nivel = "Diamante"
        break
        case resultado < 101:
        nivel = "Lendário"
        break
        default :
        nivel = "Imortal"

}

console.log ("O heroi " + heroi + " tem saldo de " + resultado + " vitorias e está no nivel " + nivel)