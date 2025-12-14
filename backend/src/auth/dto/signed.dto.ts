import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignedDto {
    @IsString()
    userId: string;

    @IsString()
    userName: string;
}