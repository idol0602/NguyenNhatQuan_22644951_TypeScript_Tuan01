declare class Book {
    id: number;
    title: string;
    author: string;
    constructor(id: number, title: string, author: string);
}
declare class User {
    id: number;
    name: string;
    constructor(id: number, name: string);
}
declare class Library {
    private books;
    private users;
    addBook(book: Book): void;
    addUser(user: User): void;
    listBooks(): void;
    listUsers(): void;
}
declare const library: Library;
declare const book1: Book;
declare const book2: Book;
declare const user1: User;
declare const user2: User;
//# sourceMappingURL=ex15.d.ts.map