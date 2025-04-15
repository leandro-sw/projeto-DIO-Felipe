
class heroi {
    constructor (nome, idade, tipo){
        this.name = nome
        this.age = idade
        this.tipo = tipo
    }

    atacar (){
        let poderes = ""

        switch (this.tipo){
            case "mago" :
                poderes = "a magia de bola de fogo"
                break
                case "guerreiro":
                poderes = "a espada"
                break
                case "monge":
                    poderes = "artes marciais"
                    break
                    case "ninja":
                        poderes = "shurikens"

        }
        console.log (`O ${this.tipo} atacou usando ${poderes}`)
        
    }
}
let modoAtaque = new heroi ("davi", 21, "mago")
modoAtaque.atacar ()






