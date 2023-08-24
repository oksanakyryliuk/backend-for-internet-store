import { IsEnum, IsNumber, IsString, IsOptional, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateAuthorDto {
      @ApiProperty()
      @IsString()
      name: string;

      @ApiProperty()
      @IsString()
      surname: string;

      @ApiProperty()
      @IsString()
      nickname: string;

}




