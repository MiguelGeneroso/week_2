class Contacts{

    constructor(){

        this.arrPersons = [];
    }

    printPersons(){

        for (let i = 0; i < this.arrPersons.length; i++){

            console.log(this.arrPersons[i]);
        }
    }
}

module.exports = {Contacts};