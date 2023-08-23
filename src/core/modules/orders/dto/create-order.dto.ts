import { IsEnum, IsDate, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Stats } from "fs";
import { StatusEnum } from "src/common/enums/status.enum";
import { Type } from "class-transformer";


export class CreateOrderDto {
      @ApiProperty()
      @IsString()
      name: string;
    
      @ApiProperty()
      @IsNumber()
      userId: string;
    
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
      @IsEnum(StatusEnum)
      status: string;
}