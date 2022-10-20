import { Book } from "./book";

let b1 : Book = new Book("La vida es una lenteja",2,"125413424-5241352342","JRRRRRRRRRRRR TOKIEN1","MIO");
let b2 : Book = new Book("La vida es una lenteja",2,"125413424-5241352342","JRRRRRRRRRRRR TOKIEN2","MIO");
let b3 : Book = new Book("La vida es una lenteja",2,"125413424-5241352342","JRRRRRRRRRRRR TOKIEN3","MIO");
let b4 : Book = new Book("La vida es una lenteja",2,"125413424-5241352342","JRRRRRRRRRRRR TOKIEN1","MIO");

export class Library{

    private books : Book[];
    private address : string;
    private manager : string;
    constructor(){
        this.books = [b1,b2,b3,b4]
    }

    public getAddress() : string{

        return this.address;
    }

    public setAddress(t : string) : void{

        this.address = t;
    }

    public getManager() : string{

        return this.manager;
    }

    public setManager(t : string) : void{

        this.manager = t;
    }

    public toString() : string {

        let result : string = "";

        for(let i = 0; i < this.books.length; i++){

            result += "Book" + (i+1) + ":\n" + this.books[i].toString() + "\n\n";
        }
        return result;
    }

    public getNumberOfBooks() : number {

        return this.books.length;

    }

    public findByAuthor(author : string) : Book[] {

        let b : Book[] = [];
        for (let i = 0; i < this.books.length; i++){

            if (this.books[i].getAuthor() == author){

                b.push(this.books[i]);

            }
        }

        return b;

    }


}

