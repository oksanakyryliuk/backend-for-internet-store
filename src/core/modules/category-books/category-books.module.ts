import { Module } from '@nestjs/common';
import { CategoryBooksService } from './category-books.service';
import { CategoryBooksController } from './category-books.controller';
import { ProvidersModule } from 'src/core/providers/app-main-providers.module';

@Module({
  imports:[ProvidersModule],
  providers: [CategoryBooksService],
  controllers: [CategoryBooksController]
})
export class CategoryBooksModule {
  
}
