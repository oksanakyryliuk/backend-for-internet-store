import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config'
import databaseConfig from './config/database.config';
import { VALIDATOR } from "./config/env-config.validator";

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(  
      {
        isGlobal: true,
        load: [appConfig, databaseConfig],
      envFilePath: ['.development.env','.prod.env'],
      validationSchema: VALIDATOR,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
