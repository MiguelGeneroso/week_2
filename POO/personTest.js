let {Person} = require("./persona");

let p = new Person("Miguel","Generoso","Valero",1996,"50901287X",114,1.81,["jugar","musica","leer","comer"]);

console.log(p.calcularEdad());
console.log("--------------------");
console.log(p.calcularIMC());
console.log("--------------------");
p.printAll();
console.log("--------------------");
p.printHobbies();