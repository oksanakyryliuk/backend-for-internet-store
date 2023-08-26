import { Module } from '@nestjs/common';
import { OrderBooksController } from './order-books.controller';
import { OrderBooksService } from './order-books.service';
import { ProvidersModule } from 'src/core/providers/app-main-providers.module';

@Module({
  imports: [ProvidersModule],
  controllers: [OrderBooksController],
  providers: [OrderBooksService]
})
export class OrderBooksModule {}
