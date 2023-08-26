import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';

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

}
