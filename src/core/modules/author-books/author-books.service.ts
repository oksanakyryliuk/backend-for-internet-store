import { Injectable, Inject } from '@nestjs/common';
import { AuthorBook } from 'src/database/models/author-book.model';
import { Author } from 'src/database/models/author.model';
import { Book } from 'src/database/models/book.model';

@Injectable()
export class AuthorBooksService {
    constructor(

        @Inject('AUTHORS_BOOKS_REPOSITORY')
        private  authorBookRepo: typeof AuthorBook ,
        
        @Inject('AUTHORS_REPOSITORY') 
        private  authorRepo: typeof Author,
        
        @Inject('BOOKS_REPOSITORY') 
        private  booksRepo: typeof Book
        
        //  private readonly categoriesService: CategoriesService
        
        ){}
    
        addAuthorBook(bookId: number, authorId: number): Promise<AuthorBook> {
            return this.authorBookRepo.create({
              bookId,
              authorId
            })
          }
    
        async  getBooksByAuthor(authorId:number): Promise<Book[]>{
          try {
            console.log(authorId);
             const author = await this.authorRepo.findOne({
                where: { id: authorId },
             include: [
              {
                 model: Book,
                 through: { // Specify the intermediate model (junction table) here
                  attributes: [],
                      where: { authorId: authorId },
                 },
                 as: 'authorBooks',
               },
             ],
             });
       
        
            return author.authorBooks;
          } catch (error) {
            console.error(error);
            throw error; // Rethrow the error or handle it gracefully as per your application's requirement
          }
        }
    
        async  getAuthorsByBook(bookId:number): Promise<Author[]>{
            try {
               const book = await this.booksRepo.findOne({
                  where: { id: bookId },
               include: [
                {
                   model: Author,
                   through: { // Specify the intermediate model (junction table) here
                    attributes: [],
                        where: { bookId: bookId },
                   },
                   as: 'bookAuthors',
                 },
               ],
               });
          
              return book.bookAuthors;
            } catch (error) {
              console.error(error);
              throw error; // Rethrow the error or handle it gracefully as per your application's requirement
            }
          }
    

}
