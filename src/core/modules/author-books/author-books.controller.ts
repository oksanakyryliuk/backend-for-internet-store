import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthorBooksService } from './author-books.service';

@ApiTags('AuthorBooks')
@Controller('author-books')
export class AuthorBooksController {

    constructor(private readonly authorBooksService: AuthorBooksService) {}

    @Get('list')
    async getAll(){
        return 'work';
      }


    @Post('/:bookId/:authorId')
    @ApiOperation({ summary: 'Endpoint for combinating of author and book' })
    async addGenreToBook(@Param('bookId') bookId: number, @Param('authorId') authorId: number) {
      return this.authorBooksService.addAuthorBook(bookId, authorId)
    }
  

    @Get('/:authorId/allBooks')
    @ApiOperation({ summary: 'Endpoint for getting all books of the author.' })
    async getAllBooksCategory(@Param('authorId') authorId: number) {
      return this.authorBooksService.getBooksByAuthor(authorId)
    }
  
    @Get('/:bookId/allAuthors')
    @ApiOperation({ summary: 'Endpoint for getting all authors of the book.' })
    async getAllAuthorsForBook(@Param('bookId') bookId: number) {
      return this.authorBooksService.getAuthorsByBook(bookId)
    }

}
