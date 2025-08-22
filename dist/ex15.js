"use strict";
// 15. Create a Library class that can store Book and User objects. Add method to add books.
class Book {
    id;
    title;
    author;
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
}
class User {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Library {
    books = [];
    users = [];
    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added to library.`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`User "${user.name}" added to library.`);
    }
    listBooks() {
        console.log("Books in Library:");
        this.books.forEach(b => {
            console.log(`- ${b.title} by ${b.author}`);
        });
    }
    listUsers() {
        console.log("Users in Library:");
        this.users.forEach(u => {
            console.log(`- ${u.name}`);
        });
    }
}
const library = new Library();
const book1 = new Book(1, "Clean Code", "Robert C. Martin");
const book2 = new Book(2, "Design Patterns", "Erich Gamma");
const user1 = new User(1, "Alice");
const user2 = new User(2, "Bob");
library.addBook(book1);
library.addBook(book2);
library.addUser(user1);
library.addUser(user2);
library.listBooks();
library.listUsers();
//# sourceMappingURL=ex15.js.map