import { IsNumber } from "class-validator";

export class BookDto {
    @IsNumber()
    id: number;
  
    @IsNumber()
    count: number;

  }
  