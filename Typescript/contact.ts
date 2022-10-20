import { Person } from "./person";

let p : Person = new Person();
let p1 : Person = new Person();
let p2 : Person = new Person();
let p3 : Person = new Person();

export class Contacts{

    
    public people : Person[];
    constructor(){

        this.people = [p,p1,p2,p3];
    }

    printCalendar(){
        //Imprime por consola los datos de todas las personas de la agenda.
        let anio : Date = new Date();
        for (let i = 0; i < this.people.length; i++){
            //console.log(this.people[i]);
            
            this.people[i].printName();
            console.log(this.people[i].yearOfBirth(anio.getFullYear()));
            console.log(this.people[i].getAddress());
            console.log("--------------------------------------------");
            
        }
    }
}