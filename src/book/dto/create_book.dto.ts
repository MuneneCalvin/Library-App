import { Category } from "../schemas/book.schemas"

export class CreateBookDto {
    readonly title: string
    readonly description: string
    readonly author: string
    readonly price: number
    readonly rating: number
    readonly category: Category
    readonly is_deleted: boolean
}