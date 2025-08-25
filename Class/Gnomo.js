const Creature = require("./Creature.js");

class Gnomo extends Creature {
  constructor() {
    super("Madrinha", "Chuva de Cogumelos Tóxicos");
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

module.exports = Gnomo;