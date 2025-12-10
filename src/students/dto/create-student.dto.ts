import { IsString, IsInt, IsNotEmpty, Min, Max, IsUUID } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsInt()
  @Min(5)
  @Max(100)
  age: number;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  class: string;

  @IsUUID()
  @IsNotEmpty()
  teacherId: string;
}