//começando o jogo
class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
    	let ataque

        if(this.tipo === "mago"){
            ataque = "magia"
        }else if(this.tipo === "guerreiro"){
             ataque = "espada"
        }else if(this.tipo === "monge"){
            ataque = "marciais"
        }else if(this.tipo === "ninja"){
             ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)

    }  

}

let heroi1 = new Heroi("Arus", 30, "mago")
heroi1.atacar()

let heroi2 = new Heroi("Jade", 35, "guerreiro")
heroi2.atacar()