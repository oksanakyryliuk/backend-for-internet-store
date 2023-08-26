import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { BelongsToMany, BelongsTo
 } from 'sequelize-typescript';
 import { CategoryBook } from './category-book.model';
import { Book } from './book.model';
import { HasMany } from 'sequelize-typescript';

@Table({
  tableName: 'languages'  
})
export class Language extends Model<Language> {

  @AllowNull(false)
  @Column
  name: string;
  
  @HasMany(() => Book)
  book: Book[]

}