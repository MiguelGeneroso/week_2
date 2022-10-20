import { Book } from "./book";

let b : Book = new Book("La vida es una lenteja",2,"125413424-5241352342","JRRRRRRRRRRRR TOKIEN","MIO");



console.log(b.toString() + "\n");

b.setTitle("Introducción a Javascript");
b.setNPages(233);
b.setIsbn("2344433-BC23333");
b.setAuthor("Joseph Smith");
b.setEditorial("Now Editions");

console.log(b.toString());