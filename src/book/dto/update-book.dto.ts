import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from '../Schemas/book_schema';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly author: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsEnum(Category, { message: 'Enter a valid category.' })
  readonly category: Category;
}
