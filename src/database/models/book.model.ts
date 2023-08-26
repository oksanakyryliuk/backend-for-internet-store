import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { CategoryBook } from './category-book.model';
import { AuthorBook } from './author-book.model';
import { Category } from './category.model';
import { Author } from './author.model';
import { BelongsToMany } from 'sequelize-typescript';

@Table
// ({
//   freezeTableName: true,
//   tableName: "bookdiscovery.books"
// })
export class Book extends Model<Book> {


    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column(DataType.TEXT('medium')) 
    image: string   
    
    @AllowNull(false)
    @Column
    language: string;

    @AllowNull(false)
    @Column
    publishingId: number;

    @AllowNull(false)
    @Column({
        type: DataType.DATE,
        allowNull: false,
      })
      publicateDate: Date;
    
    
    @AllowNull(false)
    @Column
    pages: number;

    @AllowNull(false)
    @Column
    price: number;

    @BelongsToMany(() => Category, { as: 'bookCategories', through: () => CategoryBook, foreignKey: 'bookId' })
    bookCategories: Category[];

    @BelongsToMany(() => Author, { as: 'bookAuthors', through: () => AuthorBook, foreignKey: 'bookId' })
    bookAuthors: Author[];


    // toJSON(): any {
    //     const values = Object.assign({}, this.get());
    
    //     delete values.image;
    //     return values;
    //   }


}