import { Module } from '@nestjs/common';
import { LanguagesController } from './languages.controller';
import { LanguagesService } from './languages.service';
import { ProvidersModule } from 'src/core/providers/app-main-providers.module';

@Module({
   imports:[ProvidersModule],
  controllers: [LanguagesController],
  providers: [LanguagesService]
})
export class LanguagesModule {}
