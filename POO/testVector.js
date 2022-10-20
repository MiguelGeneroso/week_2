let {Vector} = require("./vector")

let v = new Vector();

console.log(v.Constructor(5,10));
console.log("________SUMAR VECTOR_________");
v.add([1,1,1,1,1]);
console.log("________MULTIPLICACION_______");
v.productNum(Math.floor(Math.random() * 11));
console.log("____________RESTA____________");
v.subs([1,1,1,1,1]);
console.log("___MULTIPLICACION VECTORES___");
v.product([2,2,2,2,2]);