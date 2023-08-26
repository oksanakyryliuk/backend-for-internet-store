import { Controller, Get, Param, Post, Delete, Put, Body, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from 'src/database/models/category.model';
import { ApiOperation } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {

    constructor(private readonly categoriesService: CategoriesService) { }

    @Get('/allListCategories')
    @ApiOperation({ summary: 'Endpoint for getting all categories' })
    async getAll() {
        return await this.categoriesService.getAllCategory();
    }


    @Get(':id')
    @ApiOperation({ summary: 'Endpoint for getting one category by id' })
    getOne(@Param('id') id): Promise<Category> {
        return this.categoriesService.getOneByIdCategory(id);
    }

    @Post('')
    @ApiOperation({ summary: 'Endpoint for creating category' })
    async create(@Body() body: CreateCategoryDto): Promise<Category> {
        return this.categoriesService.createCategory(body);
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Endpoint for deletting one category by id' })
    async remove(@Param('id') id): Promise<string> {
        const category = await this.categoriesService.getOneByIdCategory(id);
        if (!category) throw new BadRequestException("Id invalid");

        const resultDelete = await this.categoriesService.removeCategory(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"
    }

    @Put(':id')
    @ApiOperation({ summary: 'Endpoint for updating one category by id' })
    edit(@Body() updateDto: UpdateCategoryDto, @Param('id') id: number) {
        return this.categoriesService.editCategory(id, updateDto);
    }

}
