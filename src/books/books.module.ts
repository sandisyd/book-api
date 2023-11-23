import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookRepository } from './repository/book.repository';
import { Book } from './entity/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book,BookRepository])],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
