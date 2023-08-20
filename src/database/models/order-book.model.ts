import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';

@Table
export class OrderBook extends Model<OrderBook> {

  @AllowNull(false)
  @Column
  bookId: string;

  
  @AllowNull(false)
  @Column
  orderId: string;


  @Column
  count: number;
  
 }