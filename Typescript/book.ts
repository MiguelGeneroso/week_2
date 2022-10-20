export class Book{

    

    constructor (private title : string,
        private nPages : number,
        private isbn : string,
        private author : string,
        private editorial : string){
    }

    public getTitle() : string {

        return this.title;
    }

    public getnPages() : number {

        return this.nPages;
    }

    public getIsbn() : string {

        return this.isbn;
    }

    public getAuthor() : string {

        return this.author;
    }

    public getEditorial() : string {

        return this.editorial;
    }

    public setTitle(t : string) : void {
        this.title = t;
    }

    public setNPages(n : number) : void {
        this.nPages = n;
    }

    public setIsbn(t : string) : void {
        this.isbn = t;
    }

    public setAuthor(t : string) : void {
        this.author = t;
    }
    
    public setEditorial(t : string) : void {
        this.editorial = t;
    }

    public toString() : string {

        return "Title - " + this.title + "\nNumber of Pages - " + this.nPages +
                "\nISBN - " + this.isbn + "\nAuthor - " + this.author + 
                "\nEditorial - " + this.editorial;
    }
}


