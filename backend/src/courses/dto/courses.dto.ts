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
}

export class UpdateCoursesDto extends PartialType(CoursesDto) {}