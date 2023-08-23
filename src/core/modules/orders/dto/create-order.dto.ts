import { IsEnum, IsDate, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Stats } from "fs";
import { StatusEnum } from "src/common/enums/status.enum";



export class CreateOrderDto {
      @IsString()
      name: string;
    
      @IsNumber()
      userId: string;
    
      @IsString()
      address: string;
    
      @IsNumber()
      price: string ;
      
      @IsDate()
      date: Date;
    
      @IsEnum(StatusEnum)
      status: string;
}