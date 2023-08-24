import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { ProvidersModule } from 'src/core/providers/app-main-providers.module';

@Module({
  imports:[ProvidersModule],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
