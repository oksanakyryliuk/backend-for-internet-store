import { Injectable, Inject, NotFoundException} from '@nestjs/common';
import { Language } from 'src/database/models/language.model';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { CreateLanguageDto } from './dto/create-language.dto';

@Injectable()
export class LanguagesService {

    constructor(
    @Inject('LANGUAGES_REPOSITORY')
    private  languagesModule: typeof Language       
    ){}


createLanguage(payload: CreateLanguageDto ): Promise<Language> {
    return this.languagesModule.create(payload);
  }

  async getAllLanguages(): Promise<Language[]> {
    return this.languagesModule.findAll();
}
 
async getOneByIdLanguage(id: number): Promise<Language> {
    return this.languagesModule.findByPk(id)
}


async removeLanguage(id: number) {
    return await this.languagesModule.destroy( {where: { id: id }
    });
}

async editLanguage(id: number, updateData: UpdateLanguageDto): Promise<Language> {
    const existingLanguage = await this.languagesModule.findByPk(id);
    
    if (!existingLanguage) {
      throw new NotFoundException(`Language with ID ${id} not found`);
    }
    await existingLanguage.update(updateData);
    return existingLanguage.save();
  }

}
