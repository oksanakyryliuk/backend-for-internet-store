import { IsEnum, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";



export class CreateLanguageDto {
      @ApiProperty()
      @IsString()
      name: string;

}