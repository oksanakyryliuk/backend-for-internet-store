import { Injectable, Inject } from '@nestjs/common';
import { CategoryBook } from 'src/database/models/category-book.model';
import { Category } from 'src/database/models/category.model';
import { Book } from 'src/database/models/book.model';

@Injectable()
export class CategoryBooksService {
    constructor(
    @Inject('CATEGORIES_BOOKS_REPOSITORY')
    private  categoruBookRepo: typeof CategoryBook ,
    
    @Inject('CATEGORIES_REPOSITORY') 
    private  categoryRepo: typeof Category
    
    //  private readonly categoriesService: CategoriesService
    
    ){}

    addCategoryBook(bookId: number, categoryId: number): Promise<CategoryBook> {
        return this.categoruBookRepo.create({
          bookId,
          categoryId
        })
      }

    async  getBooksByCategory(categoryId:number): Promise<any>{
      try {
         const category = await this.categoryRepo.findOne({
            where: { id: categoryId },
         include: [
          {
             model: Book,
             through: { // Specify the intermediate model (junction table) here
              attributes: [],
                  where: { categoryId: categoryId },
             },
             as: 'categoryBooks',
           },
         ],
         });
    
        return category.categoryBooks;
      } catch (error) {
        console.error(error);
        throw error; // Rethrow the error or handle it gracefully as per your application's requirement
      }
    }


}
