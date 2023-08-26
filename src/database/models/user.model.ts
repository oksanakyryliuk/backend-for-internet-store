import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { HasMany } from 'sequelize-typescript';
import { Order } from './order.model';

@Table({
  tableName: 'users'  
})
export class User extends Model<User> {
  
   
  @ApiProperty()
  @AllowNull(false)
  @Column
  firstName: string;

  
  @AllowNull(false)
  @Column
  lastName: string;


  @AllowNull(false)
  @Column
  username: string;

  
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column({
    defaultValue: false,
    type: DataType.BOOLEAN
  })
  isAdmin: boolean;

  @AllowNull(false)
  @Column
  password: string;


   @Column
  createdAt: Date;
  
  @Column
  updatedAt: Date;

  @HasMany(() => Order)
  order: Order[];

  toJSON(): any {
    const values = Object.assign({}, this.get());

    delete values.password;
    delete values.deletedAt;

    return values;
  }

// toJSON<T extends any>(): T {
//   const values = Object.assign({}, this.get());

//   delete values.password;
//   delete values.deletedAt;

//   return values;
// }

}