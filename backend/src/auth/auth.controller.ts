import { Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService) { }
    @HttpCode(HttpStatus.OK)
    @Post('login')

    login(@Body() authDto: AuthDto) {
        return this.AuthService.userValidation(authDto);
    }
}