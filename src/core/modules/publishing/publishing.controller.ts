import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PublishingService } from './publishing.service';
import { UpdatePublishingDto } from './dto/update-publishing.dto';
import { Publishing } from 'src/database/models/publishing.model';
import { CreatePublisingDto } from './dto/create-publishing.dto';

@ApiTags('Publishing')
@Controller('publishing')
export class PublishingController {


    constructor(private readonly publishingService: PublishingService) { }

    @Get('/allListPublishing')
    async getAll() {
        return await this.publishingService.getAllPublishing();
    }


    @Get(':id')
    getOne(@Param('id') id): Promise<Publishing> {
        return this.publishingService.getOneByIdPublishing(id);
    }

    @Post('')
    async create(@Body() body: CreatePublisingDto): Promise<Publishing> {
        return this.publishingService.createPublishing(body);
    }


    @Delete(':id')
    async remove(@Param('id') id): Promise<string> {
        const category = await this.publishingService.getOneByIdPublishing(id);
        if (!category) throw new BadRequestException("Id invalid");

        const resultDelete = await this.publishingService.removePublishing(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"
    }

    @Put(':id')
    edit(@Body() updateDto: UpdatePublishingDto, @Param('id') id: number) {
        return this.publishingService.editPublishing(id, updateDto);
    }

}
