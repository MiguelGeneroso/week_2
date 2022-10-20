let {Vector} = require("./vector");
let {Matrix} = require("./matrix");

let v = new Vector();
let v2 = new Vector();
let v3 = new Vector();
let v4 = new Vector();
let m = new Matrix();

//m.Constructor(5,5,10);
m.arrVector.push(v.Constructor(5,10));
m.arrVector.push(v2.Constructor(5,10));
m.arrVector.push(v3.Constructor(5,10));
m.arrVector.push(v4.Constructor(5,10));
//console.log(m.arrVector);
m.add([[1,2,3,4,5],[6,2,2,4,1],[62,2,4,4,13],[1,35,3,232,5],[55,2,23,4,54]]);