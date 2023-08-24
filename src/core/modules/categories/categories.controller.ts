import { Controller, Get, Param, Post, Delete, Put, Body, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from 'src/database/models/category.model';
@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoriesService: CategoriesService) { }

    @Get('/allListCategories')
    async getAll() {
        return await this.categoriesService.getAllCategory();
    }


    @Get(':id')
    getOne(@Param('id') id): Promise<Category> {
        return this.categoriesService.getOneByIdCategory(id);
    }

    @Post('/create')
    async create(@Body() body: CreateCategoryDto): Promise<Category> {
        return this.categoriesService.createCategory(body);
    }


    @Delete(':id')
    async remove(@Param('id') id): Promise<string> {
        const category = await this.categoriesService.getOneByIdCategory(id);
        if (!category) throw new BadRequestException("Id invalid");

        const resultDelete = await this.categoriesService.removeCategory(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"
    }

    @Put(':id')
    edit(@Body() updateDto: UpdateCategoryDto, @Param('id') id: number) {
        return this.categoriesService.editCategory(id, updateDto);
    }

}
