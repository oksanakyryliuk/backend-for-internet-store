import { Controller, Get, Param, Body, Put, Post, Delete, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from 'src/database/models/book.model';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@ApiTags('Books')
@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) { }

    @Get('/allListBooks')
    async getAll(): Promise<Book[]> {
        return this.booksService.getAllBooks();
    }


    @Get(':id')
    getOne(@Param('id') id: number): Promise<Book> {
        return this.booksService.getOneByIdBook(id);
    }

    @Post('')
    async create(@Body() body: CreateBookDto): Promise<Book> {
        return this.booksService.createBook(body);
    }


    @Delete(':id')
    async remove(@Param('id') id:number): Promise<string> {
        const book = await this.booksService.getOneByIdBook(id);
        if (!book) throw new BadRequestException("Id invalid");

        const resultDelete = await this.booksService.removeBook(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"
    }

    @Put(':id')
    edit(@Body() updateDto: UpdateBookDto, @Param('id') id: number) {
        return this.booksService.editBook(id, updateDto);
    }

}
