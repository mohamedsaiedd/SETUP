import { Injectable, NotFoundException } from "@nestjs/common";
import { GradesDto } from "./dto/grades.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma } from "@prisma/client";

@Injectable()
export class GradesService {
    constructor(private prisma: PrismaService) {}
    async create(dto: GradesDto) {
        try {
        return await this.prisma.grade.create({
            data: {
                name: dto.name,
                classes: {
                    create: dto.classes?.map((name) => ({ name })),
                },
                courses: {
                    connect: dto.courses?.map((id) => ({ id })),
                },
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        })
    }catch (error) {
        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            if(error.code === 'P2002') {
                throw new Error('Grade already exists');
            }
        }
        throw error;
    }}
    async findAll(params?: Prisma.GradeFindManyArgs) {
        return this.prisma.grade.findMany(params);
    }
    async delete(id:string) {
        try{
            return await this.prisma.grade.delete({
                where:{
                    id
                }
            })
        }catch (error) {
            if(error instanceof Prisma.PrismaClientKnownRequestError) {
                if(error.code === 'P2025') {
                    throw new NotFoundException(`Grade with ${id} not found`);
                }
            }
            throw error;
        }
    }
}