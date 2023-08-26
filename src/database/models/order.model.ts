import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { OrderBook } from './order-book.model';
import { BelongsToMany } from 'sequelize-typescript';
import { Book } from './book.model';
import { User } from './user.model';
import { ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({
  tableName: 'orders'  
})
export class Order extends Model<Order> {
    
  @AllowNull(false)
  @Column
  name: string;

  
  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    references:{
      model: User,
      key: 'id'
    }
  })
  userId: number;


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

  @AllowNull(true)
  @Column({
    type: DataType.ENUM('pending', 'payment pending', 'processing', 'delivered', 'complete', 'canceled', 'returned'),
    defaultValue: 'pending',
  })
  status: string

  @BelongsToMany(() => Book, { as: 'orderBooks', through: () =>OrderBook, foreignKey: 'orderId' })
  orderBooks: Book[];

  @BelongsTo (() => User, {foreignKey:'userId'})
  user: User;

}
