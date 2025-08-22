// 15. Create a Library class that can store Book and User objects. Add method to add books.

class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string
  ) {}
}

class User {
  constructor(
    public id: number,
    public name: string
  ) {}
}

class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Book "${book.title}" added to library.`);
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log(`User "${user.name}" added to library.`);
  }

  listBooks(): void {
    console.log("Books in Library:");
    this.books.forEach(b => {
      console.log(`- ${b.title} by ${b.author}`);
    });
  }

  listUsers(): void {
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
