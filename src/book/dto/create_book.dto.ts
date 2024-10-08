import { IsString, IsNotEmpty, IsNumber, IsEnum, IsEmpty } from "class-validator"
import { Category } from "../schemas/book.schemas"
import { User } from "src/auth/schemas/user.schema"

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

    @IsEmpty({message: "Do not provide userId"})
    readonly user: User

    readonly is_deleted: boolean
}