import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
   
  @AllowNull(false)
  @Column
  nickname: string;

  
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;


  @AllowNull(false)
  @Column
  appUserId: string;


  @Column
  createdAt: Date;
  
  @Column
  updatedAt: Date;

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