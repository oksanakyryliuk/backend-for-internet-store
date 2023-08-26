import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { BelongsTo } from 'sequelize-typescript';
import { Book } from './book.model';
import { Order } from './order.model';
import { ForeignKey } from 'sequelize-typescript';

@Table({
    tableName: 'orderbooks'  
  })
export class OrderBook extends Model<OrderBook> {
  @ForeignKey(() => Book)
  @Column({
    type: DataType.INTEGER,
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    allowNull: false,
    references:{
      model: Book,
      key: 'id'
    }
  })
  bookId: number;
  

  @AllowNull(false)
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    references:{
      model: Order,
      key: 'id'
    }
  })
    orderId: number;
  
  
    @Column
    count: number;
     

    @BelongsTo( () => Book, { foreignKey: 'bookId'})
    book: Book;
  
    @BelongsTo( () => Order ,{ foreignKey: 'orderId'})
    order: Order;

}