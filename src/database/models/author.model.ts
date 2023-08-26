import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { BelongsToMany } from 'sequelize-typescript';
import { AuthorBook } from './author-book.model';
import { Book } from './book.model';

@Table({
  freezeTableName: true,
  tableName: "bookdiscovery.authors"
})
export class Author extends Model<Author> {

  @AllowNull(false)
  @Column
  name: string;

  
  @AllowNull(false)
  @Column
  surname: string;

  @Column
  nickname: string;

  @BelongsToMany(() => Book, { as: 'authorBooks', through: () => AuthorBook, foreignKey: 'authorId' })
  authorBooks: Book[];


}