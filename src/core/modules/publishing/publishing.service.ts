import { Injectable, Inject, NotFoundException} from '@nestjs/common';
import { Publishing } from 'src/database/models/publishing.model';
import { UpdatePublishingDto } from './dto/update-publishing.dto';
import { CreatePublisingDto } from './dto/create-publishing.dto';

@Injectable()
export class PublishingService {
    
    constructor(
        @Inject('PUBLISHINGS_REPOSITORY')
        private  publishingModule: typeof Publishing       
        ){}
    
    createPublishing(payload: CreatePublisingDto ): Promise<Publishing> {
        return this.publishingModule.create(payload);
      }
    
      async getAllPublishing(): Promise<Publishing[]> {
        return this.publishingModule.findAll();
    }
     
    async getOneByIdPublishing(id: number): Promise<Publishing> {
        return this.publishingModule.findByPk(id)
    }
    
    
    async removePublishing(id: number) {
        return await this.publishingModule.destroy( {where: { id: id }
        });
    }
    
    async editPublishing(id: number, updateData: UpdatePublishingDto): Promise<Publishing> {
        const existingPublishing = await this.publishingModule.findByPk(id);
        
        if (!existingPublishing) {
          throw new NotFoundException(`Publishing with ID ${id} not found`);
        }
        await existingPublishing.update(updateData);
        return existingPublishing.save();
      }

}
