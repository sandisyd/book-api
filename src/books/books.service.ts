import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './repository/book.repository';
import { FilterBook } from './dto/filter_book.dto';
import { Book } from './entity/book.entity';

@Injectable()
export class BooksService {

  constructor(@InjectRepository(BookRepository) private readonly bookRepository: BookRepository){}

  getBooks(filter: FilterBook): Promise<Book[]>{
    return this.bookRepository.getBooks(filter)
  }
  // private books: any[] = [];

  // getBooks(filterBookDto: FilterBook): any[] {
  //   const {title, author, category, min_year, max_year} = filterBookDto;
  //   console.log(`Hasil getAllBooks : ${this.books}`);
  //   const books = this.books.filter((book) =>{
  //     if (title && book.title != title) {
  //       return false;
  //     }
  //     if(author && book.author != author){
  //       return false;
  //     }
  //     if(category && book.category != category){
  //       return false;
  //     }
  //     if(min_year && book.year < min_year){
  //       return false;
  //     }
  //     if (max_year && book.year > max_year) {
  //       return false;
  //     }
  //     return true;
  //   });
  //   return books;
  // }

  // getBook(id: string){
  //   const bookIdx = this.findBookById(id)
  //   return this.books[bookIdx]
  // }
  // deleteBook(id: string){
  //   const bookIdx = this.findBookById(id)
  //   this.books.splice(bookIdx, 1)
  // }

  // createBook(createBookDto: CreateBookDto) {
  //   const { title, author, category, year} = createBookDto;
  //   this.books.push({
  //     id: uuidv4(),
  //     title,
  //     author,
  //     category,
  //     year
  //   });
  // }

  // updateBook(id: string, updateBookDto: UpdateBookDto) {
  //   const {title, author, category, year} = updateBookDto
  //   const idBook = this.findBookById(id);
  //   if (idBook !== -1) {
      
  //     this.books[idBook].title = title;
  //     this.books[idBook].author = author;
  //     this.books[idBook].category = category;
  //     this.books[idBook].year = year;
  //   }
  // }

  // findBookById(id: string) {
  //   const bookId = this.books.findIndex((book) => book.id === id);
  //   if (bookId === -1) {
  //     throw new NotFoundException(`Book with id ${id} is not found`);
  //   }
  //   return bookId;
  // }
}
