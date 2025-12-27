import { IsNumber, IsOptional, IsString, IsUUID, IsArray } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

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

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    zoomLinks: string[];

    @IsUUID()
    teacherId: string;

    @IsArray()
    @IsOptional()
    sessions?: SessionDto[];
}

export class SessionDto {
    @IsString()
    title: string;

    @IsString()
    date: string; // ISO Date string

    @IsString()
    link: string;
}

export class UpdateCoursesDto extends PartialType(CoursesDto) {}