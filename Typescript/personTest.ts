import { Person } from "./person";

let p1 : Person = new Person();
let anio : Date = new Date();
console.log("Este es el atributo nombre: " + p1.name);
console.log("Este es el atributo edad: " + p1.age);
console.log("--------------------------------------");
p1.printName();
console.log("--------------------------------------");
console.log(p1.yearOfBirth(anio.getFullYear()));
console.log("--------------------------------------");
console.log(p1.getAddress());
p1.setAddress("Arturo Soria");
console.log(p1.getAddress());
console.log("--------------------------------------");

