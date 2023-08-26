import { Column, Model, Table, DataType, AllowNull, ForeignKey } from 'sequelize-typescript';
import { CategoryBook } from './category-book.model';
import { AuthorBook } from './author-book.model';
import { Category } from './category.model';
import { Author } from './author.model';
import { BelongsToMany, BelongsTo } from 'sequelize-typescript';
import { Publishing } from './publishing.model';
import { Order } from './order.model';
import { OrderBook } from './order-book.model';
import { Language } from './language.model';

@Table({
  tableName: 'books'  
})
export class Book extends Model<Book> {


    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Column(DataType.TEXT('medium')) 
    image: string   
    
    @ForeignKey(()=> Language)
    @AllowNull(true)
    @Column ({
      type: DataType.INTEGER,
      allowNull: true,
      defaultValue: null,
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION',
      references:{
        model: Language,
        key: 'id'}
  })
    languageId: number;

   
    @ForeignKey(()=> Publishing)
    @AllowNull(true)
    @Column
    ({
      type: DataType.INTEGER,
      allowNull: true,
      defaultValue: null,
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION',
      references:{
        model: Publishing,
        key: 'id'}
  })
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

    @BelongsToMany(() => Order, { as: 'bookOrders', through: () => OrderBook, foreignKey: 'bookId' })
    bookOrders: Order[];

    @BelongsTo( () => Publishing ,{ foreignKey: 'publishingId'})
    publishing: Publishing;

    @BelongsTo( () => Language ,{ foreignKey: 'languageId'})
    language: Language;

    // toJSON(): any {
    //     const values = Object.assign({}, this.get());
    
    //     delete values.image;
    //     return values;
    //   }


}