import { IsString, IsNotEmpty, IsNumber, IsEnum } from "class-validator"
import { Category } from "../schemas/book.schemas"

export class CreateBookDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string

    @IsString()
    @IsNotEmpty()
    readonly description: string

    @IsString()
    @IsNotEmpty()
    readonly author: string

    @IsNumber()
    @IsNotEmpty()
    readonly price: number

    @IsNumber()
    readonly rating: number

    @IsNotEmpty()
    @IsEnum(Category, { message: 'Invalid category' })
    readonly category: Category

    readonly is_deleted: boolean
}