import { Module } from '@nestjs/common';
import { PublishingController } from './publishing.controller';
import { PublishingService } from './publishing.service';

@Module({
  imports: [PublishingModule],
  controllers: [PublishingController],
  providers: [PublishingService]
})
export class PublishingModule {}
