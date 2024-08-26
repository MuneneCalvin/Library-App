import { IsEnum, IsNumber, IsOptional, IsString, IsEmpty } from "class-validator"
import { Category } from "../schemas/book.schemas"
import { User } from "src/auth/schemas/user.schema"

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

    @IsEmpty({message: "Do not provide userId"})
    readonly user:  User

    @IsOptional()
    @IsString()
    readonly is_deleted: boolean
}