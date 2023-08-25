import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config'
import databaseConfig from './config/database.config';
import { VALIDATOR } from "./config/env-config.validator";
import { UsersModule } from './core/modules/users/users.module';
import { AuthModule } from './core/modules/auth/auth.module';
import { CategoriesModule } from './core/modules/categories/categories.module';
import { OrdersModule } from './core/modules/orders/orders.module';
import { AuthorsModule } from './core/modules/authors/authors.module';
import { BooksModule } from './core/modules/books/books.module';
import { LanguagesModule } from './core/modules/languages/languages.module';
import { PublishingModule } from './core/modules/publishing/publishing.module';
import { CategoryBooksModule } from './core/modules/category-books/category-books.module';

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
    UsersModule,
    AuthModule,
    CategoriesModule,
    OrdersModule,
    AuthorsModule,
    BooksModule,
    LanguagesModule,
    PublishingModule,
    CategoryBooksModule,

  ],
})
export class AppModule {}
