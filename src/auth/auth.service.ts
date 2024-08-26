import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { signUpDto } from './dto/signup.dto';
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<User>,
        private jwtService: JwtService
    ) {}

    async singUp(signUpDto: signUpDto): Promise<{ token: string }> {
        const { first_name, last_name, email, password } = signUpDto;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userModel.create({ first_name, last_name, email, password: hashedPassword });

        const token = this.jwtService.sign({ id: user._id });

        return { token };
    }

    async logIn(loginDto: loginDto): Promise<{ token: string }> {
        const { email, password } = loginDto;
        const user = await this.userModel.findOne({ email });
        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new UnauthorizedException('Invalid Credentials');
        }

        const token = this.jwtService.sign({ id: user._id });

        return { token };
    }
}
