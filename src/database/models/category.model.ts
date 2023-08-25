import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { BelongsToMany, BelongsTo
 } from 'sequelize-typescript';
 import { CategoryBook } from './category-book.model';
import { Book } from './book.model';

@Table
export class Category extends Model<Category> {

  @AllowNull(false)
  @Column
  name: string;
  
   @BelongsToMany(() => Book, { as: 'categoryBooks', through: () => CategoryBook, foreignKey: 'categoryId' })
   categoryBooks: Book[];

  //  @BelongsTo(() => Book)
  //  book: Book;

}