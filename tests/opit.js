
class Bookstore {
  constructor(Book) {
    this.books = Book;
  }

  listBooks(){
    this.books.forEach((book) => {
      console.log(`${book.name} by ${book.author}`)
    })
  }
}

class Book{
    constructor(name,author){
this.name = name;
this.author = author;
    }
}

const nineteen84 = new Book ("1984", "George Orwell")
const hp = new Book ("Harry Potter", "J.K. Rowling")

const bookstore = new Bookstore( [nineteen84, hp])

bookstore.listBooks();