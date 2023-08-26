import { Module } from '@nestjs/common';
import { AuthorBooksController } from './author-books.controller';
import { AuthorBooksService } from './author-books.service';
import { ProvidersModule } from 'src/core/providers/app-main-providers.module';

@Module({
  imports: [ProvidersModule],
  controllers: [AuthorBooksController],
  providers: [AuthorBooksService]
})
export class AuthorBooksModule {}
