import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.model';

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
      sequelize.addModels([User]);
      // await sequelize.sync();
      await sequelize.sync(
         { alter: true }
        );
      return sequelize;
    },
  },
];