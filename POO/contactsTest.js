let {Contacts} = require("./contacts");
let {Person} = require("./persona");

let p = new Person("Miguel","Generoso","Valero",1996,"50901287X",114,1.81,["jugar","musica","leer","comer"]);
let p2 = new Person("Adrian","Generoso","Valero",1989,"5090128U",100,1.79,["jugar","musica","leer","comer"]);
let p3 = new Person("Diego","Generoso","Diaz",1956,"50901287V",90,1.81,["jugar","musica","leer","comer"]);
let p4 = new Person("Mercedes","Valero","Jimenez",1965,"50901287W",80,1.81,["jugar","musica","leer","comer"]);

let c = new Contacts();
c.arrPersons.push(p);
c.arrPersons.push(p2);
c.arrPersons.push(p3);
c.arrPersons.push(p4);

c.printPersons();
