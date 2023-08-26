import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.model';
import { Author } from './models/author.model';
import { AuthorBook } from './models/author-book.model';
import { Book } from './models/book.model';
import { Category } from './models/category.model';
import { CategoryBook } from './models/category-book.model';
import { Order } from './models/order.model';
import { OrderBook } from './models/order-book.model';
import { Publishing } from './models/publishing.model';
import { Language } from './models/language.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
      });
      
      sequelize.addModels([User, Language, Category, Author,Publishing,Order, Book, OrderBook, CategoryBook, AuthorBook]);
      // await sequelize.sync();
      await sequelize.sync(
         { alter: true }
        );
      return sequelize;
    },
  },
];