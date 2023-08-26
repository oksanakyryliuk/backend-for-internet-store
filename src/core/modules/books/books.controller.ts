import { Controller, Get, Param, Body, Put, Post, Delete, BadRequestException, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from 'src/database/models/book.model';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';
import { Publishing } from 'src/database/models/publishing.model';
import { ApiOperation } from '@nestjs/swagger';

@ApiTags('Books')
@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) { }

    @Get('/allListBooks')
    @ApiOperation({ summary: 'Endpoint for getting all books' })
    async getAll(): Promise<Book[]> {
        return this.booksService.getAllBooks();
    }


    @Get(':id')
    @ApiOperation({ summary: 'Endpoint for getting one book by id' })
    getOne(@Param('id') id: number): Promise<Book> {
        return this.booksService.getOneByIdBook(id);
    }

    @Post('')
    @ApiOperation({ summary: 'Endpoint for creating book' })
    async create(@Body() body: CreateBookDto): Promise<Book> {
        return this.booksService.createBook(body);
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Endpoint for deleting book' })
    async remove(@Param('id') id:number): Promise<string> {
        const book = await this.booksService.getOneByIdBook(id);
        if (!book) throw new BadRequestException("Id invalid");

        const resultDelete = await this.booksService.removeBook(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"
    }

    @Put(':id')
    @ApiOperation({ summary: 'Endpoint for updating book' })
    edit(@Body() updateDto: UpdateBookDto, @Param('id') id: number) {
        return this.booksService.editBook(id, updateDto);
    }

    @Put(':id/publishing')
    @ApiOperation({ summary: 'Endpoint for change publishing for book by id' })
    async addPublishing(@Param('id') id:number, @Query('publishingId') publishingId: number){
      return this.booksService.addPublishingToBook(id, publishingId);
    }

    @Put(':id/language')
    @ApiOperation({ summary: 'Endpoint for change language for book by id' })
    async addLanguage(@Param('id') id:number, @Query('languageId') languageId: number){
      return this.booksService.addLanguageToBook(id, languageId);
    }
}
