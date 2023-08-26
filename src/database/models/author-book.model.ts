import { Column, Model, Table, DataType, AllowNull, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Book } from './book.model';
import { Author } from './author.model';

@Table({
  freezeTableName: true,
  tableName: "bookdiscovery.authorbooks"
})
export class AuthorBook extends Model<AuthorBook> {

    @ForeignKey(()=>Book)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references:{
          model: Book,
          key: 'id'}
    })
    bookId: number;


    @ForeignKey(()=> Author)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references:{
          model: Author,
          key: 'id'}
    })
    authorId: number;



  @BelongsTo( () => Book, { foreignKey: 'bookId'})
  book: Book;

  @BelongsTo( () => Author ,{ foreignKey: 'authorId'})
  author: Author;
}