import { IsEnum, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";



export class CreatePublisingDto {
      @ApiProperty()
      @IsString()
      name: string;

      @ApiProperty()
      @IsString()
      city: string;

}