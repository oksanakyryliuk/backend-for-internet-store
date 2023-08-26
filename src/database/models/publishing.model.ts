import { Column, Model, Table, DataType, AllowNull, HasMany } from 'sequelize-typescript';
import { Book } from './book.model';

@Table
({
  tableName: 'publishings'  
})
export class Publishing extends Model<Publishing> {

    @AllowNull(false)
    @Column
    name: string;
  
  
    @AllowNull(false)
    @Column
    city: string;

    // @HasMany(() => Book)
    // book: Book[]
}