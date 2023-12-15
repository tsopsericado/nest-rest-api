import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Category } from '../Schemas/book_schema';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsEnum(Category, { message: 'please enter correct category' })
  readonly category: Category;
}
