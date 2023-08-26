import { IsEnum, IsNumber, IsString, IsDate, IsOptional, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class CreateBookDto {
      @ApiProperty()
      @IsString()
      name: string;

      @ApiProperty()
      @IsString()
      image: string;


      @ApiProperty()
      @IsOptional()
      @IsNumber()
      languageId: number;

      @ApiProperty()
      @IsOptional()
      @IsNumber()
      publishingId: number;

      @ApiProperty()
      @IsDate()
      @Type(() => Date)
      publicateDate: Date;

      @ApiProperty()
      @IsNumber()
      pages: number;


      @ApiProperty()
      @IsNumber()
      price: number;


}





