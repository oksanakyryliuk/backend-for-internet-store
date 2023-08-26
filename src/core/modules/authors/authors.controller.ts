import { Controller, Get, Put, Post, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorsService } from './authors.service';
import { Author } from 'src/database/models/author.model';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { CreateAuthorDto } from './dto/create-author.dto';
import { ApiOperation } from '@nestjs/swagger';

@ApiTags('Authors')
@Controller('authors')
export class AuthorsController {

    constructor(private readonly authorsService: AuthorsService) { }

    @Get('/allListAuthors')
    @ApiOperation({ summary: 'Endpoint for getting all list of authors' })
    async getAll(): Promise<Author[]> {
        return this.authorsService.getAllAuthors();
    }


    @Get(':id')
    @ApiOperation({ summary: 'Endpoint for get Author by ID' })
    getOne(@Param('id') id: number): Promise<Author> {
        return this.authorsService.getOneByIdAuthor(id);
    }

    @Post('')
    @ApiOperation({ summary: 'Endpoint for creating author' })
    async create(@Body() body: CreateAuthorDto): Promise<Author> {
        return this.authorsService.createAuthor(body);
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Endpoint for deleting author' })
    async remove(@Param('id') id): Promise<string> {
        const author = await this.authorsService.getOneByIdAuthor(id);
        if (!author) throw new BadRequestException("Id invalid");

        const resultDelete = await this.authorsService.removeAuthor(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"
    }

    @Put(':id')
    @ApiOperation({ summary: 'Endpoint for updating author' })
    edit(@Body() updateDto: UpdateAuthorDto, @Param('id') id: number) {
        return this.authorsService.editAuthor(id, updateDto);
    }

}
