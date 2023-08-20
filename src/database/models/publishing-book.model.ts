import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';

@Table
export class PublishingBook extends Model<PublishingBook> {

  @AllowNull(false)
  @Column
  bookId: string;

  
  @AllowNull(false)
  @Column
  publishingId: string;


 }