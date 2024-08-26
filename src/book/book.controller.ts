import { Controller, Body, Get, Post, Put, Param, Query, UseGuards, Req } from '@nestjs/common';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { Book } from './schemas/book.schemas';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create_book.dto';
import { UpdateBookDto } from './dto/update_book.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('books')
export class BookController {
    constructor(
        private readonly bookService: BookService
    ) {}

    @Post()
    @UseGuards(AuthGuard())
    async createBook(@Body() book: CreateBookDto, @Req() req ): Promise<Book> {
        return this.bookService.createBook(book, req.user);
    }

    @Get()
    async getBooks(@Query() query: ExpressQuery): Promise<Book[]> {
        return this.bookService.getBooks(query);
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
