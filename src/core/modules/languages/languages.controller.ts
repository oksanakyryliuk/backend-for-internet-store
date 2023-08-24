import { Controller,  Get, Post, Put, Delete, Param, Body, BadRequestException  } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LanguagesService } from './languages.service';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { CreateLanguageDto } from './dto/create-language.dto';
import { Language } from 'src/database/models/language.model';

@ApiTags('Languages')
@Controller('languages')
export class LanguagesController {

    constructor(private readonly languagesService: LanguagesService) { }

    @Get('/allListLanguages')
    async getAll() {
        return await this.languagesService.getAllLanguages();
    }


    @Get(':id')
    getOne(@Param('id') id): Promise<Language> {
        return this.languagesService.getOneByIdLanguage(id);
    }

    @Post('')
    async create(@Body() body: CreateLanguageDto): Promise<Language> {
        return this.languagesService.createLanguage(body);
    }


    @Delete(':id')
    async remove(@Param('id') id): Promise<string> {
        const category = await this.languagesService.getOneByIdLanguage(id);
        if (!category) throw new BadRequestException("Id invalid");

        const resultDelete = await this.languagesService.removeLanguage(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"
    }

    @Put(':id')
    edit(@Body() updateDto: UpdateLanguageDto, @Param('id') id: number) {
        return this.languagesService.editLanguage(id, updateDto);
    }

}
