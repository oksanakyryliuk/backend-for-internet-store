import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';

@Table({
    tableName: 'orderbooks'  
  })
export class OrderBook extends Model<OrderBook> {
    @AllowNull(false)
    @Column
    bookId: number
  
    
    @AllowNull(false)
    @Column
    orderId: number;
  
  
    @Column
    count: number;
     
}