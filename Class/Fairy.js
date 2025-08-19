const Creature = require("./Creature.js");

class Fairy extends Creature {
  constructor() {
    super("Madrinha", "Bola de Luz Arco-Íris");
  }

  seApresentar() {
    return `eu sou ${this.nome} e tenho o ${this.ataqueMagico}`;
  }

  agir() {
    this.ataque(-10); // usa método ataque para diminuir energia
    return `${this.nome} ataca com ${this.ataqueMagico}`;
  }

  descansar() {
    this.ataque(15); // usa método ataque para recuperar energia
    console.log(`${this.nome} descansou. Energia restaurada!`);
  }
}

module.exports = Fairy;

// const Creature = require("./Creature.js");

// class Fairy extends Creature{

//  constructor(nome,ataqueMagico){
//    super("madrinha", "Bola de Luz Arco-Íris")
//  }
//  seApresentar(){
//    return `eu sou ${this.nome} e tenho o ${this.ataqueMagico}`
// }
// agir(){
//    this.ataque(-10) 
//    return `${this.nome}ataca com${this.ataqueMagico}`
// }
// descansar(){
//    this.ataque(15)
//    console.log(`${this.nome}descansou. Energia restaurada!`);
// }
// }

// module.exports = Fairy;