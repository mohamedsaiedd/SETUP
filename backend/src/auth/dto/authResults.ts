import { User } from '@prisma/client';

export interface TokenDto {
    accessToken: string;
    refreshToken: string;
}

export class ResponseDto {
    data: User;
    tokens: TokenDto;
    message: string;
    status: number;
    success: boolean;
    timestamp: Date;
}