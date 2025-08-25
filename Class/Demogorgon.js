const Creature = require("./Creature.js");

class Demogorgon extends Creature {
  constructor() {
    super("Madrinha", "Poderdo Abismo");
  }

  seApresentar() {
    return `eu sou ${this.nome} e tenho o ${this.ataqueMagico}`;
  }

  agir() {
    this.ataque(-25); // usa método ataque para diminuir energia
    return `${this.nome} ataca com ${this.ataqueMagico}`;
  }

  descansar() {
    this.ataque(15); // usa método ataque para recuperar energia
    console.log(`${this.nome} descansou. Energia restaurada!`);
  }
}

module.exports = Demogorgon;