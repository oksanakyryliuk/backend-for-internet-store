import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Author } from 'src/database/models/author.model';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorsService {

    constructor(
        @Inject('AUTHORS_REPOSITORY')
        private  authorsModule: typeof Author       
        ){}


    createAuthor(payload: CreateAuthorDto): Promise<Author> {
        return this.authorsModule.create(payload);
      }

      async getAllAuthors(): Promise<Author[]> {
        return this.authorsModule.findAll();
    }
     
    async getOneByIdAuthor(id: number): Promise<Author> {
        return this.authorsModule.findByPk(id)
    }
 

    async removeAuthor(id: number) {
        return await this.authorsModule.destroy( {where: { id: id }
        });
    }

    async editAuthor(id: number, updateData: UpdateAuthorDto): Promise<Author> {
        const existingAuthor = await this.authorsModule.findByPk(id);
        
        if (!existingAuthor) {
          throw new NotFoundException(`Author with ID ${id} not found`);
        }
        await existingAuthor.update(updateData);
        return existingAuthor.save();
      }


}
