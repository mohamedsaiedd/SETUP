import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { TokensDto } from './dto/tokens.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ResponseDto } from './dto/authResults';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async userValidation(input: AuthDto): Promise<ResponseDto> {
        // Find user by email only (password is hashed in DB)
        const user = await this.prisma.user.findUnique({
            where: { email: input.email },
        });

        // Check if user exists and password matches the hash
        if (!user || !bcrypt.compareSync(input.password, user.password)) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const tokens = await this.generateTokens(user);
        
        return {
            data: user,
            tokens :{
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
            },
            message: 'Login successful',
            status: 200,
            success: true,
            timestamp: new Date(),
        };
    }

    async generateTokens(input : User): Promise<TokensDto> {
        const accessToken =  this.jwtService.sign({
            id: input.id,
            email: input.email,
            role: input.role,
        }, {
            expiresIn: '1h',
        });

        const refreshToken = this.jwtService.sign({
            id: input.id,
            email: input.email,
            role: input.role,
        }, {
            expiresIn: '7d',
        });

        const hashedToken = await bcrypt.hash(refreshToken, 10);

        return {
            accessToken,
            refreshToken: hashedToken,
        }
    }
}