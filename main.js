const Fairy = require("./Class/Fairy.js/Dragon.js/Gnomo.js/Demogorgon.js");

let fada1 = new Fairy();

console.log(fada1.agir());        
console.log(fada1.seApresentar()); 
fada1.descansar();

let fada2 = new Dragon();

console.log(fada2.agir());        
console.log(fada2.seApresentar()); 
fada1.descansar();

let fada3 = new Gnomo();

console.log(fada3.agir());        
console.log(fada3.seApresentar()); 
fada1.descansar();

let fada4 = new Demogorgon();

console.log(fada4.agir());        
console.log(fada4.seApresentar()); 
fada1.descansar();
