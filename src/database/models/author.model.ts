import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';

@Table
export class Author extends Model<Author> {

  @AllowNull(false)
  @Column
  name: string;

  
  @AllowNull(false)
  @Column
  surname: string;

  @Column
  nickname: string;



}