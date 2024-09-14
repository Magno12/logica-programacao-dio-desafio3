class hero {
    constructor(name, age, tipo) {
        this.name = name;
        this.age = age;
        this.tipo = tipo;
    }

    atacar(ataque) {
        if (ataque != "" && ataque != undefined) {
            console.log(`Nome: ${this.name} \n O ${this.tipo} atacou usando ${ataque} \n `)
        } else {
            console.log(`O ${this.name} \n TIPO: ${this.tipo} \n ATAQUE: INDEFINIDO \n`)
        }
    }
}

let listHerois = {
    0: ["Merlin", 40, "mago"],
    1: ["Meliodas", 38, "guerreiro"],
    2: ["Sasuki", 28, "ninja"],
    3: ["Rock lee", 34, "monge"],
    4:["Mestre dos Magos",80,"mago"],
    5:["Saitama",30,"Super Forca"]
    
}

for (let index in listHerois) {
    let herois = new hero(listHerois[index][0], listHerois[index][1], listHerois[index][2]);
    let ataque = listHerois[index][2];
    herois.atacar(returnAtaque(ataque));
    //console.log("index",listHerois[index][2])
}
//let a = returnAtaque("d")
//console.log("aa", a)

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

}