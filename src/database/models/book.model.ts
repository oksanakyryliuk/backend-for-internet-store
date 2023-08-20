import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { CategoryBook } from './category-book.model';
import { Category } from './category.model';
import { BelongsToMany } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
@Table
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
    publishingId: string;

    @AllowNull(false)
    @Column
    publicateDate: string;
    
    @AllowNull(false)
    @Column
    pages: string;

    @AllowNull(false)
    @Column
    price: string;

    @BelongsToMany(() => Category, { as: 'categoryBooks', through: () => CategoryBook, foreignKey: 'bookId' })
    categoryBooks: Category[];


    // toJSON(): any {
    //     const values = Object.assign({}, this.get());
    
    //     delete values.image;
    //     return values;
    //   }


}