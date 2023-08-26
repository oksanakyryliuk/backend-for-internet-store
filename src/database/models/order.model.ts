import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { OrderBook } from './order-book.model';
import { BelongsToMany } from 'sequelize-typescript';
import { Book } from './book.model';

@Table({
  tableName: 'orders'  
})
export class Order extends Model<Order> {
    
  @AllowNull(false)
  @Column
  name: string;

  
  @AllowNull(false)
  @Column
  userId: string;

  @AllowNull(false)
  @Column
  address: string;


  @Column
  price: number ;
  
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: Date;

  @AllowNull(false)
  @Column({
    values: ['pending', 'payment pending', 'processing', 'delivered', 'complete', 'canceled', 'returned'],
  })
  status: string

  @BelongsToMany(() => Book, { as: 'orderBooks', through: () =>OrderBook, foreignKey: 'orderId' })
  orderBooks: Book[];


}
