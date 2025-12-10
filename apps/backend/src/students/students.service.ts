import { Injectable, ConflictException } from "@nestjs/common";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { Student } from "./students.type";
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable() 
export class StudentsService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.students.findMany();
    }
    
    findById(id: number) {
        return this.prisma.students.findUnique({ where: { id } });
    }

    update(id: number, updateStudentDto: UpdateStudentDto) {
        return this.prisma.students.update({
            where: { id },
            data: updateStudentDto,
        });
    }

    async create(createStudentDto: CreateStudentDto) {
        try {
            return await this.prisma.students.create({
                data: createStudentDto,
            });
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002' && (error.meta?.target as string[])?.includes('email')) {
                    throw new ConflictException('Email already exists');
                }
            }
            throw error;
        }
    }

    async delete(id: number) {
        try {
            return await this.prisma.students.delete({ where: { id } });
        }
        catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                if(error.code === 'P2025') {
                    throw new ConflictException('Student not found');
                }
            }
            throw error;
        }
    }
}
