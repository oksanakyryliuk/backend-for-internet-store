import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { ProvidersModule } from 'src/core/providers/app-main-providers.module';
import { OrdersService } from './orders.service';

@Module({
  imports: [ProvidersModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
