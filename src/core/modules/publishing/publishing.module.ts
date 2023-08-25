import { Module } from '@nestjs/common';
import { PublishingController } from './publishing.controller';
import { PublishingService } from './publishing.service';
import { ProvidersModule } from 'src/core/providers/app-main-providers.module';

@Module({
  imports: [ProvidersModule],
  controllers: [PublishingController],
  providers: [PublishingService]
})
export class PublishingModule {}
