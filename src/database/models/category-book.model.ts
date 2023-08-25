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
    allowNull: false,
    references:{
      model: Book,
      key: 'id'
    }
  })
  bookId: number;


  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references:{
      model: Category,
      key: 'id'
    }
  })
  categoryId: number;

  @BelongsTo( () => Book, { foreignKey: 'bookId'})
  book: Book;

  @BelongsTo( () => Category ,{ foreignKey: 'categoryId'})
  category: Category;


}
