import { User } from '@prisma/client';

export class AuthResultsDto {
    data: User;
    token: string;
    message: string;
    status: number;
    success: boolean;
    timestamp: Date;
}