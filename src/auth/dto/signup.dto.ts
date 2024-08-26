import { IsString, IsNotEmpty, IsEmail, MinLength,  } from "class-validator"

export class signUpDto {
    @IsString()
    @IsNotEmpty()
    readonly first_name: string

    @IsString()
    @IsNotEmpty()
    readonly last_name: string

    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email' })
    readonly email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: number

    readonly is_deleted: boolean
}