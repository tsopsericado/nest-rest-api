import { Category } from "../Schemas/book_schema";


export class UpdateBookDto {
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}