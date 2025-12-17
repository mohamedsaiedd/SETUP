import { IsArray, IsOptional, IsString } from "class-validator";

export class GradesDto  {
   @IsString()
   name : string;

   @IsArray()
   @IsOptional()
   @IsString({ each: true })
   classes : string[];

   @IsArray()
   @IsOptional()
   @IsString({ each: true })
   courses : string[];
}