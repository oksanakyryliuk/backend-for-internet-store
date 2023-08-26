import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PublishingService } from './publishing.service';
import { UpdatePublishingDto } from './dto/update-publishing.dto';
import { Publishing } from 'src/database/models/publishing.model';
import { CreatePublisingDto } from './dto/create-publishing.dto';
import { ApiOperation } from '@nestjs/swagger';

@ApiTags('Publishing')
@Controller('publishing')
export class PublishingController {


    constructor(private readonly publishingService: PublishingService) { }

    @Get('/allListPublishing')
    @ApiOperation({ summary: 'Endpoint for getting all publishings' })
    async getAll() {
        return await this.publishingService.getAllPublishing();
    }


    @Get(':id')
    @ApiOperation({ summary: 'Endpoint for getting one publishing by id' })
    getOne(@Param('id') id): Promise<Publishing> {
        return this.publishingService.getOneByIdPublishing(id);
    }

    @Post('')
    @ApiOperation({ summary: 'Endpoint for creating one publishing' })
    async create(@Body() body: CreatePublisingDto): Promise<Publishing> {
        return this.publishingService.createPublishing(body);
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Endpoint for deleting one publishing' })
    async remove(@Param('id') id): Promise<string> {
        const category = await this.publishingService.getOneByIdPublishing(id);
        if (!category) throw new BadRequestException("Id invalid");

        const resultDelete = await this.publishingService.removePublishing(id);
        return resultDelete == 1 ? "deletion successful " : "failed to delete"
    }

    @Put(':id')
    @ApiOperation({ summary: 'Endpoint for updating one publishing' })
    edit(@Body() updateDto: UpdatePublishingDto, @Param('id') id: number) {
        return this.publishingService.editPublishing(id, updateDto);
    }

}
