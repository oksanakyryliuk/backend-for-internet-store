import { IsEnum, IsNumber, IsString,  IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";



export class CreateUserDto {
      @ApiProperty()
      @IsString()
      firstName: string;

      @ApiProperty()
      @IsString()
      lastName: string;
    
      @ApiProperty()
      @IsString()
      email: string;

      @ApiProperty()
      @IsString()
      username: string;
    
      @ApiProperty()
      @IsBoolean()
      isAdmin: boolean;
     
      @ApiProperty()
      @IsString()
      password: string;



}