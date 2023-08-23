import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Category } from 'src/database/models/category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @Inject('CATEGORIES_REPOSITORY')
        private  categoriesModule: typeof Category       
        ){}


    create(payload: CreateCategoryDto): Promise<Category> {
        return this.categoriesModule.create(payload);
      }

      async getAll(): Promise<Category[]> {
        return this.categoriesModule.findAll();
    }
     
    async getOneById(id: number): Promise<Category> {
        return this.categoriesModule.findByPk(id)
    }
 

    async remove(id: number) {
        return await this.categoriesModule.destroy( {where: { id: id }
        });
    }

    async edit(id: number, updateData: UpdateCategoryDto): Promise<Category> {
        const existingCategory = await this.categoriesModule.findByPk(id);
        
        if (!existingCategory) {
          throw new NotFoundException(`Category with ID ${id} not found`);
        }
        await existingCategory.update(updateData);
        return existingCategory.save();
      }

    

}
