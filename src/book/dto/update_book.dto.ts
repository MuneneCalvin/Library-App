import { IsEnum, IsNumber, IsOptional, IsString, } from "class-validator"
import { Category } from "../schemas/book.schemas"

export class UpdateBookDto {
    @IsOptional()
    @IsString()
    readonly title: string

    @IsOptional()
    @IsString()
    readonly description: string

    @IsOptional()
    @IsString()
    readonly author: string

    @IsOptional()
    @IsNumber()
    readonly price: number

    @IsOptional()
    @IsNumber()
    readonly rating: number

    @IsOptional()
    @IsEnum(Category, { message: 'Invalid category' })
    readonly category: Category

    @IsOptional()
    @IsString()
    readonly is_deleted: boolean
}