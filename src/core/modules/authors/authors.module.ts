import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { ProvidersModule } from 'src/core/providers/app-main-providers.module';

@Module({
  imports: [ProvidersModule],
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule {}
