import { IsEnum, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";



export class CreateCategoryDto {
      @ApiProperty()
      @IsString()
      name: string;

}