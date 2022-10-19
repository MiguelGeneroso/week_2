class Person{

    constructor(nombre,apellido1,apellido2,anioNacimiento,dni,pesoKg,alturaM,hobbies){
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.anioNacimiento = anioNacimiento;
        this.dni = dni;
        this.pesoKg = pesoKg;
        this.alturaM = alturaM;
        this.hobbies = hobbies;
    }

    calcularIMC(){

        return "IMC = " + (this.pesoKg / Math.pow(this.alturaM,2));
    }

    calcularEdad(){
        let anio = new Date();
        anio = anio.getFullYear();
        return "Edad: " + (anio-this.anioNacimiento);
    }

    printAll(){

        /*for (let p in this){
            console.log(p + " - " + this[p]);
        }*/

        console.log("Nombre - " + this.nombre);
        console.log("Primer apellido - " + this.apellido1);
        console.log("Segundo apellido - " + this.apellido2);
        console.log("Año de nacimiento - " + this.anioNacimiento);
        console.log("DNI - " + this.dni);
        console.log("Peso - " + this.pesoKg);
        console.log("Altura - " + this.alturaM);
        console.log("Hobbies - " + this.hobbies);
        
    }

    printHobbies(){
        
        for(let i = 0; i < this.hobbies.length; i++){

            console.log(this.hobbies[i]);
        }
    }

}

let p = new Person("Miguel","Generoso","Valero",1996,"50901287X",114,1.81,["jugar","musica","leer","comer"]);

//console.log(p.calcularIMC());
//console.log(p.calcularEdad());
//p.printAll();
//p.printHobbies();

module.exports = {Person};