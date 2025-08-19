class Creature {
    nome;
    ataqueMagico;
    #energia = 100;
  
    constructor(nome, ataqueMagico) {
      this.nome = nome;
      this.ataqueMagico = ataqueMagico;
    }
  
    getEnergia() {
      return this.#energia;
    }
  
    setEnergia(energia) {
      this.#energia = energia;
    }
  
    seApresentar() {
      return `eu sou ${this.nome} e tenho o ${this.ataqueMagico}`;
    }
  
    ataque(valor) {
      this.#energia += valor;
      return `sua energia agora é ${this.#energia}`;
    }
  
    agir() {
      this.#energia -= 10;
      return `${this.nome} ataca com ${this.ataqueMagico}`;
    }
  
    descansar() {
      this.#energia += 15;
      console.log(`${this.nome} descansou. Energia restaurada!`);
    }
  }
  
  module.exports = Creature;
// class Creature{
//     nome;
//     ataqueMagico;
//     #energia;

// constructor(nome,ataqueMagico){
//     this.nome = nome;
//     this.ataqueMagico = ataqueMagico
//     this.energia = 100;
// }
// getEnergia(){
//     return this.#energia;
// }
// setEnergia(){
//     this.#energia = energia
// }
// seApresentar(){
//     return `eu sou ${this.nome} e tenho o ${this.ataqueMagico}`
// }
// ataque(valor){
//     this.#energia += valor
//     return `sua energia agora é ${ataque}`
// }
// agir(){
//     this.#energia -= 10 
//     return `${this.nome}ataca com${this.ataqueMagico}`
// }
// descansar(){
//     this.#energia += 15
//     console.log(`${this.nome}descansou. Energia restaurada!`);
// }
// }
// module.exports = Creature;