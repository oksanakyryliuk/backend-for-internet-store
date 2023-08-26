import { Controller,  Get, Post, Put, Delete, Param, Body, BadRequestException  } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LanguagesService } from './languages.service';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { CreateLanguageDto } from './dto/create-language.dto';
import { Language } from 'src/database/models/language.model';
import { ApiOperation } from '@nestjs/swagger';

@ApiTags('Languages')
@Controller('languages')
export class LanguagesController {

    constructor(private readonly languagesService: LanguagesService) { }

    @Get('/allListLanguages')
    @ApiOperation({ summary: 'Endpoint for getting all languages' })
    async getAll() {
        return await this.languagesService.getAllLanguages();
    }


    @Get(':id')
    @ApiOperation({ summary: 'Endpoint for getting language by id' })
    getOne(@Param('id') id): Promise<Language> {
        return this.languagesService.getOneByIdLanguage(id);
    }

    @Post('')
    @ApiOperation({ summary: 'Endpoint for creating language' })
    async create(@Body() body: CreateLanguageDto): Promise<Language> {
        return this.languagesService.createLanguage(body);
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Endpoint for deleting language' })
    async remove(@Param('id') id): Promise<string> {
        const category = await this.languagesService.getOneByIdLanguage(id);
        if (!category) throw new BadRequestException("Id invalid");

        const resultDelete = await this.languagesService.removeLanguage(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"
    }

    @Put(':id')
    @ApiOperation({ summary: 'Endpoint for updating language' })
    edit(@Body() updateDto: UpdateLanguageDto, @Param('id') id: number) {
        return this.languagesService.editLanguage(id, updateDto);
    }

}
