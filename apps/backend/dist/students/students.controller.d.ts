import type { Request } from "express";
import { CreateStudentDto } from "./dto/create-student.dto";
import { StudentsService } from "./students.service";
import { UpdateStudentDto } from "./dto/update-student.dto";
export declare class StudentController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    findById(id: number): Promise<{
        name: string;
        age: number;
        email: string;
        class: string;
        teacherId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: number, body: UpdateStudentDto): Promise<{
        name: string;
        age: number;
        email: string;
        class: string;
        teacherId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: number): Promise<{
        message: string;
        id: number;
    }>;
    create(body: CreateStudentDto): Promise<{
        name: string;
        age: number;
        email: string;
        class: string;
        teacherId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllStudents(req: Request): Promise<{
        name: string;
        age: number;
        email: string;
        class: string;
        teacherId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
