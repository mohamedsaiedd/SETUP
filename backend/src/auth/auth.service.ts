import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { SignedDto } from './dto/signed.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthResultsDto } from './dto/authResults';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async userValidation(input: AuthDto): Promise<AuthResultsDto> {
        // Find user by email only (password is hashed in DB)
        const user = await this.prisma.user.findUnique({
            where: { email: input.email },
        });

        // Check if user exists and password matches the hash
        if (!user || !bcrypt.compareSync(input.password, user.password)) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return {
            token: "1234567890",
            data: user,
            message: 'Login successful',
            status: 200,
            success: true,
            timestamp: new Date(),
        };
    }
}