import { IsArray, IsOptional, IsString } from "class-validator";

export class ClassesDto {
   @IsString()
   name : string;

    @IsString()
    @IsOptional()
    gradeId: string;

    @IsArray()
    @IsOptional()
    @IsString({ each: true })  
    students: string[];
}