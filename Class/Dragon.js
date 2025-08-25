const Creature = require("./Creature.js");

class Dragon extends Creature {
  constructor() {
    super("Madrinha", "Sopro de Fogo Infernal");
  }

  seApresentar() {
    return `eu sou ${this.nome} e tenho o ${this.ataqueMagico}`;
  }

  agir() {
    this.ataque(-30); // usa método ataque para diminuir energia
    return `${this.nome} ataca com ${this.ataqueMagico}`;
  }

  descansar() {
    this.ataque(15); // usa método ataque para recuperar energia
    console.log(`${this.nome} descansou. Energia restaurada!`);
  }
}

module.exports = Dragon;


























// const Creature = require("./Creature.js");

// class Fairy extends Creature{

//  constructor(nome,ataqueMagico){
//    super("montanha", "Sopro de Fogo Infernal.")
//  }
//  seApresentar(){
//    return `eu sou ${this.nome} e tenho o ${this.ataqueMagico}`
// }
// agir(){
//    this.ataque(-30) 
//    return `${this.nome}ataca com${this.ataqueMagico}`
// }
// descansar(){
//    this.ataque(15)
//    console.log(`${this.nome}descansou. Energia restaurada!`);
// }
// }

// module.exports = Dragon;