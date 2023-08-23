import { Controller, Get, Param, Post, Delete, Put, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from 'src/database/models/category.model';
@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  
    constructor(private readonly categoriesService: CategoriesService) {}

    @Get('/allListCategories')
    async getAll(){
        return this.categoriesService.getAll();
      }

 
     @Get(':id') 
     getOne(@Param('id') id){
          return this.categoriesService.getOneById(id);
      }

    @Post('/create')
    async create(@Body() body: CreateCategoryDto): Promise<Category> {
        return this.categoriesService.create(body);
      }
     
      
    @Delete(':id')
    remove(@Param('id') id): any{
        return this.categoriesService.remove(id);
    }

    @Put(':id')
    edit(@Body() updateDto: UpdateCategoryDto, @Param('id') id: any) {
        return this.categoriesService.edit(id, updateDto);
    }

}
