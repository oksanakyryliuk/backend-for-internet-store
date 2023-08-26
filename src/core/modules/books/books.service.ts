import { Injectable, Inject , NotFoundException} from '@nestjs/common';
import { Book } from 'src/database/models/book.model';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Publishing } from 'src/database/models/publishing.model';

@Injectable()
export class BooksService {

    constructor(
        @Inject('BOOKS_REPOSITORY')
        private  booksModule: typeof Book,
        @Inject('PUBLISHINGS_REPOSITORY')
        private publModule: typeof Publishing
        ){}


    createBook(payload: CreateBookDto): Promise<Book> {
        return this.booksModule.create(payload);
      }

      async getAllBooks(): Promise<Book[]> {
        return this.booksModule.findAll();
    }
     
    async getOneByIdBook(id: number): Promise<Book> {
        return this.booksModule.findByPk(id)
    }
 

    async removeBook(id: number) {
        return await this.booksModule.destroy( {where: { id: id }
        });
    }

    async editBook(id: number, updateData: UpdateBookDto): Promise<Book> {
        const existingBook = await this.booksModule.findByPk(id);
        
        if (!existingBook) {
          throw new NotFoundException(`Book with ID ${id} not found`);
        }
        await existingBook.update(updateData);
        return existingBook.save();
      }
      
      async addPublishingToBook(bookId: number, publishingId: number): Promise<any> {
        const existingBook = await this.booksModule.findByPk(bookId);
        const existingPublishing=await this.publModule.findByPk(publishingId);

        if (!existingBook) {
          throw new NotFoundException(`Book with ID ${bookId} not found`);
        }
        if (!existingPublishing) {
          throw new NotFoundException(`Publishing with ID ${publishingId} not found`);
        }
        await existingBook.update({publishingId});
      
        const book={ book: existingBook,
          publishingId: existingPublishing.id,
           publishingName: existingPublishing.name,
          };
           return book

      }

}
