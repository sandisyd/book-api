import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class BooksService {
  private books: any[] = [];

  getBooks(title: string, author: string, category: string): any[] {
    console.log(`Hasil getAllBooks : ${this.books}`);
    return this.books;
  }

  getBook(id: string){
    const bookIdx = this.findBookById(id)
    return this.books[bookIdx]
  }
  deleteBook(id: string){
    const bookIdx = this.findBookById(id)
    this.books.splice(bookIdx, 1)
  }

  createBook(title: string, author: string, category: string) {
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
    });
  }

  updateBook(id: string, title: string, author: string, category: string) {
    const idBook = this.findBookById(id);
    if (idBook !== -1) {
      
      this.books[idBook].title = title;
      this.books[idBook].author = author;
      this.books[idBook].category = category;
    }
  }

  findBookById(id: string) {
    const bookId = this.books.findIndex((book) => book.id === id);
    if (bookId === -1) {
      throw new NotFoundException(`Book with id ${id} is not found`);
    }
    return bookId;
  }
}
