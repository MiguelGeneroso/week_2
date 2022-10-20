import { Vector } from "./vector";

let v : Vector = new Vector(4,5);
let v2 : Vector = new Vector(4,5);
console.log(v);
console.log(v2);

console.log("__________SUMA__________");
console.log(v.add(v2));
console.log("__________RESTA__________");
console.log(v.subs(v2));
console.log("__________MULTIPLICACION__________");
console.log(v.mult(v2));
console.log("__________MULTIPLICACION2__________");
console.log(v.multNumber(4));


