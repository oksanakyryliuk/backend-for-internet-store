import { Controller, Param, Get, Post } from '@nestjs/common';
import { CategoryBooksService } from './category-books.service';
import { ApiProperty, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('CategoriesBooks')
@Controller('category-books')
export class CategoryBooksController {

    constructor(private readonly categoriesBooksService: CategoryBooksService) {}

    @Get('list')
    async getAll(){
        return 'work';
      }


    @Post('/:bookId/:categoryId')
    @ApiOperation({ summary: 'Endpoint for combinating of genre and book' })
    async addGenreToBook(@Param('bookId') bookId: number, @Param('categoryId') categoryId: number) {
      return this.categoriesBooksService.addCategoryBook(bookId, categoryId)
    }
  

    @Get('/:categoryId/allBooks')
    @ApiOperation({ summary: 'Endpoint for getting all books of the specified genre.' })
    async getAllBooksCategory(@Param('categoryId') categoryId: number) {
      return this.categoriesBooksService.getBooksByCategory(categoryId)
    }
  
    @Get('/:bookId/allCategories')
    @ApiOperation({ summary: 'Endpoint for getting all categories of the book.' })
    async getAllCategoriesForBook(@Param('bookId') bookId: number) {
      return this.categoriesBooksService.getCategoriesByBook(bookId)
    }
  


}
