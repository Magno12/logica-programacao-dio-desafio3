class hero {
    constructor(name, age, tipo) {
        this.name = name;
        this.age = age;
        this.tipo = tipo;
    }

    atacar(ataque) {
        if (ataque != ""){
            console.log(`Nome: ${this.name} \n O ${this.tipo} atacou usando ${ataque} \n `)
        }else{
            console.log(`O ${this.name} \n TIPO: ${this.tipo} \n ATAQUE: INDEFINIDO \n` )
        }
    }
}


let heroMerlin = new hero("Merlin", 40, "mago");
heroMerlin.atacar(returnAtaque(heroMerlin.tipo));

let heroNinja = new hero("Naruto", 28, "ninja");
heroNinja.atacar(returnAtaque(heroNinja.tipo));

let heroGuerreiro = new hero("Meliodas", 38, "guerreiro");
heroGuerreiro.atacar(returnAtaque(heroGuerreiro.tipo));

let heroMonge = new hero("Tartaruga Ninja rafael", 38, "monge");
heroMonge.atacar(returnAtaque(heroMonge.tipo));

let heroLendario = new hero("Saitama", 30, "SuperForça");
heroLendario.atacar(returnAtaque(heroLendario.tipo));


function returnAtaque(ataque) {
    let ataqueHero = ""
    switch (ataque) {
        case "mago":
            ataqueHero = "sua magia"
            return ataqueHero;
        case "guerreiro":
            ataqueHero = "sua espada"
            return ataqueHero;
        case "monge":
            ataqueHero = "suas artes marciais"
            return ataqueHero;
        case "ninja":
            ataqueHero = "sua shuriken"
            return ataqueHero;
        default:
            ataqueHero = "";
            return ataqueHero;
    }
}

/* 
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
*/