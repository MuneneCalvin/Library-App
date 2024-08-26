import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Query } from 'express-serve-static-core';
import { Book } from './schemas/book.schemas';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name) private bookModel: mongoose.Model<Book>
    ) {}

    async createBook(book: Book): Promise<Book> {
        const newBook = await this.bookModel.create(book);
        return newBook;
    }

    async getBooks(query: Query): Promise<Book[]> {
        const resultPerPage = 5;
        const page = Number(query.page) || 1;
        const skip = (page - 1) * resultPerPage;

        const baseQuery = { is_deleted: false };
        if(query.search) {
            baseQuery['$or'] = [
                { title: { $regex: query.search, $options: 'i' } },
                { author: { $regex: query.search, $options: 'i' } },
            ];
        }

        const books = await this.bookModel.find(baseQuery).limit(resultPerPage).skip(skip).exec();
        return books;
    }

    async getBook(bookId: string): Promise<Book> {
        const book = await this.bookModel.findById(bookId, { is_deleted: false}).exec();
        if (!book) {
            throw new NotFoundException(`Book with id ${bookId} not found`);
        }

        return book;
    }

    async updateBook(bookId: string, book: Book): Promise<Book> {
        const updatedBook = await this.bookModel.findByIdAndUpdate(bookId, book, { new: true, runValidators: true });
        return updatedBook;
    }

    async deleteBook(_id: string): Promise<Book> {
        const deletedBook = await this.bookModel.findByIdAndUpdate(_id, { is_deleted: true }, { new: true });
        return deletedBook; 
    }
}
