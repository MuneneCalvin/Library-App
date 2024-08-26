import { IsString, IsNotEmpty, IsEmail, MinLength,  } from "class-validator"

export class loginDto {
    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email' })
    readonly email: string

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password: number
}