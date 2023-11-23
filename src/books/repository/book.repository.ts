import { Repository } from 'typeorm';
import { Book } from '../entity/book.entity';
import { FilterBook } from '../dto/filter_book.dto';
import { InjectRepository } from '@nestjs/typeorm';

export class BookRepository {
  constructor(
    @InjectRepository(Book)
    private readonly repository: Repository<Book>,
  ) {}

  async getBooks(filter: FilterBook): Promise<Book[]> {
    const { title, author, category, min_year, max_year } = filter;

    const query = this.repository.createQueryBuilder('book');

    if (title) {
      query.andWhere('book.title LIKE :title', { title: `%${title}%` });
    }
    if (author) {
      query.andWhere('book.author LIKE :author', { author: `%${author}%` });
    }
    if (category) {
      query.andWhere('book.category LIKE :category', {
        category: `%${category}%`,
      });
    }
    if (min_year) {
      query.andWhere('book.year >= :min_year', { min_year });
    }
    if (max_year) {
      query.andWhere('book.year <= :max_year', { max_year });
    }
    return await query.getMany();
  }
}
