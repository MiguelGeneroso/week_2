let {Person} = require("./persona");
let p = new Person();
class Contacts{

    constructor(){

        this.arrPersons = [];
    }

    printPersons(){

        for (let i = 0; i < this.arrPersons.length; i++){

            //console.log(this.arrPersons[i]);
            this.arrPersons[i].printAll();
            console.log("----------------------------------");
        }
    }
}

module.exports = {Contacts};