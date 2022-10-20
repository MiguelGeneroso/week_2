export class Person {

    public name : string;
    public age : number;
    private address : string;

    constructor(){

        this.name = "Miguel";
        this.age = 26;
        this.address = "Encomienda de Palacios "
    }

    public printName() : void{
        console.log(this.name);
    }
    
    public yearOfBirth(currentYear : number) : number{
        
        return currentYear - this.age;
    }

    public setAddress(address : string){
        
        this.address = address;
        
    }

    public getAddress() : string {
        
        return this.address;
    }


}
