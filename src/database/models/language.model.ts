import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { BelongsToMany, BelongsTo
 } from 'sequelize-typescript';
 import { CategoryBook } from './category-book.model';
import { Book } from './book.model';

@Table({
  tableName: 'languages'  
})
export class Language extends Model<Language> {

  @AllowNull(false)
  @Column
  name: string;
  
  //  @BelongsToMany(() => Book, { as: 'bookCategories', through: () => CategoryBook, foreignKey: 'categoryId' })
  //  bookCategories: Book[];

  //  @BelongsTo(() => Book)
  //  book: Book;

}