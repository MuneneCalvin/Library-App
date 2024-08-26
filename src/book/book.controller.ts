import { Controller, Body, Get, Post, Put, Param } from '@nestjs/common';
import { Book } from './schemas/book.schemas';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create_book.dto';
import { UpdateBookDto } from './dto/update_book.dto';

@Controller('books')
export class BookController {
    constructor(
        private readonly bookService: BookService
    ) {}

    @Post()
    async createBook(@Body() book: CreateBookDto): Promise<Book> {
        return this.bookService.createBook(book);
    }

    @Get()
    async getBooks(): Promise<Book[]> {
        return this.bookService.getBooks();
    }

    @Get(':bookId')
    async getBook(@Param('bookId') bookId: string,): Promise<Book> {
        return this.bookService.getBook(bookId);
    }

    @Put(':bookId')
    async updateBook(@Param('bookId') bookId: string, @Body() book: UpdateBookDto): Promise<Book> {
        return this.bookService.updateBook(bookId, book);
    }

    @Put(':bookId')
    async deleteBook(bookId: string): Promise<Book> {
        return this.bookService.deleteBook(bookId);
    }
}
