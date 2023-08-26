import { IsEnum, IsDate, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { StatusEnum } from "src/common/enums/status.enum";
import { Type } from "class-transformer";
import { Default } from "sequelize-typescript";


export class CreateOrderDto {
      @ApiProperty()
      @IsString()
      name: string;
    
      // @ApiProperty()
      // @IsNumber()
      // userId: number;
    
      @ApiProperty()
      @IsString()
      address: string;
    
      @ApiProperty()
      @IsNumber()
      price: number;

      @ApiProperty()
      @IsDate()
      @Type(() => Date)
      date: Date;
    
      @ApiProperty()
      @IsOptional()
      @IsEnum(StatusEnum)
      status: string;
}