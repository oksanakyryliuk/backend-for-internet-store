import { Controller, Get, Put, Post, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorsService } from './authors.service';
import { Author } from 'src/database/models/author.model';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { CreateAuthorDto } from './dto/create-author.dto';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {

    constructor(private readonly authorsService: AuthorsService) { }

    @Get('/allListAuthors')
    async getAll(): Promise<Author[]> {
        return this.authorsService.getAllAuthors();
    }


    @Get(':id')
    getOne(@Param('id') id: number): Promise<Author> {
        return this.authorsService.getOneByIdAuthor(id);
    }

    @Post('')
    async create(@Body() body: CreateAuthorDto): Promise<Author> {
        return this.authorsService.createAuthor(body);
    }


    @Delete(':id')
    async remove(@Param('id') id): Promise<string> {
        const author = await this.authorsService.getOneByIdAuthor(id);
        if (!author) throw new BadRequestException("Id invalid");

        const resultDelete = await this.authorsService.removeAuthor(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"
    }

    @Put(':id')
    edit(@Body() updateDto: UpdateAuthorDto, @Param('id') id: number) {
        return this.authorsService.editAuthor(id, updateDto);
    }

}
