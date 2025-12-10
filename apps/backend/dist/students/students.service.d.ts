import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";
export declare class StudentsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Prisma.PrismaPromise<{
        name: string;
        age: number;
        email: string;
        class: string;
        teacherId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findById(id: number): Prisma.Prisma__StudentsClient<{
        name: string;
        age: number;
        email: string;
        class: string;
        teacherId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateStudentDto: UpdateStudentDto): Prisma.Prisma__StudentsClient<{
        name: string;
        age: number;
        email: string;
        class: string;
        teacherId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createStudentDto: CreateStudentDto): Promise<{
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
        name: string;
        age: number;
        email: string;
        class: string;
        teacherId: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
