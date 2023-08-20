import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { Category } from './category.model';
import { ForeignKey } from 'sequelize-typescript';
import { Book } from './book.model';
import { BelongsTo, BelongsToMany } from 'sequelize-typescript';

@Table
export class CategoryBook extends Model<CategoryBook> {

  @ForeignKey(() => Book)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  bookId: number;


  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  categoryId: number;

  @BelongsTo( () => Book, 'bookId')
  book: Book;

  @BelongsTo( () => Category, 'categoryId')
  category: Category;


}
