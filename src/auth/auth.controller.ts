import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signUpDto } from './dto/signup.dto';
import { loginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('/signup')
    signUp(@Body() signUpDto: signUpDto): Promise<{ token: string }> {
        return this.authService.singUp(signUpDto);
    }

    @Post('/login')
    logIn(@Body() loginDto: loginDto): Promise<{ token: string }> {
        return this.authService.logIn(loginDto);
    }
}
