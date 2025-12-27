import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CoursesDto {
    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    price: number;

    @IsString()
    @IsOptional()
    category?: string;

    @IsString()
    @IsOptional()
    zoomLink?: string;

    @IsUUID()
    teacherId: string;
}