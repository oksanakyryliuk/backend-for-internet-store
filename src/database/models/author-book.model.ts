import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';

@Table
export class AuthorBook extends Model<AuthorBook> {

    @AllowNull(false)
    @Column
    bookId: string;

    @AllowNull(false)
    @Column
    authorId: string;


}