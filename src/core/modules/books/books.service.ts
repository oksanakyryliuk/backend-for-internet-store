import { Injectable, Inject , NotFoundException} from '@nestjs/common';
import { Book } from 'src/database/models/book.model';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Publishing } from 'src/database/models/publishing.model';
import { Language } from 'src/database/models/language.model';
import { Sequelize } from 'sequelize';
import { Category } from 'src/database/models/category.model';
import { Author } from 'src/database/models/author.model';
import { Op } from 'sequelize';

@Injectable()
export class BooksService {

    constructor(
        @Inject('BOOKS_REPOSITORY')
        private  booksModule: typeof Book,
    
        @Inject('PUBLISHINGS_REPOSITORY')
        private publModule: typeof Publishing,
    
        @Inject('LANGUAGES_REPOSITORY')
        private langModule: typeof Language
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

      async addLanguageToBook(bookId: number, languageId: number): Promise<any> {
        const existingBook = await this.booksModule.findByPk(bookId);
        const existingLanguage=await this.langModule.findByPk(languageId);

        if (!existingBook) {
          throw new NotFoundException(`Book with ID ${bookId} not found`);
        }
        if (!existingLanguage) {
          throw new NotFoundException(`Language with ID ${existingLanguage} not found`);
        }
        await existingBook.update({languageId});
      
        const book={ book: existingBook,
          publishingId: existingLanguage.id,
           publishingName: existingLanguage.name,
          };
           return book

      }

      async getFilterSortPagBooks(data): Promise<any> {
      const {limit, page, sort, category, author, language, publishing}=data
      let arrayModels=[]; 

      if (author) {
        const authorNameSurname = author.split(' ');
               arrayModels.push({ model: Author, attributes: [], where: { name: authorNameSurname[0], surname: authorNameSurname[1]}});}
      category?arrayModels.push({ model: Category, attributes: [], where: { name: category, } }):null;
      language?arrayModels.push({ model: Language, attributes: [], where: { name: language} }):null;
      publishing?arrayModels.push({ model: Publishing, attributes: [], where: { name: publishing} }):null;

      return this.booksModule.findAndCountAll(
          {
          limit: limit ? parseInt(limit) : null,
          offset: limit && page? (page - 1) * parseInt(limit) : null,
          order: [[Sequelize.literal('price'), sort]],
          include: arrayModels
          }
          );
    }




}
