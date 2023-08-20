import { Column, Model, Table, DataType, AllowNull } from 'sequelize-typescript';

@Table
export class Publishing extends Model<Publishing> {

    @AllowNull(false)
    @Column
    name: string;
  
  
    @AllowNull(false)
    @Column
    city: string;

}