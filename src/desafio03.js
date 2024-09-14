class hero {
    constructor(name, age, tipo) {
        this.name = name;
        this.age = age;
        this.tipo = tipo;
    }

    atacar(ataque) {
        if (ataque != "") {
            console.log(`Nome: ${this.name} \n O ${this.tipo} atacou usando ${ataque} \n `)
        } else {
            console.log(`O ${this.name} \n TIPO: ${this.tipo} \n ATAQUE: INDEFINIDO \n`)
        }
    }
}

let hero1 = new hero("magno", 28, "mago")
hero1.atacar(returnAtaque(hero1.tipo))



let listHerois = {
    0: ["Merlin", 40, "mago"],
    1: ["Meliodas", 38, "guerreiro"],
    2: ["Sasuki", 28, "ninja"],
    3: ["Rock lee", 34, "monge"]
}

let a = returnAtaque("d")
console.log("aa", a)

function returnAtaque(ataque) {
    let ataqueHeroi = ""

    if (ataque === "mago")
        ataqueHeroi = "Sua magia";
    else if (ataque === "monge")
        ataqueHeroi = "Sua Artes Marciais"
    else if (ataque === "ninja")
        ataqueHeroi = "Sua Shuriken"
    else if (ataque === "guerreiro")
        ataqueHeroi = "Sua Espada"
    else
        ataqueHeroi = undefined;

    return ataqueHeroi;

    /* se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken) */
}